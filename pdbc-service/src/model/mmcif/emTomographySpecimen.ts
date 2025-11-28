import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_tomography_specimen", timestamps: false })
export class emTomographySpecimen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "cryo_protectant", allowNull: true, type: DataType.STRING(80) })
    cryoProtectant?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "fiducial_markers", allowNull: true, type: DataType.STRING(10) })
    fiducialMarkers?: string;

    @Column({ field: "high_pressure_freezing", allowNull: true, type: DataType.STRING(10) })
    highPressureFreezing?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    sectioning?: string;

    @Column({ field: "specimen_id", allowNull: true, type: DataType.STRING(10) })
    specimenId?: string;
}
