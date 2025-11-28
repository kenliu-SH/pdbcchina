import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_diffrn_reflns_shell", timestamps: false })
export class pdbxDiffrnReflnsShell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ field: "d_res_low", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResLow!: number;

    @Column({ field: "d_res_high", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResHigh!: number;

    @Column({ field: "percent_possible_obs", allowNull: true, type: DataType.FLOAT(12) })
    percentPossibleObs?: number;

    @Column({ field: "Rmerge_I_obs", allowNull: true, type: DataType.FLOAT(12) })
    rmergeIObs?: number;

    @Column({ field: "Rsym_value", allowNull: true, type: DataType.FLOAT(12) })
    rsymValue?: number;

    @Column({ field: "chi_squared", allowNull: true, type: DataType.FLOAT(12) })
    chiSquared?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    redundancy?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    rejects?: number;

    @Column({ field: "number_obs", allowNull: true, type: DataType.INTEGER })
    numberObs?: number;
}
