import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_representative', timestamps: false })
export class pdbxNmrRepresentative extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ field: 'conformer_id', allowNull: true, type: DataType.STRING(80) })
	declare conformerId?: string;

	@Column({ field: 'selection_criteria', allowNull: true, type: DataType.STRING(255) })
	declare selectionCriteria?: string;
}
