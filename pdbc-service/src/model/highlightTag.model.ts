import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Highlight } from './highlight.model';
import { BaseModel } from './shared/base';
import { Tag } from './tag.model';

@Table({
	tableName: 'highlight_tag',
	timestamps: true,
	freezeTableName: true,
})
export class HighlightTag extends BaseModel<HighlightTag> {
	@ApiProperty({
		name: 'highlightId',
		type: Number,
		description: '高光时刻ID',
		required: false,
	})
	@ForeignKey(() => Highlight)
	@Column({
		comment: '高光时刻ID',
		type: DataType.INTEGER,
	})
	highlightId: number;
	@BelongsTo(() => Highlight)
	highlight: Highlight;

	@ApiProperty({
		name: 'tagId',
		type: Number,
		description: '标签ID',
		required: false,
	})
	@ForeignKey(() => Tag)
	@Column({
		comment: '标签ID',
		type: DataType.INTEGER,
	})
	tagId: number;
	@BelongsTo(() => Tag)
	tag: Tag;
}
