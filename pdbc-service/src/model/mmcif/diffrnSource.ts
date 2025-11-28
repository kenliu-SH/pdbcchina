import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'diffrn_source', timestamps: false })
export class diffrnSource extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'diffrn_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare diffrnId: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	current?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	details?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	power?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	size?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare source?: string;

	@Column({ allowNull: true, type: DataType.STRING(10) })
	target?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare type?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	voltage?: number;

	@Column({ field: 'take_off_angle', allowNull: true, type: DataType.FLOAT(12) })
	takeOffAngle?: number;

	@Column({ field: 'pdbx_wavelength_list', allowNull: true, type: DataType.STRING(80) })
	declare pdbxWavelengthList?: string;

	@Column({ field: 'pdbx_wavelength', allowNull: true, type: DataType.STRING(80) })
	pdbxWavelength?: string;

	@Column({ field: 'pdbx_synchrotron_beamline', allowNull: true, type: DataType.STRING(80) })
	declare pdbxSynchrotronBeamline?: string;

	@Column({ field: 'pdbx_synchrotron_site', allowNull: true, type: DataType.STRING(80) })
	declare pdbxSynchrotronSite?: string;

	@Column({ field: 'pdbx_synchrotron_y_n', allowNull: true, type: DataType.STRING(200) })
	pdbxSynchrotronYN?: string;

	@Column({ field: 'pdbx_source_specific_beamline', allowNull: true, type: DataType.STRING(200) })
	pdbxSourceSpecificBeamline?: string;
}
