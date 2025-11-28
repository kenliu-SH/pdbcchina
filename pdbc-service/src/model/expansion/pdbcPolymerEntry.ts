import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from '../shared/base';

@Table({ tableName: 'pdbc_polymer_entry', timestamps: true })
export class PdbcPolymerEntry extends BaseModel<PdbcPolymerEntry> {
	@Column({
		comment: '结构id',
		type: DataType.STRING(10),
		allowNull: false,
		field: 'Structure_ID',
	})
	declare structureId: string;

	@Column({
		comment: '实体id',
		type: DataType.STRING,
		allowNull: true,
	})
	declare entityId: string;

	@Column({
		comment: '实体id2',
		type: DataType.STRING,
		allowNull: true,
	})
	declare prdId: string;

	@Column({
		comment: '类型',
		type: DataType.STRING(255),
	})
	declare type: string;

	@Column({
		comment: '分子',
		type: DataType.STRING(255),
	})
	declare molecule: string;

	@Column({
		comment: '链',
		type: DataType.JSON,
	})
	declare chains: string[];

	@Column({
		comment: '序列长度',
		type: DataType.INTEGER,
	})
	declare sequenceLength: number;

	@Column({
		comment: '分子量',
		type: DataType.FLOAT,
	})
	declare molecularWeight: number;

	@Column({
		comment: '学名',
		type: DataType.JSON,
	})
	declare organism: string[];

	@Column({
		comment: '突变',
		type: DataType.INTEGER,
	})
	declare mutation: number;

	@Column({
		comment: '基因名',
		type: DataType.JSON,
	})
	declare geneNames: string[];

	@Column({
		comment: 'UniProt',
		type: DataType.STRING(255),
	})
	declare uniProt: string;
	// ec
	@Column({
		comment: 'EC',
		type: DataType.STRING(255),
	})
	declare ec: string;

	// uniprotOrganism
	@Column({
		comment: 'uniprotOrganism',
		type: DataType.STRING(255),
	})
	declare uniprotOrganism: string;

	// auth
	@Column({
		comment: 'auths',
		type: DataType.JSON,
	})
	declare auths: string[];

	// name
	@Column({
		comment: 'name',
		type: DataType.STRING(255),
	})
	declare name: string;

	// class
	@Column({
		comment: 'class',
		type: DataType.STRING(255),
	})
	declare class: string;

	// proteinFeatureView
	@Column({
		comment: '蛋白质视图proteinFeatureView',
		type: DataType.JSON,
	})
	declare proteinFeatureView: any;

	// showType
	@Column({
		comment: 'showType',
		type: DataType.STRING(255),
	})
	declare showType: string;
}
