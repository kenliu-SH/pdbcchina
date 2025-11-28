import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_link_tor", timestamps: false })
export class chemLinkTor extends Model {
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

    @Column({ field: "atom_4_comp_id", allowNull: true, type: DataType.STRING(10) })
    atom_4CompId?: string;

    @Column({ field: "atom_id_1", allowNull: true, type: DataType.STRING(10) })
    atomId_1?: string;

    @Column({ field: "atom_id_2", allowNull: true, type: DataType.STRING(10) })
    atomId_2?: string;

    @Column({ field: "atom_id_3", allowNull: true, type: DataType.STRING(10) })
    atomId_3?: string;

    @Column({ field: "atom_id_4", allowNull: true, type: DataType.STRING(10) })
    atomId_4?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;
}
