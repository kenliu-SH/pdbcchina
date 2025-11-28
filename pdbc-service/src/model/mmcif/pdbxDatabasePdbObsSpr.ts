import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_database_PDB_obs_spr", timestamps: false })
export class pdbxDatabasePdbObsSpr extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    declare id?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "pdb_id", primaryKey: true, type: DataType.STRING(15) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbId!: string;

    @Column({ field: "replace_pdb_id", primaryKey: true, type: DataType.STRING(128) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    replacePdbId!: string;

    @Column({ allowNull: true, type: DataType.STRING(511) })
    details?: string;
}
