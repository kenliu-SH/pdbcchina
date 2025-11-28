import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_entity_link", timestamps: false })
export class pdbxReferenceEntityLink extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "link_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: number;

    @Column({ field: "prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    prdId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "ref_entity_id_1", allowNull: true, type: DataType.STRING(10) })
    refEntityId_1?: string;

    @Column({ field: "ref_entity_id_2", allowNull: true, type: DataType.STRING(10) })
    refEntityId_2?: string;

    @Column({ field: "entity_seq_num_1", allowNull: true, type: DataType.INTEGER })
    entitySeqNum_1?: number;

    @Column({ field: "entity_seq_num_2", allowNull: true, type: DataType.INTEGER })
    entitySeqNum_2?: number;

    @Column({ field: "comp_id_1", allowNull: true, type: DataType.STRING(10) })
    compId_1?: string;

    @Column({ field: "comp_id_2", allowNull: true, type: DataType.STRING(10) })
    compId_2?: string;

    @Column({ field: "atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomId_1?: string;

    @Column({ field: "atom_id_2", allowNull: true, type: DataType.STRING(10) })
    atomId_2?: string;

    @Column({ field: "value_order", allowNull: true, type: DataType.STRING(10) })
    valueOrder?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    component_1?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    component_2?: number;

    @Column({ field: "nonpoly_res_num_1", allowNull: true, type: DataType.STRING(10) })
    nonpolyResNum_1?: string;

    @Column({ field: "nonpoly_res_num_2", allowNull: true, type: DataType.STRING(10) })
    nonpolyResNum_2?: string;

    @Column({ field: "link_class", allowNull: true, type: DataType.STRING(10) })
    linkClass?: string;
}
