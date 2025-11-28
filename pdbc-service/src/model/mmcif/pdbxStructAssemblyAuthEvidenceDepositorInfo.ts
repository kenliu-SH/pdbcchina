import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_assembly_auth_evidence_depositor_info", timestamps: false })
export class pdbxStructAssemblyAuthEvidenceDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "assembly_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    assemblyId!: string;

    @Column({ field: "experimental_support", allowNull: true, type: DataType.STRING(80) })
    experimentalSupport?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
