import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { Highlights } from "@model/highlights.model";
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { FindHighlightDto } from './highlights.dto';
import { Highlight } from '@model/highlight.model';
import { InjectModel } from '@nestjs/sequelize';
import { FindPaginationOptions, Sequelize } from '@model/shared';
import { Op, where } from 'sequelize';
import { hasIn } from 'lodash';
import { uniqBy } from 'lodash';
import _ = require('lodash');
import dayjs = require('dayjs');
@Injectable()
export class HighlightsService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		@InjectModel(Highlight)
		private highlightsModel: typeof Highlight,
		private readonly configs: ConfigProvider,
	) {}

	public async details(id: number) {
		const result = await this.highlightsModel.findOne({
			where: {
				id: id,
			},
			include: [{ all: true }],
		});
		if (!result) {
			throw new HttpException(null, 400009);
		}
		return result;
	}

	public async getList(dto: FindHighlightDto, pagination: Pagination) {
		const options: FindPaginationOptions = {
			pagination: pagination,
			where: { isShow: 1 },
			order: [['releaseTime', 'DESC']],
		};

		if (dto.releaseTime) {
			const releaseYear = dayjs(dto.releaseTime).format('YYYY');
			console.log('dto.releaseTime: ', dto.releaseTime, releaseYear);
			options.where[Op.and] = [
				options.where[Op.and], // 保留已经存在的查询条件
				Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('releaseTime')), '=', releaseYear),
			];
		}

		if (dto.isChinese) {
			if (dto.isChinese == 0) {
				options.attributes = { exclude: ['zhTitle', 'zhAbstract', 'zhContent'] };
			} else {
				options.attributes = { exclude: ['title', 'abstract', 'content'] };
			}
		}

		const result = await Highlight.findPagination<Highlight>(options);
		return result;
	}

	public async getDate() {
		let result = await Highlight.findAll({
			where: {
				[Op.not]: {
					releaseTime: null,
				},
				isShow: 1,
			},
			attributes: [[Sequelize.fn('DATE_FORMAT', Sequelize.col('releaseTime'), '%Y'), 'date']],
			group: 'releaseTime',
			order: [['date', 'DESC']],
			raw: true,
		});

		return uniqBy(result, 'date' as any);
	}

	public async getIdList() {
		const result = await Highlight.findAll({
			where: { isShow: 1 },
			order: [['weight', 'DESC']],
			attributes: ['id'],
		});
		return result.map((vv: any) => vv.id);
	}
}
