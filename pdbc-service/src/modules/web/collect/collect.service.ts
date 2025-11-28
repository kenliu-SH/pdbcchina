import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { Collect } from "@model/collect.model";
import { Inject, Injectable } from '@nestjs/common';
import { CollectMany, PaginationDto } from './collect.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Collect } from '@model/collect.model';
import { FindPaginationOptions, Sequelize } from '@model/shared';
import { _EntryService } from '../entry/entry.service';
import { ok } from 'assert';

@Injectable()
export class CollectService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		@InjectModel(Collect)
		private collectModel: typeof Collect,
		private readonly configs: ConfigProvider,
		private readonly _entryService: _EntryService,
	) { }

	public async create(dto: Collect, userId: number) {
		let result = null;
		const collect = await this.collectModel.findOne({
			where: {
				uid: userId,
				entryId: dto.entryId,
			},
		});

		if (collect) {
			// 取消收藏
			result = await collect.destroy();
		} else {
			// 创建收藏
			result = await this.collectModel.create({
				uid: userId,
				entryId: dto.entryId,
			});
		}

		return ok;
	}

	public async createMany(dto: CollectMany, userId: number) {
		let result = null;
		for (let index = 0; index < dto.collects.length; index++) {
			const collect = dto.collects[index];
			const find = await this.collectModel.findOne({
				where: {
					uid: userId,
					entryId: collect.entryId,
				},
			});

			if (find) {
				result = await find.destroy();
			} else {
				result = await this.collectModel.create({ uid: userId, entryId: collect.entryId });
			}
		}
		return ok;
	}

	public async pagination(dto: PaginationDto, pagination: Pagination, userId: number) {
		const options: FindPaginationOptions = {
			where: { uid: userId },
			pagination,
		};

		const result = await Collect.findPagination<Collect>(options);
		let promises = result.rows.map(async (row) => {
			const structureSummaryVO = await this._entryService.structureSummaryV2(row.entryId)
			row.setDataValue('structureSummaryVO', structureSummaryVO);
			return row;
		});
		result.rows = await Promise.all(promises);
		return result;
	}
}
