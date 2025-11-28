import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_crystal_alignment", timestamps: false })
export class pdbxCrystalAlignment extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ field: "oscillation_range", allowNull: true, type: DataType.FLOAT(12) })
    oscillationRange?: number;

    @Column({ field: "oscillation_start", allowNull: true, type: DataType.FLOAT(12) })
    oscillationStart?: number;

    @Column({ field: "oscillation_end", allowNull: true, type: DataType.FLOAT(12) })
    oscillationEnd?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    xbeam?: number;

    @Column({ field: "xbeam_esd", allowNull: true, type: DataType.FLOAT(12) })
    xbeamEsd?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    ybeam?: number;

    @Column({ field: "ybeam_esd", allowNull: true, type: DataType.FLOAT(12) })
    ybeamEsd?: number;

    @Column({ field: "crysx_spindle", allowNull: true, type: DataType.FLOAT(12) })
    crysxSpindle?: number;

    @Column({ field: "crysx_spindle_esd", allowNull: true, type: DataType.FLOAT(12) })
    crysxSpindleEsd?: number;

    @Column({ field: "crysy_vertical", allowNull: true, type: DataType.FLOAT(12) })
    crysyVertical?: number;

    @Column({ field: "crysy_vertical_esd", allowNull: true, type: DataType.FLOAT(12) })
    crysyVerticalEsd?: number;

    @Column({ field: "crysz_beam", allowNull: true, type: DataType.FLOAT(12) })
    cryszBeam?: number;

    @Column({ field: "crysz_beam_esd", allowNull: true, type: DataType.FLOAT(12) })
    cryszBeamEsd?: number;

    @Column({ field: "crystal_to_detector_distance", allowNull: true, type: DataType.FLOAT(12) })
    crystalToDetectorDistance?: number;

    @Column({ field: "crystal_to_detector_distance_esd", allowNull: true, type: DataType.FLOAT(12) })
    crystalToDetectorDistanceEsd?: number;

    @Column({ field: "crossfire_x", allowNull: true, type: DataType.FLOAT(12) })
    crossfireX?: number;

    @Column({ field: "crossfire_x_esd", allowNull: true, type: DataType.FLOAT(12) })
    crossfireXEsd?: number;

    @Column({ field: "crossfire_y", allowNull: true, type: DataType.FLOAT(12) })
    crossfireY?: number;

    @Column({ field: "crossfire_y_esd", allowNull: true, type: DataType.FLOAT(12) })
    crossfireYEsd?: number;

    @Column({ field: "crossfire_xy", allowNull: true, type: DataType.FLOAT(12) })
    crossfireXy?: number;

    @Column({ field: "crossfire_xy_esd", allowNull: true, type: DataType.FLOAT(12) })
    crossfireXyEsd?: number;
}
