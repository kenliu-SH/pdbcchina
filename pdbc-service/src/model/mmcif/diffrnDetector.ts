import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, HasMany, HasOne } from 'sequelize-typescript';
import { diffrn } from './diffrn';
import { entry } from './entry';

@Table({ tableName: 'diffrn_detector', timestamps: false })
export class diffrnDetector extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'diffrn_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	diffrnId!: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare details?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare detector?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare type?: string;

	@Column({ field: 'area_resol_mean', allowNull: true, type: DataType.FLOAT(12) })
	areaResolMean?: number;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	dtime?: number;

	@Column({ field: 'pdbx_frames_total', allowNull: true, type: DataType.INTEGER })
	pdbxFramesTotal?: number;

	@Column({ field: 'pdbx_collection_time_total', allowNull: true, type: DataType.FLOAT(12) })
	pdbxCollectionTimeTotal?: number;

	@Column({ field: 'pdbx_collection_date', allowNull: true, type: DataType.DATE })
	declare pdbxCollectionDate?: Date;

	@HasOne(() => diffrn)
	declare diffrn?: diffrn;
}
