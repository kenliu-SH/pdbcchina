import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { News } from '@model/news.model';
import { FindNewsPaginationDto, CreateManyNewsDto, DeleteManyNewsDto, FindNewsDto } from './news.dto';
import { uniqBy } from 'lodash';
import dayjs = require('dayjs');

@Injectable()
export class NewsService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(News)
		private newsModel: typeof News,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) { }

	private newsCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:newsLIST:${JSON.stringify(args)}`;
	}

	public async create(dto: News) {
		const result = await this.newsModel.create(dto);
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

	public async details(id: number) {
		const result = await this.newsModel.findOne({
			where: {
				id: id,
			},
			logging: true,
		});
		if (!result) {
			throw await new HttpException(null, 400009);
		}
		return result;
	}

	public async getList(dto: FindNewsDto, pagination: Pagination) {
		const options: FindPaginationOptions = {
			pagination: pagination,
			where: { isShow: 1 },
			order: [['releaseTime', 'DESC']],
		};
		if (dto.releaseTime) {
			const releaseYear = dayjs(dto.releaseTime).format('YYYY');
			options.where[Op.and] = [
				options.where[Op.and], // 保留已经存在的查询条件
				Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('releaseTime')), '=', releaseYear),
			];
		}

		if (dto.isChinese) {
			if (dto.isChinese == 0) {
				options.attributes = { exclude: ['zhTitle', 'zhSummary', 'zhContent'] };
			} else {
				options.attributes = { exclude: ['title', 'summary', 'content'] };
			}
		}

		const result = await News.findPagination<News>(options);
		return result;
	}

	public async getDate() {
		let result = await News.findAll({
			where: {
				[Op.not]: {
					releaseTime: null,
				},
				isShow: 1
			},
			attributes: [[Sequelize.fn('DATE_FORMAT', Sequelize.col('releaseTime'), '%Y'), 'date']],
			group: 'releaseTime',
			order: [['date', 'DESC']],
			raw: true,
		});

		return uniqBy(result, 'date' as any);
	}

	public async getIdList() {
		const result = await News.findAll({
			where: { isShow: 1 },
			attributes: ['id'],
			order: [['weight', 'DESC']],
		});
		return result.map((vv: any) => vv.id);
	}
}
