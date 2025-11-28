import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { BOOLEAN } from 'sequelize/types';
import { NewsTag } from './newsTag.model';

import { BaseModel } from './shared/base';
import { Tag } from './tag.model';
import { User } from './user.model';

@Table({
	tableName: 'news',
	timestamps: true,
	freezeTableName: true,
	paranoid: true,
})
export class News extends BaseModel<News> {
	@ForeignKey(() => User)
	@Column({ comment: '作者id', type: DataType.INTEGER })
	authorUID: number;
	@BelongsTo(() => User)
	author: User;

	// author: User;

	@ApiProperty({ type: String, required: true, description: '标题' })
	@Column({ comment: '标题', type: DataType.STRING(512) })
	declare title: string;

	@ApiProperty({ type: String, required: false, description: '中文标题' })
	@Column({ comment: '中文标题', type: DataType.STRING(512) })
	declare zhTitle: string;

	@ApiProperty({ type: String, required: true, description: '富文本内容' })
	@Column({ comment: '富文本内容', type: DataType.TEXT })
	content: string;

	@ApiProperty({ type: String, required: false, description: '中文富文本内容' })
	@Column({ comment: '中文富文本内容', type: DataType.TEXT })
	zhContent: string;

	@ApiProperty({ type: String, required: false, description: '摘要图片' })
	@Column({ comment: '摘要图片', type: DataType.STRING(256) })
	summaryPicture: string;

	@ApiProperty({ type: [NewsTag], required: false, description: '标签' })
	@BelongsToMany(() => Tag, () => NewsTag)
	tags: NewsTag[];

	@ApiProperty({ type: String, required: false, description: '摘要' })
	@Column({ comment: '摘要', type: DataType.STRING(512) })
	summary: string;

	@ApiProperty({ type: String, required: false, description: '中文摘要' })
	@Column({ comment: '中文摘要', type: DataType.STRING(512) })
	zhSummary: string;

	@Default(0)
	@Column({ comment: '访问数量', type: DataType.INTEGER })
	visitCount: number;

	@Default(0)
	@Column({ comment: '点赞数量', type: DataType.INTEGER })
	likeCount: number;

	@Default(0)
	@ApiProperty({ type: Number, required: true, description: '是否置顶' })
	@Column({ comment: '是否置顶', type: DataType.INTEGER })
	isTop: number;

	@Default(0)
	@ApiProperty({ type: Number, required: true, description: '是否首页显示' })
	@Column({ comment: '是否首页显示', type: DataType.INTEGER })
	isHomePage: number;

	@Default(1)
	@ApiProperty({ type: Number, required: true, description: '是否显示 0 不显示 1 显示' })
	@Column({ comment: '是否显示 0 不显示 1 显示', type: DataType.INTEGER })
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
