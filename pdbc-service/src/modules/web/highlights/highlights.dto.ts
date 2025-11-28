import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { constant } from 'lodash';

// 中英文
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
export class FindHighlightDto extends findDateDto {
	@ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
