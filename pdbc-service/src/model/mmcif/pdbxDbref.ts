import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dbref", timestamps: false })
export class pdbxDbref extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdb_id_code", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbIdCode!: string;

    @Column({ field: "chain_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    chainId!: string;

    @Column({ field: "begin_res_number", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    beginResNumber!: string;

    @Column({ field: "begin_ins_code", allowNull: true, type: DataType.STRING(10) })
    beginInsCode?: string;

    @Column({ field: "end_res_number", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    endResNumber!: string;

    @Column({ field: "end_ins_code", allowNull: true, type: DataType.STRING(10) })
    endInsCode?: string;

    @Column({ field: "database_name", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    databaseName!: string;

    @Column({ field: "database_accession", allowNull: true, type: DataType.STRING(10) })
    databaseAccession?: string;

    @Column({ field: "database_id_code", allowNull: true, type: DataType.STRING(10) })
    databaseIdCode?: string;

    @Column({ field: "database_begin_res_number", allowNull: true, type: DataType.STRING(10) })
    databaseBeginResNumber?: string;

    @Column({ field: "database_begin_ins_code", allowNull: true, type: DataType.STRING(10) })
    databaseBeginInsCode?: string;

    @Column({ field: "database_end_res_number", allowNull: true, type: DataType.STRING(10) })
    databaseEndResNumber?: string;

    @Column({ field: "database_end_ins_code", allowNull: true, type: DataType.STRING(10) })
    databaseEndInsCode?: string;
}
