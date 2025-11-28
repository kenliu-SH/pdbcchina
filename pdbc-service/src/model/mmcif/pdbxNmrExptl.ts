import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_exptl', timestamps: false })
export class pdbxNmrExptl extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'experiment_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare experimentId: string;

	@Column({ field: 'conditions_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare conditionsId: string;

	@Column({ field: 'solution_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare solutionId: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare type?: string;

	@Column({ field: 'spectrometer_id', allowNull: true, type: DataType.INTEGER })
	declare spectrometerId?: number;

	@Column({ field: 'sample_state', allowNull: true, type: DataType.STRING(80) })
	declare sampleState?: string;
}
