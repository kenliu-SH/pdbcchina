import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_entity_poly", timestamps: false })
export class pdbxReferenceEntityPoly extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    prdId!: string;

    @Column({ field: "ref_entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    refEntityId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ field: "db_code", allowNull: true, type: DataType.STRING(200) })
    dbCode?: string;

    @Column({ field: "db_name", allowNull: true, type: DataType.STRING(200) })
    dbName?: string;
}
