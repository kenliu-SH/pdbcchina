import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany } from 'sequelize-typescript';
import { MENU_TYPE } from '@common/constant';

export class NavBarCreateDto {
	@ApiProperty({ type: Number, required: true, description: '类型:0 有子项/1 无子项', default: 1 })
	type: number;

	@ApiProperty({ type: Number, required: true, description: '显示状态:0 仅标题/1 仅图片', default: 1 })
	state: number;

	@ApiProperty({ type: String, required: true, description: '主项标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: false, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接', default: null })
	linkUrl: string;

	@ApiProperty({ type: Number, required: true, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: true, description: '是否显示0/1', default: 1 })
	isShow: number;

	@ApiProperty({ type: Number, required: true, description: '选项id', default: 1 })
	optionId: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;
}

export class NavBarUpdateDto {
	@ApiProperty({ type: Number, required: true, description: '类型:0 有子项/1 无子项', default: 1 })
	type: number;

	@ApiProperty({ type: Number, required: true, description: '显示状态:0 仅标题/1 仅图片', default: 1 })
	state: number;

	@ApiProperty({ type: String, required: true, description: '主项标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: false, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接', default: null })
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
}

export class NavBarItemCreateDto {
	@ApiProperty({ type: Number, required: true, description: '显示状态:0 仅标题/1 仅图片', default: 1 })
	state: number;

	@ApiProperty({ type: String, required: true, description: '子项标题', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题', default: null })
	zhName: string;

	@ApiProperty({ type: String, required: false, description: '图片', default: null })
	imgUrl: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接', default: null })
	linkUrl: string;

	@ApiProperty({ type: Number, required: true, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1', default: 1 })
	isShow: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;

	navBarId: number;
}

export class NavBarFindDto {
	@ApiProperty({ type: Number, required: false, description: '选项id', default: 1 })
	optionId: number;

	@ApiProperty({ type: String, required: false, description: '主项标题' })
	name: string;

	@ApiProperty({ type: String, required: false, description: '子项标题' })
	nameItem: string;
}
