/*
 * @Author: your name
 * @Date: 2021-08-09 16:52:52
 * @LastEditTime: 2021-09-01 14:00:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\model\entry.model.ts
 */
import { ApiProperty } from '@nestjs/swagger';
import { isArray } from 'lodash';
import {
	AfterFind,
	BelongsTo,
	Column,
	DataType,
	Default,
	DeletedAt,
	ForeignKey,
	HasOne,
	Table,
} from 'sequelize-typescript';
import { Collect } from './collect.model';

import { BaseModel } from './shared/base';

@Table({ tableName: '_entry', timestamps: true, freezeTableName: true, })
export class _Entry extends BaseModel<_Entry> {
	@Column({
		comment: 'PBDId',
		type: DataType.STRING(32),
	})
	PDBId: string;

	@Column({
		comment: '原始细节',
		type: DataType.JSON,
	})
	details: object;

	@Column({
		comment: '方法',
		type: DataType.STRING,
	})
	method: string;
	method_1: string;
	collect: Collect;
	// 补充信息
	supplementByPDB: any;
	// @AfterFind
	// static detailsParse(instance) {
	//   if (isArray(instance)) {
	//     instance.forEach((element) => {
	//       if (element && element.getDataValue && element.getDataValue('details')) {
	//         element.setDataValue('details', JSON.parse(element.getDataValue('details')))
	//       }
	//     })
	//   } else {
	//     if (instance && instance.getDataValue && instance.getDataValue('details')) {
	//       instance.setDataValue('details', JSON.parse(instance.getDataValue('details')))
	//     }
	//   }
	//   return instance
	// }
}
