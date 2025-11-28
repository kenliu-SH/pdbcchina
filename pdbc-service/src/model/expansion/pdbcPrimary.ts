import { Column, DataType, Index, Table } from 'sequelize-typescript';
import { BaseModel } from '../shared/base';

@Table({ tableName: 'pdbc_primary', timestamps: true })
export class PdbcPrimary extends BaseModel<PdbcPrimary> {
	@Column({
		comment: '结构ID',
		type: DataType.STRING(10),
		allowNull: false,
		field: 'Structure_ID',
	})
	declare structureId: string;

	// primary 年份
	@Column({
		comment: '年份',
		type: DataType.INTEGER,
	})
	declare year: number;

	// journal_abbrev 期刊缩写
	@Column({
		comment: '期刊缩写',
		type: DataType.STRING(255),
		field: 'journal_abbrev',
	})
	declare journalAbbrev: string;
}
