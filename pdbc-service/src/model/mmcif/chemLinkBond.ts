import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_link_bond", timestamps: false })
export class chemLinkBond extends Model {
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

    @Column({ field: "atom_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_1!: string;

    @Column({ field: "atom_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_2!: string;

    @Column({ field: "value_dist", allowNull: true, type: DataType.FLOAT(12) })
    valueDist?: number;

    @Column({ field: "value_dist_esd", allowNull: true, type: DataType.FLOAT(12) })
    valueDistEsd?: number;

    @Column({ field: "value_order", allowNull: true, type: DataType.STRING(10) })
    valueOrder?: string;
}
