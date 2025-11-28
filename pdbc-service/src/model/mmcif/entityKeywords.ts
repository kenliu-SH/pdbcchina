import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'entity_keywords', timestamps: false })
export class entityKeywords extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entityId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare text?: string;

	@Column({ field: 'pdbx_mutation', allowNull: true, type: DataType.STRING(80) })
	declare pdbxMutation?: string;

	@Column({ field: 'pdbx_fragment', allowNull: true, type: DataType.STRING(80) })
	declarepdbxFragment?: string;

	@Column({ field: 'pdbx_ec', allowNull: true, type: DataType.STRING(80) })
	declare pdbxEc?: string;

	@Column({ field: 'pdbx_antibody_isotype', allowNull: true, type: DataType.STRING(200) })
	declare pdbxAntibodyIsotype?: string;
}
