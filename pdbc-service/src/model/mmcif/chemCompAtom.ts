import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'chem_comp_atom', timestamps: false })
export class chemCompAtom extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'comp_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	compId!: string;

	@Column({ field: 'alt_atom_id', allowNull: true, type: DataType.STRING(80) })
	altAtomId?: string;

	@Column({ field: 'atom_id', primaryKey: true, type: DataType.STRING(6) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	atomId!: string;

	@Column({ allowNull: true, type: DataType.INTEGER })
	declare charge?: number;

	@Column({ field: 'model_Cartn_x', allowNull: true, type: DataType.FLOAT(12) })
	declare modelCartnX?: number;

	@Column({ field: 'model_Cartn_x_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare modelCartnXEsd?: number;

	@Column({ field: 'model_Cartn_y', allowNull: true, type: DataType.FLOAT(12) })
	declare modelCartnY?: number;

	@Column({ field: 'model_Cartn_y_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare modelCartnYEsd?: number;

	@Column({ field: 'model_Cartn_z', allowNull: true, type: DataType.FLOAT(12) })
	declare modelCartnZ?: number;

	@Column({ field: 'model_Cartn_z_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare modelCartnZEsd?: number;

	@Column({ field: 'partial_charge', allowNull: true, type: DataType.FLOAT(12) })
	declare partialCharge?: number;

	@Column({ field: 'substruct_code', allowNull: true, type: DataType.STRING(10) })
	declare substructCode?: string;

	@Column({ field: 'type_symbol', allowNull: true, type: DataType.STRING(10) })
	declare typeSymbol?: string;

	@Column({ field: 'pdbx_align', allowNull: true, type: DataType.INTEGER })
	declare pdbxAlign?: number;

	@Column({ field: 'pdbx_ordinal', allowNull: true, type: DataType.INTEGER })
	declare pdbxOrdinal?: number;

	@Column({ field: 'pdbx_component_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare pdbxComponentAtomId?: string;

	@Column({ field: 'pdbx_component_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxComponentCompId?: string;

	@Column({ field: 'pdbx_alt_atom_id', allowNull: true, type: DataType.STRING(6) })
	declare pdbxAltAtomId?: string;

	@Column({ field: 'pdbx_alt_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAltCompId?: string;

	@Column({ field: 'pdbx_model_Cartn_x_ideal', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxModelCartnXIdeal?: number;

	@Column({ field: 'pdbx_model_Cartn_y_ideal', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxModelCartnYIdeal?: number;

	@Column({ field: 'pdbx_model_Cartn_z_ideal', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxModelCartnZIdeal?: number;

	@Column({ field: 'pdbx_stereo_config', allowNull: true, type: DataType.STRING(10) })
	declare pdbxStereoConfig?: string;

	@Column({ field: 'pdbx_aromatic_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAromaticFlag?: string;

	@Column({ field: 'pdbx_leaving_atom_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxLeavingAtomFlag?: string;

	@Column({ field: 'pdbx_residue_numbering', allowNull: true, type: DataType.INTEGER })
	declare pdbxResidueNumbering?: number;

	@Column({ field: 'pdbx_polymer_type', allowNull: true, type: DataType.STRING(80) })
	declare pdbxPolymerType?: string;

	@Column({ field: 'pdbx_ref_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxRefId?: string;

	@Column({ field: 'pdbx_component_id', allowNull: true, type: DataType.INTEGER })
	declare pdbxComponentId?: number;

	@Column({ field: 'pdbx_component_entity_id', allowNull: true, type: DataType.INTEGER })
	declare pdbxComponentEntityId?: number;
}
