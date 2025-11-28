import { SuperRedis } from '@sophons/redis';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import {} from '@model/mmcif';
import {} from './chemicalComponent.vo';

@Injectable()
export class ChemicalComponentService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		private readonly configs: ConfigProvider,
	) {}

	public async getChemicalComponent(compId: string) {
		// const entityDescriptionVo = new EntityDescriptionVo();
		// return entityDescriptionVo;
	}

	public async getDrugBankAnnotations(compId: string) {}
}
