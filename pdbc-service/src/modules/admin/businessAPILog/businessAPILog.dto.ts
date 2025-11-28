import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindPaginationDto {
	@ApiProperty({ name: 'current', type: String, required: false, description: 'current' })
	current?: string;
	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;

	// 返回状态
	@ApiProperty({
		name: 'statusCode',
		type: Number,
		required: false,
	})
	statusCode?: number;
}


