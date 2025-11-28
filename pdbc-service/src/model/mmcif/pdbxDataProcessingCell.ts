import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_data_processing_cell", timestamps: false })
export class pdbxDataProcessingCell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    a?: number;

    @Column({ field: "a_tolerance", allowNull: true, type: DataType.FLOAT(12) })
    aTolerance?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    b?: number;

    @Column({ field: "b_tolerance", allowNull: true, type: DataType.FLOAT(12) })
    bTolerance?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    c?: number;

    @Column({ field: "c_tolerance", allowNull: true, type: DataType.FLOAT(12) })
    cTolerance?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    alpha?: number;

    @Column({ field: "alpha_tolerance", allowNull: true, type: DataType.FLOAT(12) })
    alphaTolerance?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    beta?: number;

    @Column({ field: "beta_tolerance", allowNull: true, type: DataType.FLOAT(12) })
    betaTolerance?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    gamma?: number;

    @Column({ field: "gamma_tolerance", allowNull: true, type: DataType.FLOAT(12) })
    gammaTolerance?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    volume?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    mosaicity?: number;

    @Column({ field: "resolution_range", allowNull: true, type: DataType.STRING(80) })
    resolutionRange?: string;

    @Column({ field: "space_group", allowNull: true, type: DataType.STRING(80) })
    spaceGroup?: string;
}
