import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { Subscribe } from "@model/subscribe.model";
import { HttpException, Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CreateSubscribeRuleDto, GetSubscribeRuleListDto } from './subscribe.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SubscribeRule } from '@model/subscribeRule.model';
import { FindPaginationOptions } from '@model/shared';
import { join } from 'path';
import { Feed } from 'feed';
import * as xml2js from 'xml2js';
import * as fs from 'fs';
import { SearchService } from '../search/search.service';
import dayjs = require('dayjs');
import axios from 'axios';

@Injectable()
export class SubscribeService implements OnApplicationBootstrap {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		@InjectModel(SubscribeRule)
		private subscribeRuleModel: typeof SubscribeRule,
		private readonly configs: ConfigProvider,
		private readonly searchService: SearchService,
	) {}
	async onApplicationBootstrap() {
		// try {
		// 	await this.getWeeklyUpdateFeed('test');
		// } catch (error) {
		// 	console.error(error);
		// }
	}

	/**
	 * 创建订阅规则
	 */
	async createSubscribeRule(dto: CreateSubscribeRuleDto, userId: number) {
		const { conditionType, rule, channels } = dto;
		let title = this.searchService.buildQueryDescription(rule);
		const subscribeRule = await this.subscribeRuleModel.create({
			userId,
			conditionType,
			rule,
			channels,
			title: title,
			code: 'SQ' + new Date().getTime().toString().substr(4),
		});
		return subscribeRule;
	}

	/**
	 * 获取订阅规则列表
	 */
	async getSubscribeRuleList(query: GetSubscribeRuleListDto, pagination: Pagination, userId: number) {
		const options: FindPaginationOptions = {
			where: {
				userId: userId,
			},
			pagination,
		};
		const subscribeRuleList = await this.subscribeRuleModel.findPagination(options);
		return subscribeRuleList;
	}

	/**
	 * 获取RSS订阅，每周更新
	 */
	async getWeeklyUpdateFeed(code: string) {
		// 获取每周更新的PDBID
		const pdbIds: [] = await this.getWeeklyUpdatePDBIds();
		// DEBUG
		// @ts-ignore
		pdbIds.push('103D');
		const subscribeRule = await this.subscribeRuleModel.findOne({
			where: {
				code: code,
			},
		});
		if (!subscribeRule) {
			throw new HttpException('订阅规则不存在', 404);
		}
		const { rule, userId } = subscribeRule;
		console.log(3333, rule);

		if (rule['nodes'].length === 0) {
			throw new HttpException('非法订阅规则', 401);
		}

		// 插入in操作
		rule['nodes'].push({
			type: 'group',
			label: 'text',
			nodes: [
				{
					type: 'group',
					nodes: [
						{
							type: 'terminal',
							service: 'text',
							parameters: {
								attribute: 'struct.entry_id',
								operator: 'in',
								negation: false,
								value: pdbIds,
							},
						},
					],
					logical_operator: 'and',
				},
			],
			logical_operator: 'and',
		});
		// 添加规则
		// TODO 最长1000条
		const searchResults = await this.searchService.advancedSearch(
			{
				query: rule,
			} as any,
			{
				page: 1,
				pageSize: 1000,
				order: 'desc',
			},
		);
		const feed = new Feed({
			title: '本周新发布的 PDB 结构匹配您的订阅规则',
			description: '根据您的订阅规则，我们为您提供了以下新发布的 PDB 结构信息',
			link: 'http://o2-1307232071.cos.ap-shanghai.myqcloud.com/lz2/web/protein/v1/index.html',
			id: 'http://o2-1307232071.cos.ap-shanghai.myqcloud.com/lz2/web/protein/v1/index.html',
			language: 'zh',
			image: 'https://s2.loli.net/2023/02/27/g38xfkDLGSaUimh.png',
			favicon: 'http://example.com/favicon.ico',
			copyright: 'All rights reserved 2023, PDBC',
			generator: 'awesome', // optional, default = 'Feed for Node.js'
			feedLinks: {
				json: 'https://example.com/json',
				atom: 'https://example.com/atom',
			},
			updated:dayjs().toDate()
		});
		for (let index = 0; index < searchResults.rows.length; index++) {
			const pdbResult = searchResults.rows[index];
			// @ts-ignore
			const { id, structureSummaryVO } = pdbResult;
			feed.addItem({
				title: `新发布的 PDB 结构：${id}`,
				description: `标题：${structureSummaryVO['title']}<br>发布日期：${dayjs(structureSummaryVO['released']).format('YYYY年MM月DD日')}<br>规则描述：${subscribeRule.title}`,
				link: `http://o2-1307232071.cos.ap-shanghai.myqcloud.com/lz2/web/protein/v1/index.html#/structure?current=1&id=${id}`,
				id: `http://o2-1307232071.cos.ap-shanghai.myqcloud.com/lz2/web/protein/v1/index.html#/structure?current=1&id=${id}`,
				date: new Date(structureSummaryVO['released']),
			});
		}
		return feed.rss2();
	}

	/**
	 * 获取每周更新的PDBID
	 */
	async getWeeklyUpdatePDBIds() {
		const resp = await axios({
			method: 'get',
			url: 'https://pdbj.org/rest/newweb/search/sql?q=select+bs.pdbid+from+pdbj.brief_summary+bs+inner+join+misc.id_meta_list+iml+on+bs.pdbid%3Diml.id+where+iml.category%3D%27pdb_new%27&format=json',
		});
		return resp.data.results;
	}
}
