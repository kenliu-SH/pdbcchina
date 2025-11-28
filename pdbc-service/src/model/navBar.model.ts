import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { NavBarItem } from './navBarItem.model';
import { BaseModel } from './shared/base';
import { Options } from './options.model';

@Table({ tableName: 'NavBar', timestamps: true, freezeTableName: true })
export class NavBar extends BaseModel<NavBar> {
	@Column({ comment: '类型', type: DataType.INTEGER })
	type: number;

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

	@ForeignKey(() => Options)
	@Column({ comment: '选项id', type: DataType.INTEGER })
	optionId: number;
	@BelongsTo(() => Options)
	option: Options;

	// @Column({ comment: '选项状态', type: DataType.STRING })
	// option: string;

	@HasMany(() => NavBarItem)
	navBarItems: NavBarItem[];
}
