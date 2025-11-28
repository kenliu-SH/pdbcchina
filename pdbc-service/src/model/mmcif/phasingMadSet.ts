import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MAD_set", timestamps: false })
export class phasingMadSet extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "clust_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    clustId!: string;

    @Column({ field: "expt_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    exptId!: string;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "f_double_prime", allowNull: true, type: DataType.FLOAT(12) })
    fDoublePrime?: number;

    @Column({ field: "f_prime", allowNull: true, type: DataType.FLOAT(12) })
    fPrime?: number;

    @Column({ field: "set_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    setId!: string;

    @Column({ primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    wavelength!: number;

    @Column({ field: "wavelength_details", allowNull: true, type: DataType.STRING(200) })
    wavelengthDetails?: string;

    @Column({ field: "pdbx_atom_type", allowNull: true, type: DataType.STRING(10) })
    pdbxAtomType?: string;

    @Column({ field: "pdbx_f_prime_refined", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFPrimeRefined?: number;

    @Column({ field: "pdbx_f_double_prime_refined", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFDoublePrimeRefined?: number;
}
