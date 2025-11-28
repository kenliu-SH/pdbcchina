import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_exptl_crystal_cryo_treatment", timestamps: false })
export class pdbxExptlCrystalCryoTreatment extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ field: "final_solution_details", allowNull: true, type: DataType.STRING(200) })
    finalSolutionDetails?: string;

    @Column({ field: "soaking_details", allowNull: true, type: DataType.STRING(511) })
    soakingDetails?: string;

    @Column({ field: "cooling_details", allowNull: true, type: DataType.STRING(200) })
    coolingDetails?: string;

    @Column({ field: "annealing_details", allowNull: true, type: DataType.STRING(200) })
    annealingDetails?: string;
}
