import { ApiProperty } from '@nestjs/swagger';
import { Default } from 'sequelize-typescript';

export class footerCreateDto {
	@ApiProperty({ type: String, required: true, description: '主项', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文名称' })
	zhName: string;

	@ApiProperty({ type: Number, required: false, description: '是否显示0/1' })
	isShow: number;

	@ApiProperty({ type: Number, required: true, description: '排序值', default: 1 })
	order: number;

	@ApiProperty({ type: String, required: true, description: '图片地址' })
	imgUrl: string;

	@ApiProperty({ type: Number, required: true, description: '类型 0 文字/ 1图片' })
	type: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;
}

export class itemCreateDto {
	@ApiProperty({ type: String, required: true, description: '子项', default: 'titel' })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文名称' })
	zhName: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接', default: null })
	linkUrl: string;

	@ApiProperty({ type: String, required: false, description: '图片链接', default: null })
	imgUrl: string;

	@ApiProperty({ type: Number, required: false, description: '是否显示' })
	isShow: number;

	@ApiProperty({ type: Number, required: true, description: '排序值' })
	order: number;

	@ApiProperty({ type: Number, required: true, description: '1全部显示/2仅标题/3仅图片', enum: [1, 2, 3] })
	status: number;

	//是否建设中
	@ApiProperty({ type: Number, description: '是否建设中 1 建设中 / 0 建设完成' })
	isBuilding: number;

	//建设中跳转链接
	@ApiProperty({ type: String, description: '建设中跳转链接' })
	buildingLinkUrl: string;

	footerId: number;
}

export class footerFindDto {
	@ApiProperty({ type: String, required: false, description: '主项' })
	name: string;

	@ApiProperty({ type: String, required: false, description: '子项' })
	nameItem: string;

	@ApiProperty({ type: String, required: false, description: 'order' })
	order?: string;
	@ApiProperty({ type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}

export class footerImgDto {
	@ApiProperty({ type: String, required: true, description: '图片地址' })
	imgUrl: string;

	@ApiProperty({ type: Number, required: true, description: '类型 0 文字/ 1图片' })
	type: number;
}
