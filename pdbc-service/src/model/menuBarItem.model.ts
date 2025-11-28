import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { MenuBar } from './menuBar.model';
import { BaseModel } from './shared/base';

@Table({ tableName: 'menuBarItem', timestamps: true, freezeTableName: true })
export class MenuBarItem extends BaseModel<MenuBarItem> {
	@Column({ comment: '子项标题', type: DataType.STRING })
	name: string;

	@Column({ comment: '中文子项', type: DataType.STRING })
	zhName: string;

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

	//是否建设中
	@Column({ comment: '是否建设中', type: DataType.INTEGER })
	isBuilding: number;

	//建设中跳转链接
	@Column({ comment: '建设中跳转链接', type: DataType.STRING })
	buildingLinkUrl: string;

	@Column({ comment: '主项id', type: DataType.INTEGER })
	@ForeignKey(() => MenuBar)
	menuBarId: number;
	@BelongsTo(() => MenuBar)
	menuBar: MenuBar;
}
