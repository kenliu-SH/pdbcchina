import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'struct_conn', timestamps: false })
export class structConn extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'ptnr1_auth_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1AuthAsymId?: string;

	@Column({ field: 'ptnr2_auth_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2AuthAsymId?: string;

	@Column({ field: 'ptnr1_auth_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare ptnr1AuthAtomId?: string;

	@Column({ field: 'ptnr2_auth_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare ptnr2AuthAtomId?: string;

	@Column({ field: 'ptnr1_auth_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1AuthCompId?: string;

	@Column({ field: 'ptnr2_auth_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2AuthCompId?: string;

	@Column({ field: 'ptnr1_auth_seq_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1AuthSeqId?: string;

	@Column({ field: 'ptnr2_auth_seq_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2AuthSeqId?: string;

	@Column({ field: 'ptnr1_label_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1LabelAltId?: string;

	@Column({ field: 'ptnr2_label_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2LabelAltId?: string;

	@Column({ field: 'ptnr1_label_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1LabelCompId?: string;

	@Column({ field: 'ptnr2_label_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2LabelCompId?: string;

	@Column({ field: 'ptnr1_label_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare ptnr1LabelAtomId?: string;

	@Column({ field: 'ptnr2_label_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare ptnr2LabelAtomId?: string;

	@Column({ field: 'ptnr1_label_seq_id', allowNull: true, type: DataType.INTEGER })
	declare ptnr1LabelSeqId?: number;

	@Column({ field: 'ptnr2_label_seq_id', allowNull: true, type: DataType.INTEGER })
	declare ptnr2LabelSeqId?: number;

	@Column({ field: 'ptnr1_label_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1LabelAsymId?: string;

	@Column({ field: 'ptnr2_label_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2LabelAsymId?: string;

	@Column({ field: 'conn_type_id', allowNull: true, type: DataType.STRING(10) })
	declare connTypeId?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(12) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'ptnr1_role', allowNull: true, type: DataType.STRING(80) })
	declare ptnr1Role?: string;

	@Column({ field: 'ptnr1_symmetry', allowNull: true, type: DataType.STRING(10) })
	declare ptnr1Symmetry?: string;

	@Column({ field: 'ptnr2_role', allowNull: true, type: DataType.STRING(80) })
	declare ptnr2Role?: string;

	@Column({ field: 'ptnr2_symmetry', allowNull: true, type: DataType.STRING(10) })
	declare ptnr2Symmetry?: string;

	@Column({ field: 'pdbx_ptnr1_PDB_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr1PdbInsCode?: string;

	@Column({ field: 'pdbx_ptnr1_auth_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr1AuthAltId?: string;

	@Column({ field: 'pdbx_ptnr1_label_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr1LabelAltId?: string;

	@Column({ field: 'pdbx_ptnr1_standard_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr1StandardCompId?: string;

	@Column({ field: 'pdbx_ptnr2_PDB_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr2PdbInsCode?: string;

	@Column({ field: 'pdbx_ptnr2_auth_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr2AuthAltId?: string;

	@Column({ field: 'pdbx_ptnr2_label_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr2LabelAltId?: string;

	@Column({ field: 'pdbx_ptnr3_auth_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3AuthAltId?: string;

	@Column({ field: 'pdbx_ptnr3_auth_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3AuthAsymId?: string;

	@Column({ field: 'pdbx_ptnr3_auth_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare pdbxPtnr3AuthAtomId?: string;

	@Column({ field: 'pdbx_ptnr3_auth_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3AuthCompId?: string;

	@Column({ field: 'pdbx_ptnr3_PDB_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3PdbInsCode?: string;

	@Column({ field: 'pdbx_ptnr3_auth_seq_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3AuthSeqId?: string;

	@Column({ field: 'pdbx_ptnr3_label_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3LabelAltId?: string;

	@Column({ field: 'pdbx_ptnr3_label_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3LabelAsymId?: string;

	@Column({ field: 'pdbx_ptnr3_label_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare pdbxPtnr3LabelAtomId?: string;

	@Column({ field: 'pdbx_ptnr3_label_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3LabelCompId?: string;

	@Column({ field: 'pdbx_ptnr3_label_seq_id', allowNull: true, type: DataType.INTEGER })
	declare pdbxPtnr3LabelSeqId?: number;

	@Column({ field: 'pdbx_PDB_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPdbId?: string;

	@Column({ field: 'pdbx_dist_value', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxDistValue?: number;

	@Column({ field: 'pdbx_value_order', allowNull: true, type: DataType.STRING(10) })
	declare pdbxValueOrder?: string;

	@Column({ field: 'pdbx_leaving_atom_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxLeavingAtomFlag?: string;

	@Column({ field: 'pdbx_ptnr1_mod_name', allowNull: true, type: DataType.STRING(80) })
	declare pdbxPtnr1ModName?: string;

	@Column({ field: 'pdbx_ptnr1_sugar_name', allowNull: true, type: DataType.STRING(80) })
	declare pdbxPtnr1SugarName?: string;

	@Column({ field: 'pdbx_ptnr1_replaced_atom', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr1ReplacedAtom?: string;

	@Column({ field: 'pdbx_ptnr3_auth_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPtnr3AuthInsCode?: string;

	@Column({ field: 'pdbx_role', allowNull: true, type: DataType.STRING(10) })
	declare pdbxRole?: string;
}
