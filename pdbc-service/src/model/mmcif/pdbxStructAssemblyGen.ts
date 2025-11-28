import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_struct_assembly_gen', timestamps: false })
export class pdbxStructAssemblyGen extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare structureId: string;
	@Column({ field: 'assembly_id', allowNull: true, type: DataType.STRING(10) })
	declare assemblyId?: string;
	@Column({ field: 'asym_id_list', allowNull: true, type: DataType.TEXT({ length: 'medium' }) })
	declare asymIdList?: string;
	@Column({ field: 'oper_expression', allowNull: true, type: DataType.STRING(511) })
	declare operExpression?: string;
}
