import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_comp_angle", timestamps: false })
export class chemCompAngle extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "atom_id_1", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_1!: string;

    @Column({ field: "atom_id_2", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_2!: string;

    @Column({ field: "atom_id_3", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_3!: string;

    @Column({ field: "value_angle", allowNull: true, type: DataType.FLOAT(12) })
    valueAngle?: number;

    @Column({ field: "value_angle_esd", allowNull: true, type: DataType.FLOAT(12) })
    valueAngleEsd?: number;

    @Column({ field: "value_dist", allowNull: true, type: DataType.FLOAT(12) })
    valueDist?: number;

    @Column({ field: "value_dist_esd", allowNull: true, type: DataType.FLOAT(12) })
    valueDistEsd?: number;
}
