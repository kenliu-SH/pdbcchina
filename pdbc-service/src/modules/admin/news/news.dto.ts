import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { News } from '@model/news.model';
import { NewsTag } from '@model/newsTag.model';
import { Tag } from '@model/tag.model';
import { BelongsToMany } from 'sequelize-typescript';

export class NewsFindDto {
	@ApiProperty({ type: String, required: false, description: '标题' })
	title: string;

	@ApiProperty({ type: Number, required: false, description: '作者id' })
	authorUID: number;

	@ApiProperty({ type: Number, required: false, description: '是否首页显示0/1' })
	isHomePage: number;

	@ApiProperty({ type: String, required: false, description: '标签 ids 用逗号分隔' })
	tagsIds: string;

	releaseTime: string;
}
export class FindNewsPaginationDto extends NewsFindDto {
	@ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
	order?: string;
	@ApiProperty({ default: 1, type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ default: 10, type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
export class CreateManyNewsDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ type: [News], required: true, description: '列表' })
	newss: News[];
}
export class DeleteManyNewsDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({
		name: 'ids',
		type: [Number],
		required: true,
		description: '列表',
	})
	ids: number[];
}

export class NewsCreateDto {
	@ApiProperty({ type: String, required: true, description: '标题', default: '标题' })
	title: string;

	@ApiProperty({ type: String, required: false, description: '中文标题', default: '中文标题' })
	zhTitle: string;

	@ApiProperty({ type: String, required: true, description: '富文本内容', default: null })
	content: string;

	@ApiProperty({ type: String, required: false, description: '中文富文本内容', default: null })
	zhContent: string;

	@ApiProperty({ type: String, required: false, description: '摘要图片', default: null })
	summaryPicture: string;

	@ApiProperty({ type: [Number], required: false, description: '标签 ids', default: [] })
	tagsIds: number[];

	@ApiProperty({ type: String, required: false, description: '摘要', default: null })
	summary: string;

	@ApiProperty({ type: String, required: false, description: '中文摘要', default: null })
	zhSummary: string;

	@ApiProperty({ type: Number, required: true, description: '是否置顶', default: 0 })
	isTop: number;

	@ApiProperty({ type: Number, required: true, description: '是否首页显示111', default: 0 })
	isHomePage: number;

	@ApiProperty({ type: Number, required: true, description: '是否显示 0 不显示 1 显示', default: 1 })
	isShow: number;

	@ApiProperty({ type: Number, required: false, description: '权重 数字越大越靠前' })
	weight: number;

	// @ApiProperty({ type: Number, required: false, description: '作者id' })
	authorUID: number;

	@ApiProperty({ type: String, required: true, description: '发布时间', default: '2023-3-13' })
	releaseTime: Date;
}
