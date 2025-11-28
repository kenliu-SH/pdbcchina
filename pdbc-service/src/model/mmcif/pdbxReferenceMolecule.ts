import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_reference_molecule', timestamps: false })
export class pdbxReferenceMolecule extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'prd_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	prdId!: string;

	@Column({ field: 'formula_weight', allowNull: true, type: DataType.FLOAT(12) })
	declare formulaWeight?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare formula?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare type?: string;

	@Column({ field: 'type_evidence_code', allowNull: true, type: DataType.STRING(200) })
	declare typeEvidenceCode?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare class?: string;

	@Column({ field: 'class_evidence_code', allowNull: true, type: DataType.STRING(200) })
	declare classEvidenceCode?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare name?: string;

	@Column({ field: 'represent_as', allowNull: true, type: DataType.STRING(80) })
	declare representAs?: string;

	@Column({ field: 'chem_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare chemCompId?: string;

	@Column({ field: 'compound_details', allowNull: true, type: DataType.STRING(200) })
	declare compoundDetails?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare description?: string;

	@Column({ field: 'representative_PDB_id_code', allowNull: true, type: DataType.STRING(10) })
	declare representativePdbIdCode?: string;

	@Column({ field: 'release_status', allowNull: true, type: DataType.STRING(80) })
	declare releaseStatus?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare replaces?: string;

	@Column({ field: 'replaced_by', allowNull: true, type: DataType.STRING(80) })
	declare replacedBy?: string;
}
