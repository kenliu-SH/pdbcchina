import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_assembly_gen_depositor_info", timestamps: false })
export class pdbxStructAssemblyGenDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "asym_id_list", allowNull: true, type: DataType.STRING(80) })
    asymIdList?: string;

    @Column({ field: "assembly_id", allowNull: true, type: DataType.STRING(80) })
    assemblyId?: string;

    @Column({ field: "oper_expression", allowNull: true, type: DataType.STRING(30) })
    operExpression?: string;

    @Column({ field: "full_matrices", allowNull: true, type: DataType.STRING(10) })
    fullMatrices?: string;

    @Column({ field: "symmetry_operation", allowNull: true, type: DataType.STRING(80) })
    symmetryOperation?: string;

    @Column({ field: "at_unit_matrix", allowNull: true, type: DataType.STRING(2) })
    atUnitMatrix?: string;

    @Column({ field: "chain_id_list", allowNull: true, type: DataType.STRING(100) })
    chainIdList?: string;

    @Column({ field: "all_chains", allowNull: true, type: DataType.STRING(2) })
    allChains?: string;

    @Column({ field: "helical_rotation", allowNull: true, type: DataType.FLOAT(12) })
    helicalRotation?: number;

    @Column({ field: "helical_rise", allowNull: true, type: DataType.FLOAT(12) })
    helicalRise?: number;
}
