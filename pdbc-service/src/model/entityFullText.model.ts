import { Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { entry } from './mmcif';

import { BaseModel } from './shared/base';

@Table({
	tableName: 'entity_full_text',
	timestamps: true,
	freezeTableName: true,
})
export class EntityFullText extends BaseModel<EntityFullText> {
	// @ForeignKey(() => entry)
	// @Column({
	// 	comment: 'entityId',
	// 	type: DataType.STRING(60),
	// })
	// entityId: string;

	@Column({
		comment: 'book author',
		type: DataType.TEXT('long'),
	})
	cifText: string;
}
