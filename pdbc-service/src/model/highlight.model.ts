import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToAssociation, BelongsToMany, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { _Entry } from './entry.model';
import { HighlightTag } from './highlightTag.model';

import { BaseModel } from './shared/base';
import { Tag } from './tag.model';
import { User } from './user.model';

@Table({ tableName: 'highlight', timestamps: true, freezeTableName: true })
export class Highlight extends BaseModel<Highlight> {
	@ApiProperty({ type: String, required: false, description: '标题', default: null })
	@Column({ comment: '标题', type: DataType.STRING(248) })
	declare title: string;

	@ApiProperty({ type: String, required: false, description: '中文标题', default: null })
	@Column({ comment: '中文标题', type: DataType.STRING(248) })
	declare zhTitle: string;

	@ApiProperty({ type: String, required: false, description: '封面迷你图', default: null })
	@Column({ comment: '封面迷你图', type: DataType.STRING(248) })
	miniImage: string;

	@BelongsToMany(() => Tag, () => HighlightTag)
	tags: HighlightTag[];

	@ApiProperty({ type: String, required: false, description: '简介', default: null })
	@Column({ comment: '简介', type: DataType.TEXT('long') })
	abstract: string;

	@ApiProperty({ type: String, required: false, description: '中文简介', default: null })
	@Column({ comment: '中文简介', type: DataType.TEXT('long') })
	zhAbstract: string;

	@ApiProperty({ type: String, required: false, description: '富文本内容', default: null })
	@Column({ comment: '富文本内容', type: DataType.TEXT('long') })
	content: string;

	@ApiProperty({ type: String, required: false, description: '中文富文本内容', default: null })
	@Column({ comment: '中文富文本内容', type: DataType.TEXT('long') })
	zhContent: string;

	@ForeignKey(() => User)
	@Column({ comment: '作者id', type: DataType.INTEGER })
	authorUID: number;
	@BelongsTo(() => User)
	user: User;

	@ApiProperty({ type: Number, required: true, description: '是否置顶0/1' })
	@Column({ comment: '是否置顶0/1', type: DataType.INTEGER })
	isTop: number;

	@ApiProperty({ type: Number, required: true, description: '是否首页显示0/1' })
	@Column({ comment: '是否首页显示0/1', type: DataType.INTEGER })
	isHomePage: number;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1' })
	@Column({ comment: '是否显示0/1', type: DataType.INTEGER })
	isShow: number;

	@ApiProperty({ type: Number, required: false, description: '权重 数字越大越靠前' })
	@Default(0)
	@Column({ comment: '权重 数字越大越靠前', type: DataType.INTEGER })
	weight: number;

	@ApiProperty({ type: String, required: false, description: '发布时间' })
	@Column({ comment: '发布时间', type: DataType.DATE })
	declare releaseTime: Date;

	@Column({ comment: '是否中文', type: DataType.INTEGER })
	isChinese: number;
}
