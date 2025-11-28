import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { MenuBarItem } from './menuBarItem.model';
import { NavBar } from './navBar.model';
import { BaseModel } from './shared/base';

@Table({ tableName: 'NavBarItem', timestamps: true, freezeTableName: true })
export class NavBarItem extends BaseModel<NavBarItem> {
	@Column({ comment: '显示状态', type: DataType.INTEGER })
	state: number;

	@Column({ comment: '标题', type: DataType.STRING })
	name: string;

	@Column({ comment: '中文标题', type: DataType.STRING })
	zhName: string;

	@Column({ comment: '图片', type: DataType.STRING })
	imgUrl: string;

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
	@ForeignKey(() => NavBar)
	navBarId: number;
	@BelongsTo(() => NavBar)
	navBar: NavBar;
}
