import { Table, Column, DataType } from 'sequelize-typescript';
import { BaseModel } from './shared/base';

@Table({ tableName: 'visitor', timestamps: true, freezeTableName: true })
export class Visitor extends BaseModel<Visitor> {
	@Column({ comment: '访问码', type: DataType.STRING })
	declare accessCode: string;

	@Column({ comment: '到期时间', type: DataType.DATE })
	declare expiresAt: Date;

	// 备注
	@Column({ comment: '备注', type: DataType.STRING })
	declare remark: string;

	@Column({ comment: '是否过期 0 未过期/1 过期', type: DataType.INTEGER })
	declare isExpires: number;
}
