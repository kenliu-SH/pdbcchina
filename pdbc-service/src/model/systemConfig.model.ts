import { SystemConfigKey } from '@common/constant';
import { BelongsTo, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { User } from '.';
import { BaseModel } from './shared/base';

@Table({ tableName: 'system_config', timestamps: true, freezeTableName: true, paranoid: true })
export class SystemConfig extends BaseModel<SystemConfig> {
	// 配置KEY
	@Column({ comment: '配置KEY', type: DataType.STRING(128) })
	declare key: SystemConfigKey;

	// 配置值
	@Column({ comment: '配置值', type: DataType.JSON })
	declare value: object;
}
