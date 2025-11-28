import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { News } from '@model/news.model';
import { FindNewsPaginationDto, CreateManyNewsDto, DeleteManyNewsDto, NewsCreateDto } from './news.dto';
import { NewsTag } from '@model/newsTag.model';
import { Tag } from '@model/tag.model';
import ERR from '@common/ERR';
import { User } from '@model/user.model';

@Injectable()
export class NewsService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(News)
		private newsModel: typeof News,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	private newsCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:newsLIST:${JSON.stringify(args)}`;
	}

	public async create(dto: NewsCreateDto, userId: number) {
		dto.authorUID = userId;
		let result;
		try {
			result = await this.sequelize.transaction(async t => {
				if (!userId) {
					throw await ERR.USER_NOT_EXISTS;
				}
				const result = await this.newsModel.create(
					{
						...dto,
					},
					{
						transaction: t,
					},
				);
				dto.tagsIds &&
					(await NewsTag.bulkCreate(
						dto.tagsIds.map(tagId => {
							return {
								tagId: tagId,
								newsId: result.id,
							};
						}),
						{
							transaction: t,
						},
					));
				return result;
			});
		} catch (error) {
			console.log('error: ', error);
			throw new HttpException(error.response || error.message, 400);
		}
		return result;
	}

	public async createMany(dto: CreateManyNewsDto) {
		let result: News[];
		const newss: News[] = [];
		try {
			result = await this.sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				dto.newss.forEach(async vo => {
					const news = await this.newsModel.create(vo, transactionHost);
					newss.push(news);
				});
				// Transaction 会自动提交
				// result 是事务回调中使用promise链中执行结果
				return newss;
			});
		} catch (err) {
			// Transaction 会自动回滚
			// err 是事务回调中使用promise链中的异常结果
		}
		return result;
	}

	public async edit(dto: NewsCreateDto, id: number) {
		let news = await this.newsModel.findOne({ where: { id } });
		if (!news) {
			throw new HttpException(null, 500001);
		}

		await NewsTag.destroy({
			where: {
				newsId: news.id,
			},
		});
		dto.tagsIds &&
			(await NewsTag.bulkCreate(
				dto.tagsIds.map(tagId => {
					return {
						tagId: tagId,
						newsId: news.id,
					};
				}),
			));
		await news.update(dto);
		news = await this.newsModel.findOne({ where: { id } });
		return news;
	}

	public async delete(id: number) {
		const result = await this.newsModel.destroy({
			where: {
				id: id,
			},
		});
		return result;
	}

	public async deleteMany(dto: DeleteManyNewsDto) {
		let successCount = 0;
		let result = true;
		try {
			for (let index = 0; index < dto.ids.length; index++) {
				const news = await this.newsModel.destroy({
					where: { id: dto.ids[index] },
				});
			}
		} catch (err) {
			throw new HttpException(null, 400037);
		}
		if (successCount < dto.ids.length) {
			throw new HttpException(null, 400037);
		}
		return result;
	}

	public async find(id: number) {
		const options: FindOptions = { where: { id } };
		const result = await News.findOne(options);
		return result;
	}

	public async findPagination(dto: FindNewsPaginationDto, pagination: Pagination) {
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
				{
					model: User,
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

		if (dto.isChinese) {
			options.where = {
				isChinese: dto.isChinese,
			};
		}

		if (dto.isHomePage) {
			options.where = {
				isHomePage: dto.isHomePage,
			};
		}

		if (dto.authorUID) {
			options.where = {
				authorUID: dto.authorUID,
			};
		}

		const result = await News.findPagination<News>(options);
		return result;
	}

	public async addTag(dto: NewsTag) {
		const user = await NewsTag.create(dto);
		return user;
	}
}
