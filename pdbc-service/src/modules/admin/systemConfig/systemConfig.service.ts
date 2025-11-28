import ERR from '@common/ERR';
import { ConfigProvider } from '@library/configs';
import { RedisProvider } from '@library/redis';
import { FindOptions, Op, Sequelize } from '@model/shared';
import { SystemConfig } from '@model/systemConfig.model';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SuperRedis } from '@sophons/redis';
import { addAlias } from 'module-alias';

@Injectable()
export class SystemConfigService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(SystemConfig)
		private systemConfigModel: typeof SystemConfig,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}
}
