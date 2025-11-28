import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_assembly_auth_classification", timestamps: false })
export class pdbxStructAssemblyAuthClassification extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "assembly_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    assemblyId!: string;

    @Column({ field: "reason_for_interest", allowNull: true, type: DataType.STRING(80) })
    reasonForInterest?: string;
}
