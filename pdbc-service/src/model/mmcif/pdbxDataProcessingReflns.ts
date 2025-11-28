import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_data_processing_reflns", timestamps: false })
export class pdbxDataProcessingReflns extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "number_all", allowNull: true, type: DataType.INTEGER })
    numberAll?: number;

    @Column({ field: "number_marked_reject", allowNull: true, type: DataType.INTEGER })
    numberMarkedReject?: number;

    @Column({ field: "percent_marked_reject", allowNull: true, type: DataType.FLOAT(12) })
    percentMarkedReject?: number;

    @Column({ field: "percent_rejected", allowNull: true, type: DataType.FLOAT(12) })
    percentRejected?: number;

    @Column({ field: "R_factor_all_linear", allowNull: true, type: DataType.FLOAT(12) })
    rFactorAllLinear?: number;
}
