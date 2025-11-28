import { NOTIFICATION_TYPE, POWER_CONTNET } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { BaseModel } from './shared/base';
import { User } from './user.model';

/**
 * 通知消息
 */
@Table({ tableName: 'notice', timestamps: true, freezeTableName: true })
export class Notice extends BaseModel<Notice> {
	// 通知类型
	@Default(NOTIFICATION_TYPE.subscribeRulePdbUpdate)
	@Column({ type: DataType.STRING(255), allowNull: false, comment: '通知类型' })
	type: NOTIFICATION_TYPE;

	// 通知内容title
	@Column({ type: DataType.STRING(255), allowNull: false, comment: '通知内容title' })
	title: string;

	// 通知内容
	@Column({ type: DataType.TEXT, allowNull: false, comment: '通知内容' })
	content: string;

	// 附加数据
	@Column({ type: DataType.JSON, allowNull: false, comment: '附加数据' })
	data: object;

	// 用户id
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER, allowNull: false, comment: '用户id' })
	userId: number;

	// 是否已读
	@Default(0)
	@Column({ type: DataType.INTEGER, allowNull: false, comment: '是否已读' })
	isRead: number;
}
