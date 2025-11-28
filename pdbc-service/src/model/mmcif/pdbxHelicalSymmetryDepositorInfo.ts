import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_helical_symmetry_depositor_info", timestamps: false })
export class pdbxHelicalSymmetryDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "number_of_operations", allowNull: true, type: DataType.INTEGER })
    numberOfOperations?: number;

    @Column({ field: "rotation_per_n_subunits", allowNull: true, type: DataType.FLOAT(12) })
    rotationPerNSubunits?: number;

    @Column({ field: "rise_per_n_subunits", allowNull: true, type: DataType.FLOAT(12) })
    risePerNSubunits?: number;

    @Column({ field: "n_subunits_divisor", allowNull: true, type: DataType.INTEGER })
    nSubunitsDivisor?: number;

    @Column({ field: "dyad_axis", allowNull: true, type: DataType.STRING(10) })
    dyadAxis?: string;

    @Column({ field: "circular_symmetry", allowNull: true, type: DataType.INTEGER })
    circularSymmetry?: number;

    @Column({ field: "status_flag", allowNull: true, type: DataType.STRING(10) })
    statusFlag?: string;
}
