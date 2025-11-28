import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_depui_validation_status_flags", timestamps: false })
export class pdbxDepuiValidationStatusFlags extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "dep_dataset_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    depDatasetId!: string;

    @Column({ field: "residual_B_factors_flag", allowNull: true, type: DataType.STRING(10) })
    residualBFactorsFlag?: string;

    @Column({ field: "occupancy_outliers_low", allowNull: true, type: DataType.INTEGER })
    occupancyOutliersLow?: number;

    @Column({ field: "occupancy_outliers_high", allowNull: true, type: DataType.INTEGER })
    occupancyOutliersHigh?: number;

    @Column({ field: "adp_outliers_low", allowNull: true, type: DataType.INTEGER })
    adpOutliersLow?: number;

    @Column({ field: "solvent_outliers", allowNull: true, type: DataType.INTEGER })
    solventOutliers?: number;
}
