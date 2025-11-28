import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'exptl_crystal_grow', timestamps: false })
export class exptlCrystalGrow extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'crystal_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare crystalId: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	apparatus?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	atmosphere?: string;

	@Column({ allowNull: true, type: DataType.STRING(255) })
	details?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare method?: string;

	@Column({ field: 'method_ref', allowNull: true, type: DataType.STRING(200) })
	methodRef?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	declare pH?: number;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	pressure?: number;

	@Column({ field: 'pressure_esd', allowNull: true, type: DataType.FLOAT(12) })
	pressureEsd?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	seeding?: string;

	@Column({ field: 'seeding_ref', allowNull: true, type: DataType.STRING(200) })
	seedingRef?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	declare temp?: number;

	@Column({ field: 'temp_details', allowNull: true, type: DataType.STRING(200) })
	tempDetails?: string;

	@Column({ field: 'temp_esd', allowNull: true, type: DataType.FLOAT(12) })
	tempEsd?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	time?: string;

	@Column({ field: 'pdbx_details', allowNull: true, type: DataType.STRING(4095) })
	declare pdbxDetails?: string;

	@Column({ field: 'pdbx_pH_range', allowNull: true, type: DataType.STRING(80) })
	pdbxPHRange?: string;
}
