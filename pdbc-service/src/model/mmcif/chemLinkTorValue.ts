import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_link_tor_value", timestamps: false })
export class chemLinkTorValue extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "tor_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    torId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    angle?: number;

    @Column({ field: "angle_esd", allowNull: true, type: DataType.FLOAT(12) })
    angleEsd?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    dist?: number;

    @Column({ field: "dist_esd", allowNull: true, type: DataType.FLOAT(12) })
    distEsd?: number;
}
