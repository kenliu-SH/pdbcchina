import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_assembly", timestamps: false })
export class emAssembly extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ field: "aggregation_state", allowNull: true, type: DataType.STRING(80) })
    aggregationState?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    composition?: string;

    @Column({ field: "num_components", allowNull: true, type: DataType.INTEGER })
    numComponents?: number;

    @Column({ field: "mol_wt_exp", allowNull: true, type: DataType.FLOAT(12) })
    molWtExp?: number;

    @Column({ field: "mol_wt_theo", allowNull: true, type: DataType.FLOAT(12) })
    molWtTheo?: number;

    @Column({ field: "mol_wt_method", allowNull: true, type: DataType.STRING(200) })
    molWtMethod?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
