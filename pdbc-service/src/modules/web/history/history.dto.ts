import { ApiProperty } from '@nestjs/swagger';

export class EntryHistroyCreateDto {
	// @ApiProperty({ type: String, required: true, description: '标题名' })
	title: string;

	@ApiProperty({ type: String, required: true, description: 'entryId', default: null })
	entryId: string;

	@ApiProperty({ type: Number, required: true, description: 'highligthId', default: null })
	highligthId: number;

	@ApiProperty({ type: Number, required: true, description: 'newsId', default: null })
	newsId: number;

	type: string;
}

export class FindHistoryDto {
	@ApiProperty({ type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
