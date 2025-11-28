import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'reflns', timestamps: false })
export class reflns extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', allowNull: true, type: DataType.STRING(10) })
	entryId?: string;

	@Column({ field: 'B_iso_Wilson_estimate', allowNull: true, type: DataType.FLOAT(12) })
	declare bIsoWilsonEstimate?: number;

	@Column({ field: 'data_reduction_details', allowNull: true, type: DataType.STRING(1023) })
	dataReductionDetails?: string;

	@Column({ field: 'data_reduction_method', allowNull: true, type: DataType.STRING(200) })
	dataReductionMethod?: string;

	@Column({ field: 'd_resolution_high', allowNull: true, type: DataType.FLOAT(12) })
	declare dResolutionHigh?: number;

	@Column({ field: 'd_resolution_low', allowNull: true, type: DataType.FLOAT(12) })
	declare dResolutionLow?: number;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	details?: string;

	@Column({ field: 'limit_h_max', allowNull: true, type: DataType.INTEGER })
	limitHMax?: number;

	@Column({ field: 'limit_h_min', allowNull: true, type: DataType.INTEGER })
	limitHMin?: number;

	@Column({ field: 'limit_k_max', allowNull: true, type: DataType.INTEGER })
	limitKMax?: number;

	@Column({ field: 'limit_k_min', allowNull: true, type: DataType.INTEGER })
	limitKMin?: number;

	@Column({ field: 'limit_l_max', allowNull: true, type: DataType.INTEGER })
	limitLMax?: number;

	@Column({ field: 'limit_l_min', allowNull: true, type: DataType.INTEGER })
	limitLMin?: number;

	@Column({ field: 'number_all', allowNull: true, type: DataType.INTEGER })
	declare numberAll?: number;

	@Column({ field: 'number_obs', allowNull: true, type: DataType.INTEGER })
	declare numberObs?: number;

	@Column({ field: 'observed_criterion', allowNull: true, type: DataType.STRING(200) })
	observedCriterion?: string;

	@Column({ field: 'observed_criterion_F_max', allowNull: true, type: DataType.FLOAT(12) })
	observedCriterionFMax?: number;

	@Column({ field: 'observed_criterion_F_min', allowNull: true, type: DataType.FLOAT(12) })
	observedCriterionFMin?: number;

	@Column({ field: 'observed_criterion_I_max', allowNull: true, type: DataType.FLOAT(12) })
	observedCriterionIMax?: number;

	@Column({ field: 'observed_criterion_I_min', allowNull: true, type: DataType.FLOAT(12) })
	observedCriterionIMin?: number;

	@Column({ field: 'observed_criterion_sigma_F', allowNull: true, type: DataType.FLOAT(12) })
	declare observedCriterionSigmaF?: number;

	@Column({ field: 'observed_criterion_sigma_I', allowNull: true, type: DataType.FLOAT(12) })
	declare observedCriterionSigmaI?: number;

	@Column({ field: 'percent_possible_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare percentPossibleObs?: number;

	@Column({ field: 'R_free_details', allowNull: true, type: DataType.STRING(200) })
	rFreeDetails?: string;

	@Column({ field: 'Rmerge_F_all', allowNull: true, type: DataType.FLOAT(12) })
	rmergeFAll?: number;

	@Column({ field: 'Rmerge_F_obs', allowNull: true, type: DataType.FLOAT(12) })
	rmergeFObs?: number;

	@Column({ field: 'Friedel_coverage', allowNull: true, type: DataType.FLOAT(12) })
	friedelCoverage?: number;

	@Column({ field: 'number_gt', allowNull: true, type: DataType.INTEGER })
	numberGt?: number;

	@Column({ field: 'threshold_expression', allowNull: true, type: DataType.STRING(200) })
	thresholdExpression?: string;

	@Column({ field: 'pdbx_redundancy', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRedundancy?: number;

	@Column({ field: 'pdbx_Rmerge_I_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRmergeIObs?: number;

	@Column({ field: 'pdbx_Rmerge_I_all', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRmergeIAll?: number;

	@Column({ field: 'pdbx_Rsym_value', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRsymValue?: number;

	@Column({ field: 'pdbx_netI_over_av_sigmaI', allowNull: true, type: DataType.FLOAT(12) })
	pdbxNetIOverAvSigmaI?: number;

	@Column({ field: 'pdbx_netI_over_sigmaI', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxNetIOverSigmaI?: number;

	@Column({ field: 'pdbx_res_netI_over_av_sigmaI_2', allowNull: true, type: DataType.FLOAT(12) })
	pdbxResNetIOverAvSigmaI_2?: number;

	@Column({ field: 'pdbx_res_netI_over_sigmaI_2', allowNull: true, type: DataType.FLOAT(12) })
	pdbxResNetIOverSigmaI_2?: number;

	@Column({ field: 'pdbx_chi_squared', allowNull: true, type: DataType.FLOAT(12) })
	pdbxChiSquared?: number;

	@Column({ field: 'pdbx_scaling_rejects', allowNull: true, type: DataType.INTEGER })
	pdbxScalingRejects?: number;

	@Column({ field: 'pdbx_d_res_high_opt', allowNull: true, type: DataType.FLOAT(12) })
	pdbxDResHighOpt?: number;

	@Column({ field: 'pdbx_d_res_low_opt', allowNull: true, type: DataType.FLOAT(12) })
	pdbxDResLowOpt?: number;

	@Column({ field: 'pdbx_d_res_opt_method', allowNull: true, type: DataType.STRING(200) })
	pdbxDResOptMethod?: string;

	@Column({ field: 'phase_calculation_details', allowNull: true, type: DataType.STRING(200) })
	phaseCalculationDetails?: string;

	@Column({ field: 'pdbx_Rrim_I_all', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRrimIAll?: number;

	@Column({ field: 'pdbx_Rpim_I_all', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxRpimIAll?: number;

	@Column({ field: 'pdbx_d_opt', allowNull: true, type: DataType.FLOAT(12) })
	pdbxDOpt?: number;

	@Column({ field: 'pdbx_number_measured_all', allowNull: true, type: DataType.INTEGER })
	pdbxNumberMeasuredAll?: number;

	@Column({ field: 'pdbx_diffrn_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxDiffrnId?: string;

	@Column({ field: 'pdbx_ordinal', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	pdbxOrdinal!: number;

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

	@Column({ field: 'pdbx_Rmerge_I_anomalous', allowNull: true, type: DataType.FLOAT(12) })
	pdbxRmergeIAnomalous?: number;
}
