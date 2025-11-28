import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_ls_class", timestamps: false })
export class refineLsClass extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    code!: string;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "R_factor_gt", allowNull: true, type: DataType.FLOAT(12) })
    rFactorGt?: number;

    @Column({ field: "R_factor_all", allowNull: true, type: DataType.FLOAT(12) })
    rFactorAll?: number;

    @Column({ field: "R_Fsqd_factor", allowNull: true, type: DataType.FLOAT(12) })
    rFsqdFactor?: number;

    @Column({ field: "R_I_factor", allowNull: true, type: DataType.FLOAT(12) })
    rIFactor?: number;

    @Column({ field: "wR_factor_all", allowNull: true, type: DataType.FLOAT(12) })
    wRFactorAll?: number;
}
