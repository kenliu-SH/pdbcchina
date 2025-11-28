import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Highlight } from '@model/highlight.model';
import { BelongsToMany, Default } from 'sequelize-typescript';
import { HighlightTag } from '@model/highlightTag.model';
import { SystemConfigKey } from '@common/constant';

// 首页蛋白质数量描述
export class IndexShowCountConfigDto {
	@ApiProperty({ description: '蛋白质数量描述' })
	@IsNotEmpty({ message: '蛋白质数量描述不能为空' })
	proteinCount: string;

	@ApiProperty({ description: '中文蛋白质数量描述' })
	@IsNotEmpty({ message: '蛋白质数量描述不能为空' })
	proteinCountZh: string;
}

export class IndexShowLogoImgConfigDto {
	@ApiProperty({ description: 'logo图片地址' })
	@IsNotEmpty({ message: 'logo图片地址不能为空' })
	logo: string;

	@ApiProperty({ description: '文本配置' })
	@IsNotEmpty({ message: '文本配置不能为空' })
	text: string;

	@ApiProperty({ description: '文本配置(中文)' })
	@IsNotEmpty({ message: '文本配置不能为空' })
	textZh: string;
}

export class IndexShowBuildingDto {
	@ApiProperty({ description: '建设中图片地址' })
	@IsNotEmpty({ message: '建设中图片地址不能为空' })
	buildingImg: string;

	@ApiProperty({ description: '文本配置' })
	@IsNotEmpty({ message: '文本配置不能为空' })
	text: string;

	@ApiProperty({ description: '文本配置(中文)' })
	@IsNotEmpty({ message: '文本配置不能为空' })
	textZh: string;

	@ApiProperty({ description: '描述配置' })
	@IsNotEmpty({ message: '描述配置不能为空' })
	desc: string;

	@ApiProperty({ description: '描述配置(中文)' })
	@IsNotEmpty({ message: '描述配置不能为空' })
	descZh: string;
}

export class IndexFooterDto {
	@ApiProperty({ description: '图片地址' })
	@IsNotEmpty({ message: '图片地址不能为空' })
	img: string[];

	@ApiProperty({ description: '跳转链接' })
	@IsNotEmpty({ message: '跳转链接不能为空' })
	link: string[];
}
