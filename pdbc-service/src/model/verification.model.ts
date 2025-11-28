import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { BaseModel } from './shared/base';

@Table({ tableName: 'verification', timestamps: true, freezeTableName: true })
export class Verification extends BaseModel<Verification> {
	@Column({ comment: '邮箱', type: DataType.STRING })
	declare email: string;

	@Column({ comment: '验证', type: DataType.STRING })
	authCode: string;

	@Column({ comment: '是否验证', type: DataType.INTEGER })
	isVerified: number;

	@ForeignKey(() => User)
	@Column({ comment: '用户id', type: DataType.INTEGER })
	userId: number;
	@BelongsTo(() => User)
	user: User;
}
