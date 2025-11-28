import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "reflns_scale", timestamps: false })
export class reflnsScale extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "group_code", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    groupCode!: string;

    @Column({ field: "meas_F", allowNull: true, type: DataType.FLOAT(12) })
    measF?: number;

    @Column({ field: "meas_F_squared", allowNull: true, type: DataType.FLOAT(12) })
    measFSquared?: number;

    @Column({ field: "meas_intensity", allowNull: true, type: DataType.FLOAT(12) })
    measIntensity?: number;
}
