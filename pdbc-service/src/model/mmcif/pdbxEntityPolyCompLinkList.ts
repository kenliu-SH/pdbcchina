import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_poly_comp_link_list", timestamps: false })
export class pdbxEntityPolyCompLinkList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "link_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "entity_id", allowNull: true, type: DataType.STRING(10) })
    entityId?: string;

    @Column({ field: "entity_comp_num_1", allowNull: true, type: DataType.INTEGER })
    entityCompNum_1?: number;

    @Column({ field: "entity_comp_num_2", allowNull: true, type: DataType.INTEGER })
    entityCompNum_2?: number;

    @Column({ field: "comp_id_1", allowNull: true, type: DataType.STRING(10) })
    compId_1?: string;

    @Column({ field: "comp_id_2", allowNull: true, type: DataType.STRING(10) })
    compId_2?: string;

    @Column({ field: "atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomId_1?: string;

    @Column({ field: "leaving_atom_id_1", allowNull: true, type: DataType.STRING(6) })
    leavingAtomId_1?: string;

    @Column({ field: "atom_stereo_config_1", allowNull: true, type: DataType.STRING(10) })
    atomStereoConfig_1?: string;

    @Column({ field: "atom_id_2", allowNull: true, type: DataType.STRING(6) })
    atomId_2?: string;

    @Column({ field: "leaving_atom_id_2", allowNull: true, type: DataType.STRING(6) })
    leavingAtomId_2?: string;

    @Column({ field: "atom_stereo_config_2", allowNull: true, type: DataType.STRING(10) })
    atomStereoConfig_2?: string;

    @Column({ field: "value_order", allowNull: true, type: DataType.STRING(10) })
    valueOrder?: string;
}
