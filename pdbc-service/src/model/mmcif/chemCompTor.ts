import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_comp_tor", timestamps: false })
export class chemCompTor extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomId_1?: string;

    @Column({ field: "atom_id_2", allowNull: true, type: DataType.STRING(6) })
    atomId_2?: string;

    @Column({ field: "atom_id_3", allowNull: true, type: DataType.STRING(6) })
    atomId_3?: string;

    @Column({ field: "atom_id_4", allowNull: true, type: DataType.STRING(6) })
    atomId_4?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;
}
