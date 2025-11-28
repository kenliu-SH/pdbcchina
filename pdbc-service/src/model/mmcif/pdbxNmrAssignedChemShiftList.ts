import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_assigned_chem_shift_list", timestamps: false })
export class pdbxNmrAssignedChemShiftList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "chem_shift_13C_err", allowNull: true, type: DataType.FLOAT(12) })
    chemShift_13CErr?: number;

    @Column({ field: "chem_shift_15N_err", allowNull: true, type: DataType.FLOAT(12) })
    chemShift_15NErr?: number;

    @Column({ field: "chem_shift_19F_err", allowNull: true, type: DataType.FLOAT(12) })
    chemShift_19FErr?: number;

    @Column({ field: "chem_shift_1H_err", allowNull: true, type: DataType.FLOAT(12) })
    chemShift_1HErr?: number;

    @Column({ field: "chem_shift_2H_err", allowNull: true, type: DataType.FLOAT(12) })
    chemShift_2HErr?: number;

    @Column({ field: "chem_shift_31P_err", allowNull: true, type: DataType.FLOAT(12) })
    chemShift_31PErr?: number;

    @Column({ field: "chem_shift_reference_id", allowNull: true, type: DataType.INTEGER })
    chemShiftReferenceId?: number;

    @Column({ field: "conditions_id", allowNull: true, type: DataType.INTEGER })
    conditionsId?: number;

    @Column({ field: "data_file_name", allowNull: true, type: DataType.STRING(80) })
    dataFileName?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "error_derivation_method", allowNull: true, type: DataType.STRING(200) })
    errorDerivationMethod?: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    label?: string;

    @Column({ field: "conditions_label", allowNull: true, type: DataType.STRING(80) })
    conditionsLabel?: string;
}
