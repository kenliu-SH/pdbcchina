import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entity } from './entity';
import { entry } from './entry';

@Table({ tableName: 'struct_ref_seq', timestamps: false })
export class structRefSeq extends Model {
	@ForeignKey(() => entry)
	@ForeignKey(() => entity)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'seq_align_beg', allowNull: true, type: DataType.INTEGER })
	seqAlignBeg?: number;

	@Column({ field: 'seq_align_end', allowNull: true, type: DataType.INTEGER })
	seqAlignEnd?: number;

	@Column({ field: 'ref_id', allowNull: true, type: DataType.STRING(10) })
	refId?: string;

	@Column({ field: 'align_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	alignId!: string;

	@Column({ field: 'db_align_beg', allowNull: true, type: DataType.INTEGER })
	dbAlignBeg?: number;

	@Column({ field: 'db_align_end', allowNull: true, type: DataType.INTEGER })
	dbAlignEnd?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	details?: string;

	@Column({ field: 'pdbx_strand_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxStrandId?: string;

	@Column({ field: 'pdbx_db_accession', allowNull: true, type: DataType.STRING(12) })
	declare pdbxDbAccession?: string;

	@Column({ field: 'pdbx_db_align_beg_ins_code', allowNull: true, type: DataType.STRING(10) })
	pdbxDbAlignBegInsCode?: string;

	@Column({ field: 'pdbx_db_align_end_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbxDbAlignEndInsCode?: string;

	@Column({ field: 'pdbx_PDB_id_code', allowNull: true, type: DataType.STRING(13) })
	pdbxPdbIdCode?: string;

	@Column({ field: 'pdbx_auth_seq_align_beg', allowNull: true, type: DataType.STRING(10) })
	pdbxAuthSeqAlignBeg?: string;

	@Column({ field: 'pdbx_auth_seq_align_end', allowNull: true, type: DataType.STRING(10) })
	pdbxAuthSeqAlignEnd?: string;

	@Column({ field: 'pdbx_seq_align_beg_ins_code', allowNull: true, type: DataType.STRING(10) })
	pdbxSeqAlignBegInsCode?: string;

	@Column({ field: 'pdbx_seq_align_end_ins_code', allowNull: true, type: DataType.STRING(10) })
	pdbxSeqAlignEndInsCode?: string;
}
