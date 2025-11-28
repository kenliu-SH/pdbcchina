import { BelongsTo, Column, DataType, ForeignKey, Index, Table } from 'sequelize-typescript';
import { _Entry } from './entry.model';
import { Highlight } from './highlight.model';
import { entry } from './mmcif/entry';
import { News } from './news.model';
import { BaseModel } from './shared/base';
import { User } from './user.model';
import { Col } from 'sequelize/types/utils';

@Table({
	tableName: 'history',
	timestamps: true,
	freezeTableName: true,
})
export class History extends BaseModel<History> {
	@Column({ comment: 'title', type: DataType.STRING })
	title: string;

	// @ForeignKey(() => entry)
	// @Column({ comment: 'structureId', type: DataType.STRING(10) })
	// structureId: string;
	// @BelongsTo(() => entry)
	// entry: entry;
	// @Column({ comment: 'entryId', type: DataType.STRING })
	// @ForeignKey(() => entry)
	entryId: string;
	// @BelongsTo(() => entry)
	entry: entry;

	@Column({ comment: 'highligthId', type: DataType.INTEGER })
	@ForeignKey(() => Highlight)
	highligthId: number;
	@BelongsTo(() => Highlight)
	highlight: Highlight;

	@Column({ comment: 'newsId', type: DataType.INTEGER })
	@ForeignKey(() => News)
	newsId: number;
	@BelongsTo(() => News)
	news: News;

	@Column({ comment: 'type', type: DataType.STRING })
	type: string;
}
