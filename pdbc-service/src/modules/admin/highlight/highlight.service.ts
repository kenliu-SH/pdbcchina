import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { Highlight } from '@model/highlight.model';
import { FindHighlightPaginationDto, CreateManyHighlightDto, DeleteManyHighlightDto, CreateDto, FindDto } from './highlight.dto';
import { HighlightTag } from '@model/highlightTag.model';
import { Tag } from '@model/tag.model';
import { where } from 'sequelize';
import ERR from '@common/ERR';

@Injectable()
export class HighlightService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(Highlight)
		private highlightModel: typeof Highlight,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	private highlightCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:highlightLIST:${JSON.stringify(args)}`;
	}

	public async create(dto: CreateDto, userId: number) {
		dto.authorUID = userId;
		let result;
		try {
			result = await this.sequelize.transaction(async t => {
				if (!userId) {
					throw await ERR.USER_NOT_EXISTS;
				}
				const result = await this.highlightModel.create(
					{
						...dto,
					},
					{
						transaction: t,
					},
				);
				dto.tagsIds &&
					(await HighlightTag.bulkCreate(
						dto.tagsIds.map(tagId => {
							return {
								tagId: tagId,
								highlightId: result.id,
							};
						}),
						{
							transaction: t,
						},
					));
				return result;
			});
		} catch (error) {
			throw new HttpException(error.response || error.message, 400);
		}
		return result;
	}

	public async edit(dto: CreateDto, id: number) {
		let highlight = await this.highlightModel.findOne({ where: { id } });
		if (!highlight) {
			throw new HttpException(null, 500001);
		}

		await HighlightTag.destroy({
			where: {
				highlightId: highlight.id,
			},
		});
		dto.tagsIds &&
			(await HighlightTag.bulkCreate(
				dto.tagsIds.map(tagId => {
					return {
						tagId: tagId,
						highlightId: highlight.id,
					};
				}),
			));
		await highlight.update(dto);
		highlight = await this.highlightModel.findOne({ where: { id } });
		return highlight;
	}

	public async delete(id: number) {
		const result = await this.highlightModel.destroy({
			where: {
				id: id,
			},
		});
		return result;
	}

	public async find(id: number) {
		const options: FindOptions = { where: { id }, include: [{ all: true }] };
		const result = await Highlight.findOne(options);
		return result;
	}

	public async findPagination(dto: FindHighlightPaginationDto, pagination: Pagination) {
		const result = await this.findPaginationDao(dto, pagination);
		return result;
	}

	public async findPaginationDao(dto: any, pagination: Pagination) {
		const options: FindPaginationOptions = {
			pagination: pagination,
			where: {},
			include: [
				{
					model: Tag,
				},
			],
			order: [['releaseTime', 'DESC']],
		};
		if (dto.title) {
			options.where['title'] = {
				[Op.like]: `%${dto.title}%`,
			};
		}

		if (dto.tagsIds) {
			options.include[0]['where'] = {
				id: {
					[Op.or]: dto.tagsIds.split(','),
				},
			};
			options.include[0]['required'] = true;
		}

		if (dto.isHomePage) {
			options.where = {
				isHomePage: dto.isHomePage,
			};
		}

		if (dto.abstract) {
			options.where = {
				abstract: dto.abstract,
			};
		}

		if (dto.isChinese) {
			options.where = {
				isChinese: dto.isChinese,
			};
		}

		const result = await Highlight.findPagination<Highlight>(options);
		return result;
	}

	public async addTag(dto: HighlightTag) {
		const user = await HighlightTag.create(dto);
		return user;
	}
}
