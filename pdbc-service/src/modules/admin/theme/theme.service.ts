import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { Theme } from '@model/theme.model';
import { ThemeFindAllDto } from './theme.dto';

@Injectable()
export class ThemeService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(Theme)
		private themeModel: typeof Theme,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	private bannerCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:bannerLIST:${JSON.stringify(args)}`;
	}

	public async findAll() {
		const result = await Theme.findAll();
		return result;
	}

	public async updata(dto: ThemeFindAllDto, id: number) {
		let result = await this.themeModel.findOne({
			where: { id },
		});

		if (dto.status) {
			result = await result.update({
				status: dto.status,
			});
		}
		if (dto.isDefault != null) {
			result = await result.update({
				isDefault: dto.isDefault,
			});
		}
		if (dto.isDefault == 1) {
			await this.themeModel.update(
				{
					isDefault: 0,
					isLock: 0,
				},
				{
					where: {
						id: {
							[Op.not]: id,
						},
					},
				},
			);
		}
		if (dto.isLock != null) {
			result = await result.update({
				isLock: dto.isLock,
			});
		}
		if (dto.isLock == 1) {
			await this.themeModel.update(
				{
					isDefault: 0,
					isLock: 0,
				},
				{
					where: {
						id: {
							[Op.not]: id,
						},
					},
				},
			);
		}

		return result;
	}
}
