import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'reflns_shell', timestamps: false })
export class reflnsShell extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'd_res_high', allowNull: true, type: DataType.FLOAT(12) })
	declare dResHigh?: number;

	@Column({ field: 'd_res_low', allowNull: true, type: DataType.FLOAT(12) })
	declare dResLow?: number;

	@Column({ field: 'meanI_over_sigI_all', allowNull: true, type: DataType.FLOAT(12) })
	meanIOverSigIAll?: number;

	@Column({ field: 'meanI_over_sigI_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare meanIOverSigIObs?: number;

	@Column({ field: 'number_measured_all', allowNull: true, type: DataType.INTEGER })
	numberMeasuredAll?: number;

	@Column({ field: 'number_measured_obs', allowNull: true, type: DataType.INTEGER })
	numberMeasuredObs?: number;

	@Column({ field: 'number_possible', allowNull: true, type: DataType.INTEGER })
	numberPossible?: number;

	@Column({ field: 'number_unique_all', allowNull: true, type: DataType.INTEGER })
	declare numberUniqueAll?: number;

	@Column({ field: 'number_unique_obs', allowNull: true, type: DataType.INTEGER })
	numberUniqueObs?: number;

	@Column({ field: 'percent_possible_all', allowNull: true, type: DataType.FLOAT(12) })
	declare percentPossibleAll?: number;

	@Column({ field: 'percent_possible_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare percentPossibleObs?: number;

	@Column({ field: 'Rmerge_F_all', allowNull: true, type: DataType.FLOAT(12) })
	rmergeFAll?: number;

	@Column({ field: 'Rmerge_F_obs', allowNull: true, type: DataType.FLOAT(12) })
	rmergeFObs?: number;

	@Column({ field: 'Rmerge_I_all', allowNull: true, type: DataType.FLOAT(12) })
	rmergeIAll?: number;

	@Column({ field: 'Rmerge_I_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare rmergeIObs?: number;

	@Column({ field: 'meanI_over_sigI_gt', allowNull: true, type: DataType.FLOAT(12) })
	meanIOverSigIGt?: number;

	@Column({ field: 'meanI_over_uI_all', allowNull: true, type: DataType.FLOAT(12) })
	meanIOverUIAll?: number;

	@Column({ field: 'meanI_over_uI_gt', allowNull: true, type: DataType.FLOAT(12) })
	meanIOverUIGt?: number;

	@Column({ field: 'number_measured_gt', allowNull: true, type: DataType.INTEGER })
	numberMeasuredGt?: number;

	@Column({ field: 'number_unique_gt', allowNull: true, type: DataType.INTEGER })
	numberUniqueGt?: number;

	@Column({ field: 'percent_possible_gt', allowNull: true, type: DataType.FLOAT(12) })
	percentPossibleGt?: number;

	@Column({ field: 'Rmerge_F_gt', allowNull: true, type: DataType.FLOAT(12) })
	rmergeFGt?: number;

	@Column({ field: 'Rmerge_I_gt', allowNull: true, type: DataType.FLOAT(12) })
	rmergeIGt?: number;

	@Column({ field: 'pdbx_redundancy', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRedundancy?: number;

	@Column({ field: 'pdbx_Rsym_value', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRsymValue?: number;

	@Column({ field: 'pdbx_chi_squared', allowNull: true, type: DataType.FLOAT(12) })
	pdbxChiSquared?: number;

	@Column({ field: 'pdbx_netI_over_sigmaI_all', allowNull: true, type: DataType.FLOAT(12) })
	pdbxNetIOverSigmaIAll?: number;

	@Column({ field: 'pdbx_netI_over_sigmaI_obs', allowNull: true, type: DataType.FLOAT(12) })
	pdbxNetIOverSigmaIObs?: number;

	@Column({ field: 'pdbx_Rrim_I_all', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRrimIAll?: number;

	@Column({ field: 'pdbx_Rpim_I_all', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRpimIAll?: number;

	@Column({ field: 'pdbx_rejects', allowNull: true, type: DataType.INTEGER })
	pdbxRejects?: number;

	@Column({ field: 'pdbx_ordinal', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	pdbxOrdinal!: number;

	@Column({ field: 'pdbx_diffrn_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxDiffrnId?: string;

	@Column({ field: 'pdbx_CC_half', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxCcHalf?: number;

	@Column({ field: 'pdbx_R_split', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRSplit?: number;

	@Column({ field: 'pdbx_redundancy_reflns_obs', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRedundancyReflnsObs?: number;

	@Column({ field: 'pdbx_number_anomalous', allowNull: true, type: DataType.INTEGER })
	pdbxNumberAnomalous?: number;

	@Column({ field: 'pdbx_Rrim_I_all_anomalous', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRrimIAllAnomalous?: number;

	@Column({ field: 'pdbx_Rpim_I_all_anomalous', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRpimIAllAnomalous?: number;

	@Column({ field: 'pdbx_Rmerge_I_all_anomalous', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRmergeIAllAnomalous?: number;
}
