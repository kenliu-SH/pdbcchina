import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_ref_seq_depositor_info", timestamps: false })
export class pdbxStructRefSeqDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "ref_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    refId!: string;

    @Column({ field: "entity_id", allowNull: true, type: DataType.STRING(10) })
    entityId?: string;

    @Column({ field: "db_align_beg", allowNull: true, type: DataType.INTEGER })
    dbAlignBeg?: number;

    @Column({ field: "db_align_end", allowNull: true, type: DataType.INTEGER })
    dbAlignEnd?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "db_accession", allowNull: true, type: DataType.STRING(10) })
    dbAccession?: string;

    @Column({ field: "db_code", allowNull: true, type: DataType.STRING(80) })
    dbCode?: string;

    @Column({ field: "db_name", allowNull: true, type: DataType.STRING(80) })
    dbName?: string;

    @Column({ field: "db_seq_one_letter_code", allowNull: true, type: DataType.STRING(200) })
    dbSeqOneLetterCode?: string;

    @Column({ field: "seq_align_begin", allowNull: true, type: DataType.STRING(10) })
    seqAlignBegin?: string;

    @Column({ field: "seq_align_end", allowNull: true, type: DataType.STRING(10) })
    seqAlignEnd?: string;
}
