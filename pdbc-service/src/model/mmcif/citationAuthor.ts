import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'citation_author', timestamps: false })
export class citationAuthor extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'citation_id', primaryKey: true, type: DataType.STRING(16) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare citationId?: string;

	@Column({ primaryKey: true, type: DataType.STRING(128) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare name: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	ordinal!: number;
}
