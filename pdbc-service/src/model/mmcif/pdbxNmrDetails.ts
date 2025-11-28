import { Column, DataType, Index, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_details', timestamps: false })
export class pdbxNmrDetails extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', allowNull: true, type: DataType.STRING(80) })
	declare entryId?: string;

	@Column({ allowNull: true, type: DataType.TEXT })
	declare text?: string;
}
