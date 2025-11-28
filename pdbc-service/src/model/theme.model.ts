import { THEME } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Default, Table } from 'sequelize-typescript';
import { BaseModel } from './shared/base';

@Table({
	tableName: 'theme',
	timestamps: true,
	freezeTableName: true,
})
export class Theme extends BaseModel<Theme> {
	//   @Default(THEME.中国红)
	@Column({ comment: '主题', type: DataType.STRING })
	type: string;

	@Default(1)
	@Column({ comment: '是否默认', type: DataType.INTEGER })
	isDefault: number;

	@Default(1)
	@Column({ comment: '是否锁定主题', type: DataType.INTEGER })
	isLock: number;

	// 状态
	@Default(1)
	@Column({ comment: '状态', type: DataType.INTEGER })
	status: number;
}
