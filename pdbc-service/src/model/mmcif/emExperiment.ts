import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'em_experiment', timestamps: false })
export class emExperiment extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ allowNull: true, type: DataType.STRING(10) })
	declare id?: string;

	@Column({ field: 'reconstruction_method', allowNull: true, type: DataType.STRING(80) })
	declare reconstructionMethod?: string;

	@Column({ field: 'aggregation_state', allowNull: true, type: DataType.STRING(80) })
	declare aggregationState?: string;

	@Column({ field: 'specimen_type', allowNull: true, type: DataType.STRING(200) })
	declare specimenType?: string;

	@Column({ field: 'entity_assembly_id', allowNull: true, type: DataType.STRING(10) })
	declare entityAssemblyId?: string;
}
