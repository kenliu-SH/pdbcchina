import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, Default, HasMany, Table } from 'sequelize-typescript';
import { Highlight } from './highlight.model';
import { HighlightTag } from './highlightTag.model';

import { BaseModel } from './shared/base';

@Table({ tableName: 'tag', timestamps: true, freezeTableName: true })
export class Tag extends BaseModel<Tag> {
	@ApiProperty({ type: String, required: true, description: 'title' })
	@Column({ comment: '标签名', type: DataType.STRING })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标签' })
	@Column({ comment: '中文标签名', type: DataType.STRING })
	zhName: string;

	@ApiProperty({ type: Number, required: true, description: '排序值' })
	@Column({ comment: '排序值', type: DataType.INTEGER })
	declare order: number;
}
