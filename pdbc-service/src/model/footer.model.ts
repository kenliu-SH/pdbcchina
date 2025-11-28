import { ApiProperty } from '@nestjs/swagger';
import { Column, Table, DataType, ForeignKey, BelongsTo, HasMany, Default } from 'sequelize-typescript';
import { FooterItem } from './footerItem.model';
import { BaseModel } from './shared/base';

@Table({ tableName: 'footer', timestamps: true, freezeTableName: true })
export class Footer extends BaseModel<Footer> {
	@ApiProperty({ type: String, required: true, description: 'titel' })
	@Column({ comment: '名称', type: DataType.STRING })
	name: string;

	@ApiProperty({ type: String, required: true, description: '中文名称' })
	@Column({ comment: '中文名称', type: DataType.STRING })
	zhName: string;

	// 图片地址
	@ApiProperty({ type: String, required: true, description: '图片地址' })
	@Column({ comment: '图片地址', type: DataType.STRING })
	imgUrl: string;

	// 类型
	@ApiProperty({ type: Number, required: true, description: '类型 0 文字/ 1图片' })
	@Default(0)
	@Column({ comment: '类型 0 文字/ 1图片', type: DataType.INTEGER })
	type: number;

	@HasMany(() => FooterItem)
	footerItems: FooterItem[];

	@ApiProperty({ type: Number, required: false, description: '是否显示', default: '' })
	@Column({ comment: '是否显示', type: DataType.INTEGER })
	isShow: number;

	@ApiProperty({ type: Number, required: true, description: '排序值' })
	@Column({ comment: '排序值', type: DataType.INTEGER })
	order: number;

	//是否建设中
	@Column({ comment: '是否建设中 1 建设中 / 0 建设完成', type: DataType.INTEGER })
	isBuilding: number;

	//建设中跳转链接
	@Column({ comment: '建设中跳转链接', type: DataType.STRING })
	buildingLinkUrl: string;
}
