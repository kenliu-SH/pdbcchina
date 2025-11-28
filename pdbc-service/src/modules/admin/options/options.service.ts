import { SuperRedis } from '@sophons/redis';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { Op, Sequelize } from '@model/shared';
import { Options } from '@model/options.model';
import ERR from '@common/ERR';

@Injectable()
export class OptionsService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(Options)
		private optionsModel: typeof Options,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}
}
