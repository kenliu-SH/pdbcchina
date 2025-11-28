import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_msym_gen", timestamps: false })
export class pdbxStructMsymGen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entity_inst_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityInstId!: string;

    @Column({ field: "msym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    msymId!: string;

    @Column({ field: "oper_expression", primaryKey: true, type: DataType.STRING(30) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    operExpression!: string;
}
