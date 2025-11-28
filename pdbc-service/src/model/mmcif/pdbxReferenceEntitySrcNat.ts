import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_entity_src_nat", timestamps: false })
export class pdbxReferenceEntitySrcNat extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    prdId!: string;

    @Column({ field: "ref_entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    refEntityId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "organism_scientific", allowNull: true, type: DataType.STRING(200) })
    organismScientific?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    strain?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    taxdeclareId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    atcc?: string;

    @Column({ field: "db_code", allowNull: true, type: DataType.STRING(200) })
    dbCode?: string;

    @Column({ field: "db_name", allowNull: true, type: DataType.STRING(200) })
    dbName?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    source?: string;

    @Column({ field: "source_id", allowNull: true, type: DataType.STRING(200) })
    sourceId?: string;
}
