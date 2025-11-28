import { PDBTableName } from '@common/type';
import { ConfigProvider } from '@library/configs';
import { entry } from '@model/mmcif';
import * as mmcifModels from '@model/mmcif';

import { BaseModel } from '@model/shared/base';
import { StructureSummaryVO } from '@modules/web/entry/entry.vo';
import { HttpException, Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import dayjs = require('dayjs');
import { Model } from 'sequelize-typescript';
import { COMMON_SCHEMA } from './schema/common.schema';
import { CommonFunctionsService } from './functions/common.functions';
import { User } from '@model/user.model';
import { log } from 'console';
import { SchemaMap } from './schema/schemaMap.interface';

@Injectable()
export class ConvertService implements OnApplicationBootstrap {
	constructor(private readonly configs: ConfigProvider, private readonly commonFunctionsService: CommonFunctionsService) {}
	async onApplicationBootstrap() {
		try {
			if (this.configs.info.env === 'dev' || this.configs.info.env === 'test') {
				// const data = await this.convert('7WWA', COMMON_SCHEMA);
				// console.log(3333, data);
			}
		} catch (error) {
			console.error(error);
		}
	}
	/**
	 * 转换
	 */
	async convert(pdbId: string, schema: SchemaMap) {
		const modelMap: Map<PDBTableName, any[]> = new Map();
		const _entry = await entry.findOne({
			where: {
				id: pdbId,
			},
			raw: true,
		});
		if (!_entry) {
			throw new HttpException('PDB ID not found', 404);
		}
		modelMap.set('entry', [_entry]);
		const schemaVo = new StructureSummaryVO();
		// 根据常见的schemaMap进行转换
		for (const key in schema) {
			if (schema.hasOwnProperty(key)) {
				const command = schema[key];
				if (typeof command === 'string') {
					if (command.startsWith('func:')) {
						const funcName = command.replace('func:', '');
						const func = this.commonFunctionsService[funcName];
						if (!func) {
							throw new HttpException(`Function ${funcName} not found`, 500);
						}
						schemaVo[key] = await func.call(this.commonFunctionsService, pdbId, schemaVo, modelMap);
					} else {
						// 从相关表中获取数据
						let [tableName, fieldName] = command.split('.');
						if (!tableName || !fieldName) {
							continue;
						}
						fieldName = this.toCamelCase(fieldName);
						let modelData = modelMap.get(tableName as PDBTableName);
						if (!modelData) {
							let model = modelMap.get(tableName as PDBTableName) as unknown as typeof Model;
							// 从 mmcifModels 中获取 model
							const modelClass = Object.values(mmcifModels).find(item => {
								return item.getTableName() === tableName;
							});
							// @ts-ignore
							model = modelClass;
							// @ts-ignore
							modelData = await model.findAll({
								where: {
									structureId: pdbId,
								},
								raw: true,
							});
							modelMap.set(tableName as PDBTableName, modelData);
						}
						if (modelData) {
							schemaVo[key] = modelData[0][fieldName];
						}
					}
				}
			}
		}
		return schemaVo;
	}

	toCamelCase(str) {
		return str.replace(/_([a-z])/g, function (g) {
			return g[1].toUpperCase();
		});
	}
}
