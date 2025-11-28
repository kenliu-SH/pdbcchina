import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_standards", timestamps: false })
export class diffrnStandards extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ field: "decay__", allowNull: true, type: DataType.FLOAT(12) })
    decay?: number;

    @Column({ field: "interval_count", allowNull: true, type: DataType.INTEGER })
    intervalCount?: number;

    @Column({ field: "interval_time", allowNull: true, type: DataType.FLOAT(12) })
    intervalTime?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    number?: number;

    @Column({ field: "scale_sigma", allowNull: true, type: DataType.FLOAT(12) })
    scaleSigma?: number;

    @Column({ field: "scale_u", allowNull: true, type: DataType.FLOAT(12) })
    scaleU?: number;
}
