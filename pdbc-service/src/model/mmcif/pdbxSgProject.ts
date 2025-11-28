import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_SG_project", timestamps: false })
export class pdbxSgProject extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "project_name", allowNull: true, type: DataType.STRING(200) })
    projectName?: string;

    @Column({ field: "full_name_of_center", allowNull: true, type: DataType.STRING(200) })
    fullNameOfCenter?: string;

    @Column({ field: "initial_of_center", allowNull: true, type: DataType.STRING(200) })
    initialOfCenter?: string;
}
