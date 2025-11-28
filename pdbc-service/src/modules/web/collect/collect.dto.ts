import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Collect } from '@model/collect.model';

export class CollectDto {}
export class PaginationDto {
	@ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
	order?: string;
	@ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}

export class CollectMany {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'collects', type: [Collect], required: true, description: '列表' })
	collects: Collect[];
}
