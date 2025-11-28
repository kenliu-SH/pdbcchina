import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { News } from '@model/news.model';

export class FindNewsPaginationDto {
	@ApiProperty({ name: 'isTop', type: String, required: false, description: '是否首页' })
	isTop?: boolean;
	@ApiProperty({ name: 'isHomePage', type: String, required: false, description: '是否置顶' })
	isHomePage?: boolean;

	@ApiProperty({ name: 'page', default: 1, type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ name: 'pageSize', default: 10, type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
export class CreateManyNewsDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'newss', type: [News], required: true, description: '列表' })
	newss: News[];
}
export class DeleteManyNewsDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'ids', type: [Number], required: true, description: '列表' })
	ids: number[];
}

const LanguageEnum = {
	CHINESE: 0,
	ENGLISH: 1,
};

export class findDateDto {
	@ApiProperty({ type: String, required: true, description: '发布时间' })
	releaseTime: Date;

	@ApiProperty({ type: Number, required: true, enum: Object.values(LanguageEnum) })
	isChinese: number;
}
export class FindNewsDto extends findDateDto {
	@ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
