import { ApiProperty } from '@nestjs/swagger';
import { ENUM } from 'sequelize';
import { Column, Table, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Footer } from './footer.model';
import { BaseModel } from './shared/base';

@Table({ tableName: 'footerItem', timestamps: true, freezeTableName: true })
export class FooterItem extends BaseModel<FooterItem> {
	@ApiProperty({ type: String, required: true, description: 'titel' })
	@Column({ comment: '标题', type: DataType.STRING })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文标题' })
	@Column({ comment: '中文标题', type: DataType.STRING })
	zhName: string;

	@ApiProperty({ type: String, required: false, description: '跳转链接' })
	@Column({ comment: '跳转链接', type: DataType.STRING })
	linkUrl: string;

	@ApiProperty({ type: String, required: false, description: '图片链接' })
	@Column({ comment: '图片链接', type: DataType.STRING })
	imgUrl: string;

	@ApiProperty({ type: Number, required: false, description: '是否显示' })
	@Column({ comment: '是否显示', type: DataType.INTEGER })
	isShow: number;

	@ApiProperty({ type: Number, required: true, description: '排序值' })
	@Column({ comment: '排序值', type: DataType.INTEGER })
	order: number;

	@Column({ comment: '类型', type: DataType.INTEGER })
	status: number;

	//是否建设中
	@Column({ comment: '是否建设中 1 建设中 / 0 建设完成', type: DataType.INTEGER })
	isBuilding: number;

	//建设中跳转链接
	@Column({ comment: '建设中跳转链接', type: DataType.STRING })
	buildingLinkUrl: string;

	@Column({ comment: '主项id', type: DataType.INTEGER })
	@ForeignKey(() => Footer)
	footerId: number;
	@BelongsTo(() => Footer)
	footer: Footer;
}
