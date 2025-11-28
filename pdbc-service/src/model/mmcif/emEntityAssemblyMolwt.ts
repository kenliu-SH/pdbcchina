import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_entity_assembly_molwt", timestamps: false })
export class emEntityAssemblyMolwt extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entity_assembly_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityAssemblyId!: string;

    @Column({ field: "experimental_flag", allowNull: true, type: DataType.STRING(10) })
    experimentalFlag?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(22) })
    units?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    value?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;
}
