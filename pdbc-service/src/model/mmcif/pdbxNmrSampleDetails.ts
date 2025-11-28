import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_sample_details', timestamps: false })
export class pdbxNmrSampleDetails extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'solution_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	solutionId!: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	declare contents?: string;

	@Column({ field: 'solvent_system', allowNull: true, type: DataType.STRING(511) })
	declare solventSystem?: string;

	@Column({ allowNull: true, type: DataType.STRING(128) })
	declare label?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare type?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare details?: string;
}
