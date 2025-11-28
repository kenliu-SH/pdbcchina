import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Highlight } from '@model/highlight.model';
import { BelongsToMany } from 'sequelize-typescript';
import { HighlightTag } from '@model/highlightTag.model';

export class FindHighlightPaginationDto extends Highlight {
	@ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
	order?: string;

	@ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
	page?: string;

	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
export class CreateManyHighlightDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'highlights', type: [Highlight], required: true, description: '列表' })
	highlights: Highlight[];
}
export class DeleteManyHighlightDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'ids', type: [Number], required: true, description: '列表' })
	ids: number[];
}

export class CreateDto {
	@ApiProperty({ type: String, required: false, description: '标题' })
	title: string;

	@ApiProperty({ type: String, required: false, description: '封面迷你图' })
	miniImage: string;

	@ApiProperty({ type: [Number], required: false, description: '标签 ids' })
	tagsIds: number[];

	@ApiProperty({ type: String, required: false, description: '简介' })
	abstract: string;

	@ApiProperty({ type: String, required: false, description: '富文本内容' })
	content: string;

	@ApiProperty({ type: Number, required: true, description: '是否置顶0/1' })
	isTop: number;

	@ApiProperty({ type: Number, required: true, description: '是否首页显示0/1' })
	isHomePage: number;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1' })
	isShow: number;

	authorUID: number;

	@ApiProperty({ type: Number, required: false, description: '权重 数字越大越靠前' })
	weight: number;
}

export class PutOrderDto {
	@ApiProperty({ type: Number, required: false, description: '交换Id' })
	declare swopId: number;

	name: string;

	declare order: number;
}
