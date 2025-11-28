import { THEME, WechatScanLogStatus } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Default, Table } from 'sequelize-typescript';
import { BaseModel } from './shared/base';

@Table({ tableName: 'wechat_scan_log', timestamps: true, freezeTableName: true })
export class WechatScanLog extends BaseModel<WechatScanLog> {
	// ticket
	@Column({ comment: 'ticket', type: DataType.STRING })
	declare ticket: string;

	// 用户id
	@Column({ comment: '用户id', type: DataType.INTEGER })
	declare userId: number;

	// 状态
	@Column({ comment: '状态', type: DataType.STRING })
	declare status: WechatScanLogStatus;

	// sceneStr
	@Column({ comment: 'sceneStr', type: DataType.STRING })
	declare sceneStr: string;
}
