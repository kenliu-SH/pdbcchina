import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'atom_site', timestamps: false })
export class atomSite extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	// @Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	// @Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	// declare entryId?: string;

	@Column({ field: 'group_PDB', allowNull: true, type: DataType.STRING(12) })
	declare groupPDB?: string;

	@Column({ field: 'id', allowNull: true, type: DataType.FLOAT(12) })
	declare id?: number;

	@Column({ field: 'type_symbol', allowNull: true, type: DataType.STRING(12) })
	declare typeSymbol?: string;

	@Column({ field: 'label_atom_id', allowNull: true, type: DataType.STRING(12) })
	declare labelAtomId?: string;

	@Column({ field: 'label_alt_id', allowNull: true, type: DataType.STRING(12) })
	declare labelAltId?: string;

	@Column({ field: 'label_comp_id', allowNull: true, type: DataType.STRING(12) })
	declare labelCompId?: string;

	@Column({ field: 'label_asym_id', allowNull: true, type: DataType.STRING(12) })
	declare labelAsymId?: string;

	@Column({ field: 'label_entity_id', allowNull: true, type: DataType.FLOAT(12) })
	declare labelEntityId?: number;

	@Column({ field: 'label_seq_id', allowNull: true, type: DataType.FLOAT(12) })
	declare labelSeqId?: number;

	@Column({ field: 'pdbx_PDB_ins_code', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxPDBInsCode?: number;

	@Column({ field: 'Cartn_x', allowNull: true, type: DataType.FLOAT(12) })
	declare cartnX?: number;

	@Column({ field: 'Cartn_y', allowNull: true, type: DataType.FLOAT(12) })
	declare cartnY?: number;

	@Column({ field: 'Cartn_z', allowNull: true, type: DataType.STRING(200) })
	declare cartnZ?: string;

	@Column({ field: 'occupancy', allowNull: true, type: DataType.FLOAT(12) })
	declare occupancy?: number;

	@Column({ field: 'B_iso_or_equiv', allowNull: true, type: DataType.FLOAT(12) })
	declare bIsoOrEquiv?: number;

	@Column({ field: 'auth_seq_id', allowNull: true, type: DataType.FLOAT(12) })
	declare authSeqId?: number;

	@Column({ field: 'auth_comp_id', allowNull: true, type: DataType.STRING(12) })
	declare authCompId?: string;

	@Column({ field: 'auth_asym_id', allowNull: true, type: DataType.STRING(12) })
	declare authAsymId?: string;

	@Column({ field: 'auth_atom_id', allowNull: true, type: DataType.STRING(12) })
	declare authAtomId?: string;

	@Column({ field: 'pdbx_PDB_model_num', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxPDBModelNum?: number;
}
