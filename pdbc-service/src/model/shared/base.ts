import { Model, PrimaryKey, AutoIncrement, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { findPagination } from './method';

export class BaseModel<T> extends Model<T> {
	@PrimaryKey
	@AutoIncrement
	@Column
	declare id: number;

	@CreatedAt
	@Column
	declare createdAt: Date;

	@UpdatedAt
	@Column
	declare updatedAt: Date;

	// methods
	// ------------------------------------------------
	static findPagination = findPagination;
}
