import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_chem_shift_experiment", timestamps: false })
export class pdbxNmrChemShiftExperiment extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "assigned_chem_shift_list_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    assignedChemShiftListId!: number;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "experiment_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    experimentId!: number;

    @Column({ field: "experiment_name", allowNull: true, type: DataType.STRING(80) })
    experimentName?: string;

    @Column({ field: "sample_state", allowNull: true, type: DataType.STRING(80) })
    sampleState?: string;

    @Column({ field: "solution_id", allowNull: true, type: DataType.INTEGER })
    solutionId?: number;
}
