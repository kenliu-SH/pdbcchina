import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_soln_scatter_model', timestamps: false })
export class pdbxSolnScatterModel extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'scatter_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	scatterId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	declare details?: string;

	@Column({ allowNull: true, type: DataType.STRING(255) })
	declare method?: string;

	@Column({ field: 'software_list', allowNull: true, type: DataType.STRING(200) })
	declare softwareList?: string;

	@Column({ field: 'software_author_list', allowNull: true, type: DataType.STRING(200) })
	declare softwareAuthorList?: string;

	@Column({ field: 'entry_fitting_list', allowNull: true, type: DataType.STRING(200) })
	declare entryFittingList?: string;

	@Column({ field: 'num_conformers_calculated', allowNull: true, type: DataType.INTEGER })
	declare numConformersCalculated?: number;

	@Column({ field: 'num_conformers_submitted', allowNull: true, type: DataType.INTEGER })
	declare numConformersSubmitted?: number;

	@Column({ field: 'representative_conformer', allowNull: true, type: DataType.INTEGER })
	declare representativeConformer?: number;

	@Column({ field: 'conformer_selection_criteria', allowNull: true, type: DataType.STRING(1023) })
	declare conformerSelectionCriteria?: string;
}
