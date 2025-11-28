import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_linked_entity", timestamps: false })
export class pdbxReferenceLinkedEntity extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    class?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ field: "taxonomy_id", allowNull: true, type: DataType.STRING(200) })
    taxonomyId?: string;

    @Column({ field: "taxonomy_class", allowNull: true, type: DataType.STRING(200) })
    taxonomyClass?: string;

    @Column({ field: "link_to_entity_type", allowNull: true, type: DataType.STRING(80) })
    linkToEntityType?: string;

    @Column({ field: "link_to_comp_id", allowNull: true, type: DataType.STRING(10) })
    linkToCompId?: string;

    @Column({ field: "link_from_entity_type", allowNull: true, type: DataType.STRING(80) })
    linkFromEntityType?: string;
}
