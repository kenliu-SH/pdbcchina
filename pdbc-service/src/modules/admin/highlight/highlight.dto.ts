import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Highlight } from '@model/highlight.model';
import { BelongsToMany } from 'sequelize-typescript';
import { HighlightTag } from '@model/highlightTag.model';

export class FindDto {
	@ApiProperty({ type: String, required: false, description: '标题' })
	title: string;

	@ApiProperty({ type: String, required: false, description: '简介', default: null })
	abstract: string;

	@ApiProperty({ type: Number, required: false, description: '是否首页显示0/1' })
	isHomePage: number;

	@ApiProperty({ type: String, required: false, description: '标签 ids 用逗号分隔' })
	tagsIds: string;
}
export class FindHighlightPaginationDto extends FindDto {
	@ApiProperty({ type: String, required: false, description: 'order' })
	order?: string;
	@ApiProperty({ type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
export class CreateManyHighlightDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ type: [Highlight], required: true, description: '列表' })
	highlights: Highlight[];
}
export class DeleteManyHighlightDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ type: [Number], required: true, description: '列表' })
	ids: number[];
}

export class CreateDto {
	@ApiProperty({ type: String, required: false, description: '标题', default: '标题' })
	title: string;

	@ApiProperty({ type: String, required: false, description: '中文标题', default: '中文标题' })
	zhTitle: string;

	@ApiProperty({ type: String, required: false, description: '封面迷你图', default: null })
	miniImage: string;

	@ApiProperty({ type: [Number], required: false, description: '标签 ids', default: [] })
	tagsIds: number[];

	@ApiProperty({ type: String, required: false, description: '简介', default: null })
	abstract: string;

	@ApiProperty({ type: String, required: false, description: '中文简介', default: null })
	zhAbstract: string;

	@ApiProperty({ type: String, required: false, description: '富文本内容', default: null })
	content: string;

	@ApiProperty({ type: String, required: false, description: '中文富文本内容', default: null })
	zhContent: string;

	@ApiProperty({ type: Number, required: true, description: '是否置顶0/1' })
	isTop: number;

	@ApiProperty({ type: Number, required: true, description: '是否首页显示0/1' })
	isHomePage: number;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1' })
	isShow: number;

	authorUID: number;

	@ApiProperty({ type: Number, required: false, description: '权重 数字越大越靠前' })
	weight: number;

	@ApiProperty({ type: String, required: true, description: '发布时间', default: '2023-3-13' })
	releaseTime: Date;
}
