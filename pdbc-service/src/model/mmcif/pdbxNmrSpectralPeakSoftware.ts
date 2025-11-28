import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_spectral_peak_software", timestamps: false })
export class pdbxNmrSpectralPeakSoftware extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "spectral_peak_list_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    spectralPeakListId!: number;

    @Column({ field: "software_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    softwareId!: number;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;
}
