import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'refine_hist', timestamps: false })
export class refineHist extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'pdbx_refine_id', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	pdbxRefineId!: string;

	@Column({ field: 'cycle_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	cycleId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	details?: string;

	@Column({ field: 'd_res_high', allowNull: true, type: DataType.FLOAT(12) })
	declare dResHigh?: number;

	@Column({ field: 'd_res_low', allowNull: true, type: DataType.FLOAT(12) })
	dResLow?: number;

	@Column({ field: 'number_atoms_solvent', allowNull: true, type: DataType.INTEGER })
	numberAtomsSolvent?: number;

	@Column({ field: 'number_atoms_total', allowNull: true, type: DataType.INTEGER })
	numberAtomsTotal?: number;

	@Column({ field: 'number_reflns_all', allowNull: true, type: DataType.INTEGER })
	numberReflnsAll?: number;

	@Column({ field: 'number_reflns_obs', allowNull: true, type: DataType.INTEGER })
	numberReflnsObs?: number;

	@Column({ field: 'number_reflns_R_free', allowNull: true, type: DataType.INTEGER })
	numberReflnsRFree?: number;

	@Column({ field: 'number_reflns_R_work', allowNull: true, type: DataType.INTEGER })
	numberReflnsRWork?: number;

	@Column({ field: 'R_factor_all', allowNull: true, type: DataType.FLOAT(12) })
	rFactorAll?: number;

	@Column({ field: 'R_factor_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare rFactorObs?: number;

	@Column({ field: 'R_factor_R_free', allowNull: true, type: DataType.FLOAT(12) })
	declare rFactorRFree?: number;

	@Column({ field: 'R_factor_R_work', allowNull: true, type: DataType.FLOAT(12) })
	declare rFactorRWork?: number;

	@Column({ field: 'pdbx_number_residues_total', allowNull: true, type: DataType.INTEGER })
	pdbxNumberResiduesTotal?: number;

	@Column({ field: 'pdbx_B_iso_mean_ligand', allowNull: true, type: DataType.FLOAT(12) })
	pdbxBIsoMeanLigand?: number;

	@Column({ field: 'pdbx_B_iso_mean_solvent', allowNull: true, type: DataType.FLOAT(12) })
	pdbxBIsoMeanSolvent?: number;

	@Column({ field: 'pdbx_number_atoms_protein', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsProtein?: number;

	@Column({ field: 'pdbx_number_atoms_nucleic_acid', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsNucleicAcid?: number;

	@Column({ field: 'pdbx_number_atoms_ligand', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsLigand?: number;

	@Column({ field: 'pdbx_number_atoms_lipid', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsLipid?: number;

	@Column({ field: 'pdbx_number_atoms_carb', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsCarb?: number;

	@Column({ field: 'pdbx_pseudo_atom_details', allowNull: true, type: DataType.STRING(200) })
	declare pdbxPseudoAtomDetails?: string;

	@Column({ field: 'pdbx_number_atoms_solvent', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsSolvent?: number;

	@Column({ field: 'pdbx_number_atoms_total', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberAtomsTotal?: number;
}
