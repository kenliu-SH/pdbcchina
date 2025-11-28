import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_chem_comp_audit', timestamps: false })
export class pdbxChemCompAudit extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'comp_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare compId?: string;

	@Column({ primaryKey: true, type: DataType.DATE })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare date?: Date;

	@Column({ allowNull: true, type: DataType.STRING(10) })
	declare annotator?: string;

	@Column({ field: 'processing_site', allowNull: true, type: DataType.STRING(10) })
	declare processingSite?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ field: 'action_type', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare actionType?: string;
}
