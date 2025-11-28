import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "database_PDB_rev", timestamps: false })
export class databasePdbRev extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "author_name", allowNull: true, type: DataType.STRING(80) })
    authorName?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "date_original", allowNull: true, type: DataType.DATE })
    dateOriginal?: Date;

    @Column({ field: "mod_type", allowNull: true, type: DataType.INTEGER })
    modType?: number;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    num!: number;

    @Column({ field: "replaced_by", allowNull: true, type: DataType.STRING(80) })
    replacedBy?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    replaces?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    status?: string;

    @Column({ field: "pdbx_record_revised_1", allowNull: true, type: DataType.STRING(10) })
    pdbxRecordRevised_1?: string;

    @Column({ field: "pdbx_record_revised_2", allowNull: true, type: DataType.STRING(10) })
    pdbxRecordRevised_2?: string;

    @Column({ field: "pdbx_record_revised_3", allowNull: true, type: DataType.STRING(10) })
    pdbxRecordRevised_3?: string;

    @Column({ field: "pdbx_record_revised_4", allowNull: true, type: DataType.STRING(10) })
    pdbxRecordRevised_4?: string;
}
