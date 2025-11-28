import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_systematic_chem_shift_offset", timestamps: false })
export class pdbxNmrSystematicChemShiftOffset extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "assigned_chem_shift_list_id", allowNull: true, type: DataType.INTEGER })
    assignedChemShiftListId?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ field: "atom_type", allowNull: true, type: DataType.STRING(80) })
    atomType?: string;

    @Column({ field: "atom_isotope_number", allowNull: true, type: DataType.INTEGER })
    atomIsotopeNumber?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    val?: number;

    @Column({ field: "val_err", allowNull: true, type: DataType.FLOAT(12) })
    valErr?: number;

    @Column({ field: "entry_id", allowNull: true, type: DataType.STRING(10) })
    entryId?: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;
}
