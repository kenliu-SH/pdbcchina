import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_embedding', timestamps: false })
export class emEmbedding extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare material?: string;

	@Column({ field: 'specimen_id', allowNull: true, type: DataType.STRING(10) })
	specimenId?: string;
}
