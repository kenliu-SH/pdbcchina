import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from '../shared/base';

/**
 * 链（小分子）
 */
@Table({ tableName: 'pdbc_ligand_entity', timestamps: true })
export class PdbcLigandEntity extends BaseModel<PdbcLigandEntity> {
	@Column({
		comment: '结构ID',
		type: DataType.STRING(10),
		allowNull: false,
		field: 'Structure_ID',
	})
	declare structureId: string;

	@Column({
		comment: '实体id',
		type: DataType.STRING(255),
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

	@Column({
		comment: '名称',
		type: DataType.STRING(255),
	})
	declare name: string;

	// auths
	@Column({
		comment: 'auths',
		type: DataType.JSON,
	})
	declare auths: any;

	@Column({
		comment: '分子式',
		type: DataType.STRING(255),
	})
	declare formula: string;

	@Column({
		comment: 'InChIKey',
		type: DataType.STRING(255),
	})
	declare inchiKey: string;

	// type
	@Column({
		comment: '类型',
		type: DataType.STRING(255),
	})
	declare type: string;
}
