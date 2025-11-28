import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from './shared/base';
import { ApiProperty } from '@nestjs/swagger';
import { OPTIONS_TYPE } from '@common/constant';

@Table({ tableName: 'options', timestamps: true, freezeTableName: true })
export class Options extends BaseModel<Options> {
	@ApiProperty({ type: String, required: false, description: '选项名', default: 'name' })
	@Column({ comment: '选项名', type: DataType.STRING })
	name: string;

	@ApiProperty({ type: String, required: false, description: '中文选项名', default: '中文选项名' })
	@Column({ comment: '中文选项名', type: DataType.STRING })
	zhName: string;

	@ApiProperty({ type: String, required: false, description: '图标', default: 'value' })
	@Column({ comment: '图标', type: DataType.STRING })
	icon: string;

	@ApiProperty({ type: String, required: false, description: '类型', enum: Object.values(OPTIONS_TYPE) })
	@Column({ comment: '类型', type: DataType.STRING })
	declare type: string;

	@ApiProperty({ type: Number, required: false, description: '排序值', default: 1 })
	@Column({ comment: '排序值', type: DataType.INTEGER })
	order: number;
}
