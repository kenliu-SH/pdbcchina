import { ApiProperty } from '@nestjs/swagger';

export class BatchGenerateDto {
	@ApiProperty({ description: '生成访问码的数量' })
	count: number; // 生成访问码的数量

	@ApiProperty({ description: '到期时间' })
	expiresAt: Date; // 到期时间

	@ApiProperty({ description: '备注' })
	remark: string; // 备注
}
