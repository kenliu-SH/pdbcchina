import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'entity_poly', timestamps: false })
export class entityPoly extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare entityId?: string;

	@Column({ allowNull: true, type: DataType.STRING })
	declare type?: string;

	@Column({ field: 'nstd_linkage', allowNull: true, type: DataType.STRING })
	declare nstdLinkage?: string;

	@Column({ field: 'nstd_monomer', allowNull: true, type: DataType.STRING })
	declare nstdMonomer?: string;

	@Column({ field: 'pdbx_seq_one_letter_code', allowNull: true, type: DataType.STRING })
	declare pdbxSeqOneLetterCode?: string;

	@Column({ field: 'pdbx_seq_one_letter_code_can', allowNull: true, type: DataType.STRING })
	declare pdbxSeqOneLetterCodeCan?: string;

	@Column({ field: 'pdbx_sequence_evidence_code', allowNull: true, type: DataType.STRING })
	declare pdbxSequenceEvidenceCode?: string;

	@Column({ field: 'pdbx_strand_id', allowNull: true, type: DataType.STRING })
	declare pdbxStrandId?: string;

	@Column({ field: 'pdbx_target_identifier', allowNull: true, type: DataType.STRING })
	declare pdbxTargetIdentifier?: string;
}
