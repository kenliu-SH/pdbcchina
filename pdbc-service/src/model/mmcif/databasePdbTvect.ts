import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "database_PDB_tvect", timestamps: false })
export class databasePdbTvect extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    vector_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    vector_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    vector_3?: number;
}
