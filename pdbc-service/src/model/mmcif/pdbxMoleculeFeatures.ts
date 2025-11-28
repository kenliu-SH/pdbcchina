import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_molecule_features', timestamps: false })
export class pdbxMoleculeFeatures extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'prd_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare prdId: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare class?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare type?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare name?: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	declare details?: string;
}
