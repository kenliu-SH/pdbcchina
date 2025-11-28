import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_link_angle", timestamps: false })
export class chemLinkAngle extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "link_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: string;

    @Column({ field: "atom_1_comp_id", allowNull: true, type: DataType.STRING(10) })
    atom_1CompId?: string;

    @Column({ field: "atom_2_comp_id", allowNull: true, type: DataType.STRING(10) })
    atom_2CompId?: string;

    @Column({ field: "atom_3_comp_id", allowNull: true, type: DataType.STRING(10) })
    atom_3CompId?: string;

    @Column({ field: "atom_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_1!: string;

    @Column({ field: "atom_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_2!: string;

    @Column({ field: "atom_id_3", primaryKey: true, type: DataType.STRING(10) })
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
