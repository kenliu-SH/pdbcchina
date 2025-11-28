import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Highlight } from '@model/highlight.model';
import { Banner } from '@model/banner.model';
import { _Entry } from '@model/entry.model';
import { MENU_TYPE } from '@common/constant';
import { entry } from '@model/mmcif';

export class HomeDto {}

export class RespBase {
	biologicalCount: BiologicalCount;
	banners: Banner[];
	newPDBList: entry[];
	lastUpdate: string;
}

export class BiologicalCount {
	global: number;
	china: number;
}

export class FindHighlightPaginationDto extends Highlight {
	@ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
	order?: string;
	@ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
	page?: string;
	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}

export class DepositFindDto {
	@ApiProperty({ type: String, required: false, description: '主项标题' })
	name: string;

	@ApiProperty({ type: String, required: false, description: '子项标题' })
	nameItem: string;

	@ApiProperty({ type: String, required: false, description: '描述' })
	describe: string;
}

export class footerFindDto {
	@ApiProperty({ name: 'name', type: String, required: false, description: '名称' })
	name: string;

	@ApiProperty({ type: Number, required: true, description: '类型 0 文字/ 1图片' })
	type: number;

	isShow: number;
}

export class menuBarFindDto {
	@ApiProperty({
		type: String,
		required: true,
		description: '选项',
		enum: Object.values(MENU_TYPE),
	})
	option: string;

	isShow: number;
}

// 首页蛋白质数量描述
export class IndexShowCountConfigDto {
	@ApiProperty({ description: '蛋白质数量描述' })
	@IsNotEmpty({ message: '蛋白质数量描述不能为空' })
	proteinCount: string;
}
