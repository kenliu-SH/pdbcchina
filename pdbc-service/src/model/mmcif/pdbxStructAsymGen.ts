import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_asym_gen", timestamps: false })
export class pdbxStructAsymGen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entity_inst_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityInstId!: string;

    @Column({ field: "asym_id", allowNull: true, type: DataType.STRING(10) })
    asymId?: string;

    @Column({ field: "oper_expression", primaryKey: true, type: DataType.STRING(30) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    operExpression!: string;
}
