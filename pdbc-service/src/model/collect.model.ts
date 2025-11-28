import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToAssociation, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { _Entry } from './entry.model';

import { BaseModel } from './shared/base';
import { User } from './user.model';

@Table({
	tableName: 'collect',
	timestamps: true,
	freezeTableName: true,
})
export class Collect extends BaseModel<Collect> {
	// @ApiProperty({ type: String, required: true, description: 'entryId', default: '105D' })
	// @ForeignKey(() => entry)
	// @Column({ comment: 'entryId', type: DataType.STRING })
	declare entryId: string;

	@ForeignKey(() => User)
	@Column({ comment: '用户id', type: DataType.INTEGER })
	uid: number;

	@BelongsTo(() => User)
	user: User;

	// @BelongsTo(() => entry)
	// entry: entry;

	structureSummaryVO: any;
}
