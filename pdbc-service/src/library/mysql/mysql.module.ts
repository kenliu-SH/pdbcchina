import { ConfigModule, ConfigProvider } from '@library/configs';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as businessModels from '@model/businessIndex';
import * as pdbcModels from '@model/mmcif/index';
import * as expansionModels from '@model/expansion/index';

@Module({
	imports: [
		SequelizeModule.forFeature([...Object.values(businessModels)], 'default'),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configs: ConfigProvider) => {
				return {
					...configs.info.database,
					models: [...Object.values(businessModels)],
				};
			},
			inject: [ConfigProvider],
		}),

		SequelizeModule.forRootAsync({
			name: 'pdbc',
			imports: [ConfigModule],
			useFactory: (configs: ConfigProvider) => {
				return {
					...configs.info.pdbcDatabase,
					name: 'pdbc',
					models: [...Object.values(pdbcModels), ...Object.values(expansionModels)],
				};
			},
			inject: [ConfigProvider],
		}),
		SequelizeModule.forFeature([...Object.values(pdbcModels), ...Object.values(expansionModels)], 'pdbc'),
	],
})
export class MysqlModule {}
