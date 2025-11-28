import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_chem_shift_reference", timestamps: false })
export class pdbxNmrChemShiftReference extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "carbon_shifts_flag", allowNull: true, type: DataType.STRING(80) })
    carbonShiftsFlag?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    label?: string;

    @Column({ field: "nitrogen_shifts_flag", allowNull: true, type: DataType.STRING(80) })
    nitrogenShiftsFlag?: string;

    @Column({ field: "other_shifts_flag", allowNull: true, type: DataType.STRING(80) })
    otherShiftsFlag?: string;

    @Column({ field: "phosphorus_shifts_flag", allowNull: true, type: DataType.STRING(80) })
    phosphorusShiftsFlag?: string;

    @Column({ field: "proton_shifts_flag", allowNull: true, type: DataType.STRING(80) })
    protonShiftsFlag?: string;
}
