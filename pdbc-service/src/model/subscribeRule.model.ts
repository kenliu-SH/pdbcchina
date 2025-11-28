import { SUBSCRIBE_RULE_CONDITION_TYPE, SUBSCRIBE_RULE_SEND_CHANNEL } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';

import { BaseModel } from './shared/base';
import { User } from './user.model';

export class Channel {
	// 发送渠道
	@ApiProperty({
		description: '发送渠道',
		enum: Object.values(SUBSCRIBE_RULE_SEND_CHANNEL),
		example: SUBSCRIBE_RULE_SEND_CHANNEL.email,
	})
	channel: SUBSCRIBE_RULE_SEND_CHANNEL;
	// 发送渠道配置
	@ApiProperty({
		description: '发送渠道配置 mailAddress openId ',
		example: {
			mailAddress: 'maoring21@gmail.com',
		},
	})
	config: object;
}

@Table({ tableName: 'subscribe_rule', timestamps: true, freezeTableName: true, paranoid: true })
export class SubscribeRule extends BaseModel<SubscribeRule> {
	// 编号
	@ApiProperty({ description: '编号' })
	@Column({ type: DataType.STRING(255), allowNull: false, comment: '编号' })
	declare code: string;

	// 订阅规则条件类型
	@ApiProperty({ description: '订阅规则条件类型', enum: Object.values(SUBSCRIBE_RULE_CONDITION_TYPE) })
	@Default(SUBSCRIBE_RULE_CONDITION_TYPE.query)
	@Column({ type: DataType.STRING(255), allowNull: false, comment: '订阅规则条件类型' })
	conditionType: SUBSCRIBE_RULE_CONDITION_TYPE;
	// 订阅用户
	@ApiProperty({ description: '订阅用户' })
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER, allowNull: false, comment: '订阅用户' })
	userId: number;

	// 订阅规则
	@ApiProperty({ description: '订阅规则' })
	@Column({ type: DataType.JSON, allowNull: false, comment: '订阅规则' })
	declare rule: object;

	// 发送渠道
	@ApiProperty({ description: '发送渠道', type: [Channel] })
	@Column({ type: DataType.JSON, allowNull: false, comment: '发送渠道' })
	declare channels: Channel[];

	// title
	@ApiProperty({ description: 'title' })
	@Column({ type: DataType.STRING(255), allowNull: false, comment: 'title' })
	declare title: string;
}
