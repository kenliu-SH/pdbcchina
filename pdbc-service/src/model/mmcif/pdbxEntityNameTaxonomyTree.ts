import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_name_taxonomy_tree", timestamps: false })
export class pdbxEntityNameTaxonomyTree extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "parent_id", primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    parentId!: string;
}
