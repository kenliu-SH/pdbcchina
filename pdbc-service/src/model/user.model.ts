import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { Role } from './role.model';

import { BaseModel } from './shared/base';

@Table({ tableName: 'user', timestamps: true, freezeTableName: true })
export class User extends BaseModel<User> {
	@ApiProperty({ type: String, required: true, description: '名' })
	@Column({ comment: '名', type: DataType.STRING(128) })
	declare firstname: string;

	@ApiProperty({ type: String, required: true, description: '姓' })
	@Column({ comment: '姓', type: DataType.STRING(128) })
	declare lastname: string;

	// 名称
	@ApiProperty({ type: String, required: true, description: '名称' })
	@Column({ comment: '名称', type: DataType.STRING(128) })
	declare nickname: string;

	// 姓氏
	@ApiProperty({ type: String, required: true, description: '姓氏' })
	@Column({ comment: '姓氏', type: DataType.STRING(128) })
	declare surname: string;

	@ApiProperty({ type: String, required: true, description: '账户名称' })
	@Column({ comment: '账户名称', type: DataType.STRING(128) })
	declare accountName: string;

	@Column({ comment: '创建人Id', type: DataType.INTEGER })
	declare creatorId: number;

	declare creator: User;

	@ApiProperty({ type: String, required: true, description: '头像' })
	@Column({ comment: '头像', type: DataType.STRING(256) })
	declare photoLink: string;

	@ApiProperty({ type: String, required: true, description: '邮箱' })
	@Column({ comment: '邮箱', type: DataType.STRING(50) })
	declare email: string;

	@ApiProperty({ type: String, required: true, description: '密码' })
	@Column({ comment: '密码', type: DataType.STRING(20) })
	declare password: string;

	@ApiProperty({ type: Number, required: true, description: '是否作者' })
	@Column({ comment: '是否作者', type: DataType.INTEGER })
	declare isAuthor: number;

	@Column({ comment: '是否开关', type: DataType.INTEGER })
	declare isSwitch: number;

	// 是否验证
	@Column({ comment: '是否验证', type: DataType.INTEGER })
	declare isVerify: number;

	// 是否管理员
	@Column({ comment: '是否管理员', type: DataType.INTEGER })
	declare isAdmin: number;

	// 连续登录失败次数
	@Default(0)
	@Column({ comment: '连续登录失败次数', type: DataType.INTEGER })
	declare loginFailCount: number;

	// 账户锁定时间
	@Column({ comment: '账户锁定时间', type: DataType.DATE })
	declare lockTime: Date;

	// openid
	@Column({ comment: 'openid', type: DataType.STRING(128) })
	declare openid: string;

	@ApiProperty({ type: Number, required: true, description: '关联角色id' })
	@Column({ comment: '关联role', type: DataType.INTEGER })
	@ForeignKey(() => Role)
	declare roleID: number;
	@BelongsTo(() => Role)
	declare role: Role[];
}
