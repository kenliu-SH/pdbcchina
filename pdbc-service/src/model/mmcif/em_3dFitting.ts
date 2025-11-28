import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_3d_fitting', timestamps: false })
export class em_3dFitting extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;
	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;
	@Column({ field: 'entry_id', allowNull: true, type: DataType.STRING(10) })
	declare entryId?: string;
	@Column({ field: 'method', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'method', using: 'BTREE', order: 'ASC', unique: true })
	declare method: string;
	@Column({ field: 'target_criteria', allowNull: true, type: DataType.STRING(255) })
	declare targetCriteria?: string;
	@Column({ field: 'software_name', allowNull: true, type: DataType.STRING(10) })
	declare softwareName?: string;
	@Column({ field: 'details', allowNull: true, type: DataType.TEXT })
	declare details?: string;
	@Column({ field: 'overall_b_value', allowNull: true, type: DataType.FLOAT })
	declare overallBValue?: number;
	@Column({ field: 'ref_space', allowNull: true, type: DataType.STRING })
	declare refSpace?: string;
	@Column({ field: 'ref_protocol', allowNull: true, type: DataType.STRING })
	declare refProtocol?: string;
}
