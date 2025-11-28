import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'struct', timestamps: false })
export class struct extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare title?: string;

	@Column({ field: 'pdbx_descriptor', allowNull: true, type: DataType.STRING(4095) })
	declare pdbxDescriptor?: string;

	@Column({ field: 'pdbx_model_details', allowNull: true, type: DataType.STRING(1023) })
	declare pdbxModelDetails?: string;

	@Column({ field: 'pdbx_formula_weight', allowNull: true, type: DataType.FLOAT(12) })
	pdbxFormulaWeight?: number;

	@Column({ field: 'pdbx_formula_weight_method', allowNull: true, type: DataType.STRING(80) })
	pdbxFormulaWeightMethod?: string;

	@Column({ field: 'pdbx_model_type_details', allowNull: true, type: DataType.STRING(255) })
	pdbxModelTypeDetails?: string;

	@Column({ field: 'pdbx_CASP_flag', allowNull: true, type: DataType.STRING(2) })
	pdbxCaspFlag?: string;

	@Column({ field: 'pdbx_details', allowNull: true, type: DataType.STRING(200) })
	pdbxDetails?: string;

	@Column({ field: 'pdbx_title_text', allowNull: true, type: DataType.STRING(200) })
	pdbxTitleText?: string;
}
