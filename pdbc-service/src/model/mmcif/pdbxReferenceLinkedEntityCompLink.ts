import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_linked_entity_comp_link", timestamps: false })
export class pdbxReferenceLinkedEntityCompLink extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "linked_entity_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkedEntityId!: number;

    @Column({ field: "link_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: number;

    @Column({ field: "list_id_1", allowNull: true, type: DataType.INTEGER })
    listId_1?: number;

    @Column({ field: "list_id_2", allowNull: true, type: DataType.INTEGER })
    listId_2?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "comp_id_1", allowNull: true, type: DataType.STRING(10) })
    compId_1?: string;

    @Column({ field: "comp_id_2", allowNull: true, type: DataType.STRING(10) })
    compId_2?: string;

    @Column({ field: "atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomId_1?: string;

    @Column({ field: "atom_id_2", allowNull: true, type: DataType.STRING(6) })
    atomId_2?: string;

    @Column({ field: "leaving_atom_id_1", allowNull: true, type: DataType.STRING(6) })
    leavingAtomId_1?: string;

    @Column({ field: "atom_stereo_config_1", allowNull: true, type: DataType.STRING(10) })
    atomStereoConfig_1?: string;

    @Column({ field: "leaving_atom_id_2", allowNull: true, type: DataType.STRING(6) })
    leavingAtomId_2?: string;

    @Column({ field: "atom_stereo_config_2", allowNull: true, type: DataType.STRING(10) })
    atomStereoConfig_2?: string;

    @Column({ field: "value_order", allowNull: true, type: DataType.STRING(10) })
    valueOrder?: string;
}
