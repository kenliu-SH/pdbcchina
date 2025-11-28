import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'atom_sites', timestamps: false })
export class atomSites extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ field: 'Cartn_transf_matrix_1_1', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_1_1?: number;

	@Column({ field: 'Cartn_transf_matrix_1_2', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_1_2?: number;

	@Column({ field: 'Cartn_transf_matrix_1_3', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_1_3?: number;

	@Column({ field: 'Cartn_transf_matrix_2_1', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_2_1?: number;

	@Column({ field: 'Cartn_transf_matrix_2_2', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_2_2?: number;

	@Column({ field: 'Cartn_transf_matrix_2_3', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_2_3?: number;

	@Column({ field: 'Cartn_transf_matrix_3_1', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_3_1?: number;

	@Column({ field: 'Cartn_transf_matrix_3_2', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_3_2?: number;

	@Column({ field: 'Cartn_transf_matrix_3_3', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfMatrix_3_3?: number;

	@Column({ field: 'Cartn_transf_vector_1', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfVector_1?: number;

	@Column({ field: 'Cartn_transf_vector_2', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfVector_2?: number;

	@Column({ field: 'Cartn_transf_vector_3', allowNull: true, type: DataType.FLOAT(12) })
	cartnTransfVector_3?: number;

	@Column({ field: 'Cartn_transform_axes', allowNull: true, type: DataType.STRING(200) })
	cartnTransformAxes?: string;

	@Column({ field: 'fract_transf_matrix_1_1', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_1_1?: number;

	@Column({ field: 'fract_transf_matrix_1_2', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_1_2?: number;

	@Column({ field: 'fract_transf_matrix_1_3', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_1_3?: number;

	@Column({ field: 'fract_transf_matrix_2_1', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_2_1?: number;

	@Column({ field: 'fract_transf_matrix_2_2', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_2_2?: number;

	@Column({ field: 'fract_transf_matrix_2_3', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_2_3?: number;

	@Column({ field: 'fract_transf_matrix_3_1', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_3_1?: number;

	@Column({ field: 'fract_transf_matrix_3_2', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_3_2?: number;

	@Column({ field: 'fract_transf_matrix_3_3', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfMatrix_3_3?: number;

	@Column({ field: 'fract_transf_vector_1', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfVector_1?: number;

	@Column({ field: 'fract_transf_vector_2', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfVector_2?: number;

	@Column({ field: 'fract_transf_vector_3', allowNull: true, type: DataType.FLOAT(12) })
	fractTransfVector_3?: number;

	@Column({ field: 'solution_primary', allowNull: true, type: DataType.STRING(10) })
	solutionPrimary?: string;

	@Column({ field: 'solution_secondary', allowNull: true, type: DataType.STRING(10) })
	solutionSecondary?: string;

	@Column({ field: 'solution_hydrogens', allowNull: true, type: DataType.STRING(10) })
	solutionHydrogens?: string;

	@Column({ field: 'special_details', allowNull: true, type: DataType.STRING(200) })
	specialDetails?: string;
}
