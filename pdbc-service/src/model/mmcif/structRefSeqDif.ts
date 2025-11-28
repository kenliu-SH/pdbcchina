import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: "struct_ref_seq_dif", timestamps: false })
export class structRefSeqDif extends Model {
    @ForeignKey(() => entry)
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare structureId: string;

    @Column({ field: "mon_id", allowNull: true, type: DataType.STRING(10) })
    declare monId?: string;

    @Column({ field: "seq_num", allowNull: true, type: DataType.INTEGER })
    declare seqNum?: number;

    @Column({ field: "align_id", allowNull: true, type: DataType.STRING(10) })
    declare alignId?: string;

    @Column({ field: "db_mon_id", allowNull: true, type: DataType.STRING(10) })
    declare dbMonId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    declare details?: string;

    @Column({ field: "pdbx_pdb_id_code", allowNull: true, type: DataType.STRING(10) })
    pdbxPdbIdCode?: string;

    @Column({ field: "pdbx_pdb_strand_id", allowNull: true, type: DataType.STRING(10) })
    pdbxPdbStrandId?: string;

    @Column({ field: "pdbx_pdb_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxPdbInsCode?: string;

    @Column({ field: "pdbx_auth_seq_num", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthSeqNum?: string;

    @Column({ field: "pdbx_seq_db_name", allowNull: true, type: DataType.STRING(10) })
    pdbxSeqDbName?: string;

    @Column({ field: "pdbx_seq_db_accession_code", allowNull: true, type: DataType.STRING(12) })
    pdbxSeqDbAccessionCode?: string;

    @Column({ field: "pdbx_seq_db_seq_num", allowNull: true, type: DataType.STRING(15) })
    pdbxSeqDbSeqNum?: string;

    @Column({ field: "pdbx_ordinal", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxOrdinal!: number;
}
