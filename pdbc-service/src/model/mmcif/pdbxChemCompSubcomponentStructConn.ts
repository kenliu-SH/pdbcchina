import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_subcomponent_struct_conn", timestamps: false })
export class pdbxChemCompSubcomponentStructConn extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    type?: string;

    @Column({ field: "entity_id_1", allowNull: true, type: DataType.INTEGER })
    entityId_1?: number;

    @Column({ field: "entity_id_2", allowNull: true, type: DataType.INTEGER })
    entityId_2?: number;

    @Column({ field: "atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomId_1?: string;

    @Column({ field: "atom_id_2", allowNull: true, type: DataType.STRING(6) })
    atomId_2?: string;

    @Column({ field: "comp_id_1", allowNull: true, type: DataType.STRING(10) })
    compId_1?: string;

    @Column({ field: "comp_id_2", allowNull: true, type: DataType.STRING(10) })
    compId_2?: string;

    @Column({ field: "seq_id_1", allowNull: true, type: DataType.INTEGER })
    seqId_1?: number;

    @Column({ field: "seq_id_2", allowNull: true, type: DataType.INTEGER })
    seqId_2?: number;
}
