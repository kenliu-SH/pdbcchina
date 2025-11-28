import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Banner } from '@model/banner.model';
import { Default } from 'sequelize-typescript';
import { THEME } from '@common/constant';

export class ThemeFindAllDto {
	@ApiProperty({
		type: Number,
		required: false,
		description: '是否默认',
	})
	isDefault: number;

	@ApiProperty({
		type: Number,
		required: false,
		description: '是否锁定主题',
	})
	isLock: number;

	@ApiProperty({
		type: Number,
		required: false,
		description: '状态',
	})
	status: number;
}
