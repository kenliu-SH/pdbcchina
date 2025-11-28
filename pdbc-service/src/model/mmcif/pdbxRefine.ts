import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_refine", timestamps: false })
export class pdbxRefine extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "pdbx_refine_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxRefineId!: string;

    @Column({ field: "R_factor_all_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    rFactorAllNoCutoff?: number;

    @Column({ field: "R_factor_obs_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    rFactorObsNoCutoff?: number;

    @Column({ field: "free_R_factor_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRFactor_4sigCutoff?: number;

    @Column({ field: "free_R_factor_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRFactorNoCutoff?: number;

    @Column({ field: "free_R_error_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRErrorNoCutoff?: number;

    @Column({ field: "free_R_val_test_set_size_perc_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRValTestSetSizePercNoCutoff?: number;

    @Column({ field: "free_R_val_test_set_ct_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRValTestSetCtNoCutoff?: number;

    @Column({ field: "number_reflns_obs_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    numberReflnsObsNoCutoff?: number;

    @Column({ field: "R_factor_all_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    rFactorAll_4sigCutoff?: number;

    @Column({ field: "R_factor_obs_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    rFactorObs_4sigCutoff?: number;

    @Column({ field: "free_R_val_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRVal_4sigCutoff?: number;

    @Column({ field: "free_R_val_test_set_size_perc_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRValTestSetSizePerc_4sigCutoff?: number;

    @Column({ field: "free_R_val_test_set_ct_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRValTestSetCt_4sigCutoff?: number;

    @Column({ field: "number_reflns_obs_4sig_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    numberReflnsObs_4sigCutoff?: number;

    @Column({ field: "free_R_val_no_cutoff", allowNull: true, type: DataType.FLOAT(12) })
    freeRValNoCutoff?: number;
}
