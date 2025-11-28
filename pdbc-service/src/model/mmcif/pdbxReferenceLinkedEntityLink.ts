import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_linked_entity_link", timestamps: false })
export class pdbxReferenceLinkedEntityLink extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "linked_entity_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkedEntityId!: number;

    @Column({ field: "link_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: number;

    @Column({ field: "from_list_id", allowNull: true, type: DataType.INTEGER })
    fromListId?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "to_comp_id", allowNull: true, type: DataType.STRING(10) })
    toCompId?: string;

    @Column({ field: "from_comp_id", allowNull: true, type: DataType.STRING(10) })
    fromCompId?: string;

    @Column({ field: "to_atom_id", allowNull: true, type: DataType.STRING(6) })
    toAtomId?: string;

    @Column({ field: "from_atom_id", allowNull: true, type: DataType.STRING(6) })
    fromAtomId?: string;

    @Column({ field: "from_leaving_atom_id", allowNull: true, type: DataType.STRING(6) })
    fromLeavingAtomId?: string;

    @Column({ field: "from_atom_stereo_config", allowNull: true, type: DataType.STRING(10) })
    fromAtomStereoConfig?: string;

    @Column({ field: "value_order", allowNull: true, type: DataType.STRING(10) })
    valueOrder?: string;
}
