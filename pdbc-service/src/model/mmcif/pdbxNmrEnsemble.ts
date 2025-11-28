import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_ensemble', timestamps: false })
export class pdbxNmrEnsemble extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ field: 'conformers_calculated_total_number', allowNull: true, type: DataType.INTEGER })
	declare conformersCalculatedTotalNumber?: number;

	@Column({ field: 'conformers_submitted_total_number', allowNull: true, type: DataType.INTEGER })
	declare conformersSubmittedTotalNumber?: number;

	@Column({ field: 'conformer_selection_criteria', allowNull: true, type: DataType.STRING(1023) })
	declare conformerSelectionCriteria?: string;

	@Column({ field: 'representative_conformer', allowNull: true, type: DataType.INTEGER })
	representativeConformer?: number;

	@Column({ field: 'average_constraints_per_residue', allowNull: true, type: DataType.INTEGER })
	averageConstraintsPerResidue?: number;

	@Column({ field: 'average_constraint_violations_per_residue', allowNull: true, type: DataType.INTEGER })
	averageConstraintViolationsPerResidue?: number;

	@Column({ field: 'maximum_distance_constraint_violation', allowNull: true, type: DataType.FLOAT(12) })
	maximumDistanceConstraintViolation?: number;

	@Column({ field: 'average_distance_constraint_violation', allowNull: true, type: DataType.FLOAT(12) })
	averageDistanceConstraintViolation?: number;

	@Column({ field: 'maximum_upper_distance_constraint_violation', allowNull: true, type: DataType.FLOAT(12) })
	maximumUpperDistanceConstraintViolation?: number;

	@Column({ field: 'maximum_lower_distance_constraint_violation', allowNull: true, type: DataType.FLOAT(12) })
	maximumLowerDistanceConstraintViolation?: number;

	@Column({ field: 'distance_constraint_violation_method', allowNull: true, type: DataType.STRING(255) })
	distanceConstraintViolationMethod?: string;

	@Column({ field: 'maximum_torsion_angle_constraint_violation', allowNull: true, type: DataType.FLOAT(12) })
	maximumTorsionAngleConstraintViolation?: number;

	@Column({ field: 'average_torsion_angle_constraint_violation', allowNull: true, type: DataType.FLOAT(12) })
	averageTorsionAngleConstraintViolation?: number;

	@Column({ field: 'torsion_angle_constraint_violation_method', allowNull: true, type: DataType.STRING(200) })
	torsionAngleConstraintViolationMethod?: string;
}
