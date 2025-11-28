import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from '../shared/base';
@Table({ tableName: 'pdbc_modified_residues_entity', timestamps: true })
export class PdbcModifiedResiduesEntity extends BaseModel<PdbcModifiedResiduesEntity> {
	@Column({
		comment: '结构id',
		type: DataType.STRING(10),
		allowNull: false,
		field: 'Structure_ID',
	})
	declare structureId: string;

	@Column({
		comment: '实体id',
		type: DataType.STRING(10),
		allowNull: false,
	})
	declare entityId: string;

	@Column({
		comment: '标签',
		type: DataType.STRING(255),
	})
	declare tag: string;

	@Column({
		comment: '链',
		type: DataType.JSON,
	})
	declare chains: any;

	// auths
	@Column({
		comment: 'auths',
		type: DataType.JSON,
	})
	declare auths: any;

	@Column({
		comment: '名称',
		type: DataType.STRING(255),
	})
	declare name: string;

	@Column({
		comment: '分子式',
		type: DataType.STRING(255),
	})
	declare formula: string;

	@Column({
		comment: '父级',
		type: DataType.STRING(255),
	})
	declare parent: string;

	// 类型
	@Column({
		comment: '类型',
		type: DataType.STRING(255),
	})
	declare type: string;
}
