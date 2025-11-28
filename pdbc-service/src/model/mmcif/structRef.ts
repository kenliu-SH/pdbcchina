import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entity } from './entity';
import { entry } from './entry';

@Table({ tableName: 'struct_ref', timestamps: false })
export class structRef extends Model {
	@ForeignKey(() => entry)
	@ForeignKey(() => entity)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'id', primaryKey: true, type: DataType.INTEGER })
	declare id: number;

	//db_name
	@Column({ field: 'db_name', allowNull: true, type: DataType.STRING })
	declare dbName?: string;

	//db_code
	@Column({ field: 'db_code', allowNull: true, type: DataType.STRING })
	declare dbCode?: string;

	//pdbx_db_accession
	@Column({ field: 'pdbx_db_accession', allowNull: true, type: DataType.STRING })
	declare pdbxDbAccession?: string;

	//pdbx_db_isoform
	@Column({ field: 'pdbx_db_isoform', allowNull: true, type: DataType.STRING })
	declare pdbxDbIsoform?: string;

	//entity_id
	@Column({ field: 'entity_id', allowNull: true, type: DataType.STRING })
	declare entityId?: string;

	//pdbx_seq_one_letter_code
	@Column({ field: 'pdbx_seq_one_letter_code', allowNull: true, type: DataType.STRING })
	declare pdbxSeqOneLetterCode?: string;

	//pdbx_align_begin
	@Column({ field: 'pdbx_align_begin', allowNull: true, type: DataType.INTEGER })
	declare pdbxAlignBegin?: number;
}
