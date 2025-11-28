import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_spectrometer', timestamps: false })
export class pdbxNmrSpectrometer extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'spectrometer_id', primaryKey: true, type: DataType.STRING(17) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare spectrometerId?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare model?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare type?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare manufacturer?: string;

	@Column({ field: 'field_strength', allowNull: true, type: DataType.FLOAT(12) })
	declare fieldStrength?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare name?: string;
}
