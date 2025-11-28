import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_reflns_class", timestamps: false })
export class diffrnReflnsClass extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "av_R_eq", allowNull: true, type: DataType.FLOAT(12) })
    avREq?: number;

    @Column({ field: "av_sgI_I", allowNull: true, type: DataType.FLOAT(12) })
    avSgII?: number;

    @Column({ field: "av_uI_I", allowNull: true, type: DataType.FLOAT(12) })
    avUII?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    code!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    description?: string;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    number?: number;
}
