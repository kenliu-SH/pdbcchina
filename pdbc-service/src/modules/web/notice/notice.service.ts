import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Sequelize } from '@model/shared';
import { Notice } from '@model/notice.model';
import { FindNoticePaginationDto } from './notice.dto';

@Injectable()
export class NoticeService {
	constructor(
		@InjectModel(Notice)
		private noticeModel: typeof Notice,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	public async findPagination(dto: any, pagination: Pagination, userId: number) {
		const options: FindPaginationOptions = {
			where: {
				userId: userId,
			},
			include: [],
			pagination,
		};
		const result = await Notice.findPagination<Notice>(options);
		return result;
	}
}
