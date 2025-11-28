import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FullTextDto, SuggestDto } from './search.dto';
import { Redisearch } from 'redis-modules-sdk';
import _ = require('lodash');
import { InjectModel, InjectConnection } from '@nestjs/sequelize';
import { _Entry } from '@model/entry.model';
import { PaginationResult } from '@model/shared/interface';
import { IndexHints, Op, Sequelize } from '@model/shared';
import { Collect } from '@model/collect.model';
import { ParseService } from '@library/parse';
import { MeilisearchProvider } from '@library/meilisearch';
import MeiliSearch from 'meilisearch';
import { ExperimentalMethod, NODE_LABEL, PDB_STATUS } from '@common/constant';
import { SearchFilterBuild } from './filter/searchFilter.build';
import { FilterGenerate } from './filter/filter.generate';
import { AdvancedSearchDto } from './filter/model/advancedSearch.dto';
import { _EntryService } from '../entry/entry.service';
import { NodeDto, Operator } from './filter/model/node.dto';
import { QueryDto } from './filter/model/query.dto';
import * as slelectData from './data.json';
import { entity, entry, pdbxAuditRevisionHistory } from '@model/mmcif';
import { PdbcStructsFlag } from '@model/expansion/pdbcStructsFlag';
import dayjs = require('dayjs');

@Injectable()
export class SearchService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		private readonly parseService: ParseService,
		@InjectModel(_Entry)
		private entryModel: typeof _Entry,
		@InjectModel(Collect)
		private collectModel: typeof Collect,
		private readonly configs: ConfigProvider,
		@Inject(MeilisearchProvider.local)
		private readonly meiliSearch: MeiliSearch,
		@InjectConnection('pdbc')
		private sequelize: Sequelize,
		private readonly _entryService: _EntryService,
	) {}

	/**
	 * 自动完成建议
	 * @param dto
	 * @returns
	 */
	public async suggest(dto: SuggestDto) {
		const result = await PdbcStructsFlag.findAll({
			attributes: ['id', 'entityId', 'status'],
			where: {
				entityId: {
					[Op.like]: `${dto.keyword}%`,
				},
			},
			// include: [{
			// 	model: pdbxAuditRevisionHistory,
			// 	attributes: ['structureId', 'revisionDate'],
			// 	where: {
			// 		revisionDate: {
			// 			[Op.lte]: dayjs().toDate()
			// 		}
			// 	},
			// 	required: true
			// }],
			limit: 15,
		});
		return result.map(item => {
			return {
				id: item.entityId,
				status: item.entityId.length == 3 ? 'chemical' : item.status,
				type: item.entityId.length == 3 ? 'chemical' : 'entity',
			};
		});
	}

	/**
	 * 高级检索
	 */
	public async advancedSearch(dto: AdvancedSearchDto, pagination: Pagination) {
		let { querySql, countSql } = this.buildFilter(dto);
		console.log('countSql->>>', countSql);
		const { page, pageSize } = pagination;
		const offset = (page - 1) * pageSize;
		const limit = pageSize;
		querySql += ` order by pdbc_structs_flag.entityId desc`;
		querySql += ` limit ${offset}, ${limit}`;
		// 拼接排序
		console.log('querySql->>>', querySql);
		let rows = await this.sequelize.query(querySql, {
			type: 'SELECT',
			raw: true,
		});
		// 带出基础结构信息
		let promises = rows.map(async row => {
			if (!dto.isExcludeStructureSummaryVO) {
				const [collectIds, structureSummaryVO] = await Promise.all([
					this.collectModel.findAll({
						attributes: ['entryId'],
						where: {
							entryId: row['entityId'],
						},
					}),
					this._entryService.structureSummaryV2(row['entityId'], true),
				]);
				row['isCollect'] = collectIds.length > 0;
				row['structureSummaryVO'] = structureSummaryVO;
			}
			return row;
		});

		rows = (await Promise.all(promises)) as any;

		// 计算总数
		let countRaw = await this.sequelize.query(countSql, {
			type: 'SELECT',
		});
		let totalNum = Object.values(countRaw[0])[0] as any;
		// if (totalNum > 209990) {
		// 	// DEBUG
		// 	totalNum = await PdbcStructsFlag.count({
		// 		distinct: true,
		// 		where: {
		// 			status: PDB_STATUS.RELEASED,
		// 			entityId: Sequelize.literal(`LENGTH(entityId) = 4`),
		// 		},
		// 	});
		// }
		return {
			total: totalNum,
			currentPage: page,
			pageSize,
			rows,
		};
	}

	/**
	 * 高级检索计数
	 */
	public async advancedSearchCount(dto: AdvancedSearchDto) {
		let { countSql } = this.buildFilter(dto);
		// 计算总数
		let countRaw = await this.sequelize.query(countSql, {
			type: 'SELECT',
		});
		let totalNum = countRaw[0]['COUNT(*)'];
		return {
			total: totalNum,
		};
	}

	/**
	 * 获取细化统计信息
	 */
	public async getRefineStatistics(dto: AdvancedSearchDto) {
		dto.pageSize = 999999999;
		let { buildRefinementsExperimentalMethodCountSql, buildRefinementsScientificNameOfSourceOrganismSql } = this.buildFilter(dto);
		let experimentalMethodCountRaw = await this.sequelize.query(buildRefinementsExperimentalMethodCountSql, {});
		let scientificNameOfSourceOrganismCountRaw = await this.sequelize.query(buildRefinementsScientificNameOfSourceOrganismSql, {});
		// 统计 Resolution值 各区间数量
		const resolutionRefine = [
			{ name: '< 0.5', count: 0 },
			{ name: '0.5 - 1.0', count: 0 },
			{ name: '1.0 - 1.5', count: 0 },
			{ name: '1.5 - 2.0', count: 0 },
			{ name: '2.0 - 2.5', count: 0 },
			{ name: '2.5 - 3.0', count: 0 },
			{ name: '3.0 - 3.5', count: 0 },
			{ name: '3.5 - 4.0', count: 0 },
			{ name: '4.0 - 4.5', count: 0 },
			{ name: '> 4.5', count: 0 },
		];
		const promises = resolutionRefine.map(async element => {
			const copyDto = JSON.parse(JSON.stringify(dto)) as AdvancedSearchDto;
			let nodeDto = new NodeDto();
			if (element.name == '< 0.5') {
				nodeDto = {
					type: 'terminal',
					service: 'text',
					parameters: {
						operator: Operator.less,
						value: 0.5,
						negation: false,
						attribute: 'refine.ls_d_res_high',
					},
				};
			} else if (element.name == '> 4.5') {
				nodeDto = {
					type: 'terminal',
					service: 'text',
					parameters: {
						operator: Operator.greater,
						value: 4.5,
						negation: false,
						attribute: 'refine.ls_d_res_high',
					},
				};
			} else {
				const value: any = element.name.split(' - ');
				nodeDto = {
					type: 'terminal',
					service: 'text',
					parameters: {
						operator: Operator.range_upper_incl,
						value: [parseFloat(value[0]), parseFloat(value[1])],
						negation: false,
						attribute: 'refine.ls_d_res_high',
					},
				};
			}
			if (!copyDto.query) {
				copyDto.query = {
					logical_operator: 'and',
					type: 'group',
					nodes: [],
				};
			}
			copyDto.query.nodes.push({
				logical_operator: 'and',
				type: 'group',
				label: NODE_LABEL.text,
				nodes: [
					{
						logical_operator: 'and',
						type: 'group',
						nodes: [nodeDto],
					},
				],
			});
			let { countSql } = this.buildFilter(copyDto);

			const countRaw = await this.sequelize.query(countSql, {
				raw: true,
			});
			element.count = countRaw[0][0]['COUNT(*)'];
		});

		await Promise.all(promises);

		// 统计 Release Date 各区间数量
		const releaseDateRefine = [
			{
				name: '1975 - 1979',
				count: 0,
			},
			{
				name: '1980 - 1984',
				count: 0,
			},
			{
				name: '1985 - 1989',
				count: 0,
			},
			{
				name: '1990 - 1994',
				count: 0,
			},
			{
				name: '1995 - 1999',
				count: 0,
			},
			{
				name: '2000 - 2004',
				count: 0,
			},
			{
				name: '2005 - 2009',
				count: 0,
			},
			{
				name: '2010 - 2014',
				count: 0,
			},
			{
				name: '2015 - 2019',
				count: 0,
			},
			{
				name: '2020 - 2024',
				count: 0,
			},
		];
		const promises2 = releaseDateRefine.map(async element => {
			const copyDto = JSON.parse(JSON.stringify(dto)) as AdvancedSearchDto;
			let nodeDto = new NodeDto();
			const value: any = element.name.split(' - ');
			nodeDto = {
				type: 'terminal',
				service: 'text',
				parameters: {
					operator: Operator.range_upper_incl,
					value: [value[0] + '-01-01', value[1] + '-12-31'],
					negation: false,
					attribute: 'pdbx_audit_revision_history.revision_date',
				},
			};
			if (!copyDto.query) {
				copyDto.query = {
					logical_operator: 'and',
					type: 'group',
					nodes: [],
				};
			}
			copyDto.query.nodes.push({
				logical_operator: 'and',
				type: 'group',
				label: NODE_LABEL.text,
				nodes: [
					{
						logical_operator: 'and',
						type: 'group',
						nodes: [nodeDto],
					},
				],
			});
			let { countSql } = this.buildFilter(copyDto);
			let countRaw = await this.sequelize.query(countSql, {
				raw: true,
			});
			element.count = countRaw[0][0]['COUNT(*)'];
		});

		await Promise.all(promises2);

		let result = {
			experimentalMethod: {
				title: 'Experimental Method',
				rows: experimentalMethodCountRaw[0]
					.filter(item => item['method'] != '')
					.map(item => {
						return {
							name: item['method'],
							count: item['count'],
						};
					}),
				attribute: 'exptl.method',
			},
			scientificNameOfSourceOrganism: {
				title: 'Scientific Name Of Source Organism',
				rows: scientificNameOfSourceOrganismCountRaw[0]
					.filter(item => item['pdbx_gene_src_scientific_name'] != null && item['pdbx_gene_src_scientific_name'] != '')
					.map(item => {
						return {
							name: item['pdbx_gene_src_scientific_name'],
							count: item['count'],
						};
					}),
				attribute: 'entity_src_gen.pdbx_gene_src_scientific_name',
			},
			resolutionRefine: {
				title: 'Refinement Resolution (Å)',
				rows: resolutionRefine,
				attribute: 'refine.ls_d_res_high',
			},
			releaseDateRefine: {
				title: 'Release Date',
				rows: releaseDateRefine,
				attribute: 'pdbx_audit_revision_history.revision_date',
			},
		};
		return result;
	}

	/**
	 * 构造过滤条件
	 */
	private buildFilter(advancedSearchDto: AdvancedSearchDto) {
		let { query } = advancedSearchDto;
		if (!query) {
			query = new QueryDto();
			query.logical_operator = 'and';
		}
		const searchFilterBuild = new SearchFilterBuild();
		if (advancedSearchDto.keyword) {
			if (!query.nodes) {
				query.nodes = [];
			}
			const findFullTextIndex = query.nodes.findIndex(item => item.label == NODE_LABEL.fullText);
			if (findFullTextIndex > -1) {
				query.nodes[0].nodes[findFullTextIndex].nodes.push({
					type: 'terminal',
					service: 'text',
					parameters: {
						value: advancedSearchDto.keyword,
					},
				});
			} else {
				query.nodes.push({
					logical_operator: 'and',
					type: 'group',
					label: NODE_LABEL.fullText,
					nodes: [
						{
							type: 'terminal',
							logical_operator: 'and',
							nodes: [
								{
									type: 'terminal',
									service: 'text',
									parameters: {
										value: advancedSearchDto.keyword,
									},
								},
							],
						},
					],
				});
			}
		}
		if (query && query.nodes) {
			const { logical_operator } = query;
			query.nodes &&
				query.nodes.forEach(item => {
					console.log('item->>>>>', item);

					// One Nodes
					const { nodes, type, logical_operator, label } = item;
					nodes &&
						nodes.forEach(node => {
							// Two Nodes
							const { type, nodes, logical_operator } = node;
							if (label == NODE_LABEL.fullText) {
								nodes.forEach(node => {
									// Three Nodes
									const { service, parameters } = node;
									if (!parameters) {
										return;
									}
									let { value } = parameters;
									if (logical_operator === 'or') {
										if (value != null && value != '') {
											let _searchFilterBuild = new SearchFilterBuild();
											_searchFilterBuild.or(new FilterGenerate('entry', 'Structure_ID', NODE_LABEL.fullText).fullText(value));
											_searchFilterBuild.or(
												new FilterGenerate('struct_keywords', 'pdbx_keywords', NODE_LABEL.fullText).fullText(value),
											);
											// _searchFilterBuild.or(
											// 	new FilterGenerate(
											// 		'struct_keywords',
											// 		'pdbx_details',
											// 		NODE_LABEL.fullText,
											// 	).fullText(value),
											// )
											searchFilterBuild.orFilter(_searchFilterBuild);
										}
									} else if (logical_operator === 'and') {
										if (value != null && value != '') {
											let _searchFilterBuild = new SearchFilterBuild();
											_searchFilterBuild.or(new FilterGenerate('entry', 'Structure_ID', NODE_LABEL.fullText).fullText(value));
											_searchFilterBuild.or(
												new FilterGenerate('struct_keywords', 'pdbx_keywords', NODE_LABEL.fullText).fullText(value),
											);
											// _searchFilterBuild.or(
											// 	new FilterGenerate(
											// 		'struct_keywords',
											// 		'pdbx_details',
											// 		NODE_LABEL.fullText,
											// 	).fullText(value),
											// )
											_searchFilterBuild.or(new FilterGenerate('citation', 'title', NODE_LABEL.fullText).fullText(value));
											_searchFilterBuild.or(new FilterGenerate('audit_author', 'name', NODE_LABEL.fullText).fullText(value));
											// _searchFilterBuild.or(
											// 	new FilterGenerate(
											// 		'exptl',
											// 		'method',
											// 		NODE_LABEL.fullText,
											// 	).fullText(value),
											// )
											_searchFilterBuild.or(new FilterGenerate('struct', 'title', NODE_LABEL.fullText).fullText(value));
											searchFilterBuild.andFilter(_searchFilterBuild);
										}
									}
								});
							} else if (label == NODE_LABEL.text || label == NODE_LABEL.textChem) {
								nodes &&
									nodes.forEach(node => {
										const { type, service, parameters } = node;
										if (!parameters) return;
										let { attribute, operator, value, negation } = parameters;
										if (value == null && operator == Operator.exists) {
											operator = Operator.not_null;
										} else if (value == null) {
											throw new HttpException(`${attribute} value is null`, HttpStatus.BAD_REQUEST);
										}
										if (value == 'oligosaccharide') {
											value = 'oligosacch';
										}
										let tableName = attribute.split('.')[0];
										let columnName = attribute.split('.')[1];
										if (logical_operator === 'or') {
											searchFilterBuild.or(new FilterGenerate(tableName, columnName).operator(operator, value, negation));
										} else if (logical_operator === 'and') {
											searchFilterBuild.and(new FilterGenerate(tableName, columnName).operator(operator, value, negation));
										}
									});
							}
						});
				});
		}
		return {
			querySql: searchFilterBuild.build(),
			countSql: searchFilterBuild.buildCount(),
			buildRefinementsExperimentalMethodCountSql: searchFilterBuild.buildRefinementsExperimentalMethodCount(),
			buildRefinementsScientificNameOfSourceOrganismSql: searchFilterBuild.buildRefinementsScientificNameOfSourceOrganismCount(),
		};
	}

	/**
	 * 生成查询描述
	 */
	public buildQueryDescription(query: QueryDto) {
		let description = '';
		if (query && query.nodes) {
			const { logical_operator } = query;
			query.nodes &&
				query.nodes.forEach(item => {
					// One Nodes
					const { nodes, type, logical_operator, label } = item;
					nodes &&
						nodes.forEach(node => {
							// Two Nodes
							const { type, nodes } = node;
							if (label == NODE_LABEL.fullText) {
								nodes.forEach(node => {
									// Three Nodes
									const { service, parameters } = node;
									if (!parameters) {
										return;
									}
									let { value } = parameters;
									description += `Full Text: ${value} ${logical_operator} `;
								});
							} else if (label == NODE_LABEL.text) {
								nodes &&
									nodes.forEach(node => {
										const { type, service, parameters } = node;
										if (!parameters) {
											return;
										}
										let { attribute, operator, value, negation } = parameters;
										// 找对应的属性文案
										let attributeText = attribute;
										slelectData.structure.selectorItems.map(item => {
											if (item.attribute == attribute) {
												attributeText = item.name;
												return true;
											}
										});
										description += `${attributeText} ${operator.toUpperCase()} '${value}' ${logical_operator} `;
									});
							}
						});
				});
		}
		// 去除最后一个and
		description = description.substring(0, description.length - 5);
		return description;
	}
}
