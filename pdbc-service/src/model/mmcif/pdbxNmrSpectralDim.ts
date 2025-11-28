import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_spectral_dim", timestamps: false })
export class pdbxNmrSpectralDim extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "atom_type", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomType!: string;

    @Column({ field: "atom_isotope_number", allowNull: true, type: DataType.INTEGER })
    atomIsotopeNumber?: number;

    @Column({ field: "spectral_region", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    spectralRegion!: string;

    @Column({ field: "magnetization_linkage_id", allowNull: true, type: DataType.INTEGER })
    magnetizationLinkageId?: number;

    @Column({ field: "sweep_width", allowNull: true, type: DataType.FLOAT(12) })
    sweepWidth?: number;

    @Column({ field: "encoding_code", allowNull: true, type: DataType.STRING(80) })
    encodingCode?: string;

    @Column({ field: "encoded_source_dimension_id", allowNull: true, type: DataType.INTEGER })
    encodedSourceDimensionId?: number;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "spectral_peak_list_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    spectralPeakListId!: number;

    @Column({ field: "sweep_width_units", allowNull: true, type: DataType.STRING(10) })
    sweepWidthUnits?: string;

    @Column({ field: "center_frequency_offset", allowNull: true, type: DataType.FLOAT(12) })
    centerFrequencyOffset?: number;

    @Column({ field: "under_sampling_type", allowNull: true, type: DataType.STRING(80) })
    underSamplingType?: string;
}
