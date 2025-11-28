import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'cell1', timestamps: false })
export class cell1 extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'angle_alpha', allowNull: true, type: DataType.FLOAT(12) })
	declare angleAlpha?: number;

	@Column({ field: 'angle_alpha_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare angleAlphaEsd?: number;

	@Column({ field: 'angle_beta', allowNull: true, type: DataType.FLOAT(12) })
	declare angleBeta?: number;

	@Column({ field: 'angle_beta_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare angleBetaEsd?: number;

	@Column({ field: 'angle_gamma', allowNull: true, type: DataType.FLOAT(12) })
	declare angleGamma?: number;

	@Column({ field: 'angle_gamma_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare angleGammaEsd?: number;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ field: 'formula_units_Z', allowNull: true, type: DataType.INTEGER })
	declare formulaUnitsZ?: number;

	@Column({ field: 'length_a', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthA?: number;

	@Column({ field: 'length_a_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthAEsd?: number;

	@Column({ field: 'length_b', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthB?: number;

	@Column({ field: 'length_b_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthBEsd?: number;

	@Column({ field: 'length_c', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthC?: number;

	@Column({ field: 'length_c_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthCEsd?: number;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	declare volume?: number;

	@Column({ field: 'volume_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare volumeEsd?: number;

	@Column({ field: 'Z_PDB', allowNull: true, type: DataType.INTEGER })
	declare zPdb?: number;

	@Column({ field: 'reciprocal_angle_alpha', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalAngleAlpha?: number;

	@Column({ field: 'reciprocal_angle_beta', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalAngleBeta?: number;

	@Column({ field: 'reciprocal_angle_gamma', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalAngleGamma?: number;

	@Column({ field: 'reciprocal_angle_alpha_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalAngleAlphaEsd?: number;

	@Column({ field: 'reciprocal_angle_beta_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalAngleBetaEsd?: number;

	@Column({ field: 'reciprocal_angle_gamma_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalAngleGammaEsd?: number;

	@Column({ field: 'reciprocal_length_a', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalLengthA?: number;

	@Column({ field: 'reciprocal_length_b', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalLengthB?: number;

	@Column({ field: 'reciprocal_length_c', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalLengthC?: number;

	@Column({ field: 'reciprocal_length_a_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalLengthAEsd?: number;

	@Column({ field: 'reciprocal_length_b_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalLengthBEsd?: number;

	@Column({ field: 'reciprocal_length_c_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare reciprocalLengthCEsd?: number;

	@Column({ field: 'pdbx_unique_axis', allowNull: true, type: DataType.STRING(200) })
	declare pdbxUniqueAxis?: string;
}
