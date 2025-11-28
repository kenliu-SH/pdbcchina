import { OPTIONS_TYPE } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';

export class findTypeDto {
	@ApiProperty({ type: String, required: false, description: '类型', enum: Object.values(OPTIONS_TYPE) })
	type: string;
}
