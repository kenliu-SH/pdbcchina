import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany } from 'sequelize-typescript';
import { MENU_TYPE } from '@common/constant';

export class DepositCreateDto {
	@ApiProperty({ type: String, required: true, description: '标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: true, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: Number, required: true, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: true, description: '是否显示0/1', default: 1 })
	isShow: number;

	@ApiProperty({ type: String, required: true, description: '图标', default: null })
	icon: string;

	@ApiProperty({ type: Number, required: true, description: '选项id', default: 1 })
	optionId: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;
}

export class DepositUpdateDto {
	@ApiProperty({ type: String, required: true, description: '标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: true, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: Number, required: true, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: true, description: '是否显示0/1', default: 1 })
	isShow: number;

	@ApiProperty({ type: String, required: true, description: '图标', default: null })
	icon: string;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;
}

export class menuBarDto {
	@ApiProperty({ type: String, required: true, description: '标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: true, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: String, required: false, description: '描述', default: null })
	describe: string;

	@ApiProperty({ type: String, required: false, description: '描述', default: null })
	zhDescribe: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接', default: null })
	linkUrl: string;

	@ApiProperty({ type: Number, required: false, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1', default: 1 })
	isShow: number;

	@ApiProperty({ type: String, required: true, description: '图标', default: null })
	icon: string;

	@ApiProperty({ type: Number, required: false, description: '选项id', default: 1 })
	optionId: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;
}

export class menuBarUpdateDto {
	@ApiProperty({ type: String, required: true, description: '标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: true, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: String, required: false, description: '描述', default: null })
	describe: string;

	@ApiProperty({ type: String, required: false, description: '描述', default: null })
	zhDescribe: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接', default: null })
	linkUrl: string;

	@ApiProperty({ type: Number, required: false, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1', default: 1 })
	isShow: number;

	@ApiProperty({ type: String, required: true, description: '图标', default: null })
	icon: string;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;
}

export class DepositItemCreateDto {
	@ApiProperty({ type: String, required: true, description: '标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: '子项中文标题' })
	zhName: string;

	@ApiProperty({ type: String, required: true, description: '描述', default: null })
	describe: string;

	@ApiProperty({ type: String, required: true, description: '中文描述', default: null })
	zhDescribe: string;

	@ApiProperty({ type: String, required: true, description: '跳转链接', default: null })
	linkUrl: string;

	@ApiProperty({ type: Number, required: true, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: true, description: '是否显示0/1', default: 1 })
	isShow: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;

	menuBarId: number;
}

export class DepositFindDto {
	@ApiProperty({ type: Number, required: false, description: '选项id', default: 0 })
	optionId: number;

	@ApiProperty({ type: String, required: false, description: '主项标题' })
	name: string;

	@ApiProperty({ type: String, required: false, description: '子项标题' })
	nameItem: string;

	@ApiProperty({ type: String, required: false, description: '描述' })
	describe: string;
}
