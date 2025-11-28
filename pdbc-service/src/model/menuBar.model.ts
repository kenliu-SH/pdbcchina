import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { MenuBarItem } from './menuBarItem.model';
import { BaseModel } from './shared/base';
import { Options } from './options.model';

@Table({ tableName: 'menuBar', timestamps: true, freezeTableName: true })
export class MenuBar extends BaseModel<MenuBar> {
	@Column({ comment: '标题', type: DataType.STRING })
	name: string;

	@Column({ comment: '中文标题', type: DataType.STRING })
	zhName: string;

	@Column({ comment: '图片', type: DataType.STRING })
	imgUrl: string;

	@Column({ comment: '描述', type: DataType.TEXT })
	describe: string;

	@Column({ comment: '中文描述', type: DataType.TEXT })
	zhDescribe: string;

	@Column({ comment: '跳转链接', type: DataType.STRING })
	linkUrl: string;

	@Column({ comment: '排序值', type: DataType.INTEGER })
	order: number;

	@Column({ comment: '是否显示', type: DataType.INTEGER })
	isShow: number;

	@Column({ comment: '图标', type: DataType.STRING })
	icon: string;

	//是否建设中
	@Column({ comment: '是否建设中 1 建设中 / 0 建设完成', type: DataType.INTEGER })
	isBuilding: number;

	//建设中跳转链接
	@Column({ comment: '建设中跳转链接', type: DataType.STRING })
	buildingLinkUrl: string;

	@ForeignKey(() => Options)
	@Column({ comment: '选项id', type: DataType.INTEGER })
	declare optionId: number;
	@BelongsTo(() => Options)
	declare option: Options;
	// @Column({ comment: '选择状态', type: DataType.STRING })
	// option: string;

	@HasMany(() => MenuBarItem)
	menuBarItems: MenuBarItem[];
}
