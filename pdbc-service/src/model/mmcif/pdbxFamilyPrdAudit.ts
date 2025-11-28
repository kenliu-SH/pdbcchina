import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_family_prd_audit", timestamps: false })
export class pdbxFamilyPrdAudit extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "family_prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    familyPrdId!: string;

    @Column({ primaryKey: true, type: DataType.DATE })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    date!: Date;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    annotator?: string;

    @Column({ field: "processing_site", allowNull: true, type: DataType.STRING(10) })
    processingSite?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "action_type", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    actionType!: string;
}
