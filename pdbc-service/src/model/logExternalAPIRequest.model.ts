import { BelongsTo, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { BaseModel } from './shared/base';

// 第三方API请求记录
@Table({
	tableName: 'log_external_api_request',
	timestamps: true,
	freezeTableName: true,
})
export class LogExternalAPIRequest extends BaseModel<LogExternalAPIRequest> {
	@Column({
		comment: '请求地址',
		type: DataType.STRING(512),
	})
	url: string;

	@Column({
		comment: '头信息JSON',
		type: DataType.JSON,
	})
	headers: object;

	@Column({
		comment: '请求参数',
		type: DataType.JSON,
	})
	request: object;

	@Column({
		comment: '响应内容',
		type: DataType.JSON,
	})
	response: object;
}
