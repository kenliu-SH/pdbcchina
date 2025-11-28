import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_imaging_optics", timestamps: false })
export class emImagingOptics extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "chr_aberration_corrector", allowNull: true, type: DataType.STRING(200) })
    chrAberrationCorrector?: string;

    @Column({ field: "energyfilter_lower", allowNull: true, type: DataType.STRING(80) })
    energyfilterLower?: string;

    @Column({ field: "energyfilter_name", allowNull: true, type: DataType.STRING(80) })
    energyfilterName?: string;

    @Column({ field: "energyfilter_upper", allowNull: true, type: DataType.STRING(80) })
    energyfilterUpper?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "imaging_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    imagingId!: string;

    @Column({ field: "phase_plate", allowNull: true, type: DataType.STRING(200) })
    phasePlate?: string;

    @Column({ field: "sph_aberration_corrector", allowNull: true, type: DataType.STRING(200) })
    sphAberrationCorrector?: string;
}
