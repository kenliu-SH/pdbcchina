import { Column, DataType, ForeignKey, Index, Model, Table } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'refine', timestamps: false })
export class refine extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	declare structureId: string;

	@Column({ field: 'aniso_B_1_1', primaryKey: true, type: DataType.FLOAT(12) })
	declare anisoB11: number;

	@Column({ field: 'aniso_B_1_2', primaryKey: true, type: DataType.FLOAT(12) })
	declare anisoB12: number;

	@Column({ field: 'aniso_B_1_3', primaryKey: true, type: DataType.FLOAT(12) })
	declare anisoB13: number;

	@Column({ field: 'aniso_B_2_2', primaryKey: true, type: DataType.FLOAT(12) })
	declare anisoB22: number;

	@Column({ field: 'aniso_B_2_3', primaryKey: true, type: DataType.FLOAT(12) })
	declare anisoB23: number;

	@Column({ field: 'aniso_B_3_3', primaryKey: true, type: DataType.FLOAT(12) })
	declare anisoB33: number;

	@Column({ field: 'pdbx_refine_id', allowNull: true, type: DataType.STRING(258) })
	declare pdbxRefineId?: string;

	@Column({ field: 'pdbx_method_to_determine_struct', allowNull: true, type: DataType.STRING(258) })
	declare pdbxMethodToDetermineStruct?: string;

	@Column({ field: 'pdbx_starting_model', allowNull: true, type: DataType.STRING(258) })
	declare pdbxStartingModel?: string;

	@Column({ field: 'pdbx_ls_cross_valid_method', allowNull: true, type: DataType.STRING(258) })
	declare pdbxLsCrossValidMethod?: string;

	@Column({ field: 'ls_d_res_high', allowNull: true, type: DataType.FLOAT(12) })
	declare lsDResHigh?: number;

	@Column({ field: 'ls_d_res_low', allowNull: true, type: DataType.FLOAT(12) })
	declare lsDResLow?: number;

	@Column({ field: 'pdbx_ls_sigma_F', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxLsSigmaF?: number;

	@Column({ field: 'ls_number_reflns_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare lsNumberReflnsObs?: number;

	@Column({ field: 'ls_number_reflns_R_free', allowNull: true, type: DataType.FLOAT(12) })
	declare lsNumberReflnsRFree?: number;

	@Column({ field: 'ls_percent_reflns_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare lsPercentReflnsObs?: number;

	@Column({ field: 'ls_R_factor_obs', allowNull: true, type: DataType.FLOAT(12) })
	declare lsRFactorObs?: number;

	@Column({ field: 'ls_R_factor_R_work', allowNull: true, type: DataType.FLOAT(12) })
	declare lsRFactorRWork?: number;

	@Column({ field: 'ls_R_factor_R_free', allowNull: true, type: DataType.FLOAT(12) })
	declare lsRFactorRFree?: number;

	@Column({ field: 'B_iso_mean', allowNull: true, type: DataType.FLOAT(12) })
	declare bIsoMean?: number;

	//pdbx_R_Free_selection_details
	@Column({ field: 'pdbx_R_Free_selection_details', allowNull: true, type: DataType.STRING(2000) })
	declare pdbxRFreeSelectionDetails?: string;
}
