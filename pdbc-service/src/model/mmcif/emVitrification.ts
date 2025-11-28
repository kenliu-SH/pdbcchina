import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'em_vitrification', timestamps: false })
export class emVitrification extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', allowNull: true, type: DataType.STRING(10) })
	entryId?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'sample_preparation_id', allowNull: true, type: DataType.STRING(10) })
	samplePreparationId?: string;

	@Column({ field: 'specimen_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	specimenId!: string;

	@Column({ field: 'cryogen_name', allowNull: true, type: DataType.STRING(80) })
	declare cryogenName?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	humidity?: number;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	temp?: number;

	@Column({ field: 'chamber_temperature', allowNull: true, type: DataType.FLOAT(12) })
	chamberTemperature?: number;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare instrument?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	method?: string;

	@Column({ field: 'time_resolved_state', allowNull: true, type: DataType.STRING(200) })
	timeResolvedState?: string;

	@Column({ field: 'citation_id', allowNull: true, type: DataType.STRING(10) })
	citationId?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare details?: string;
}
