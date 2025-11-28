import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_focused_ion_beam", timestamps: false })
export class emFocusedIonBeam extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    current?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "dose_rate", allowNull: true, type: DataType.INTEGER })
    doseRate?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    duration?: number;

    @Column({ field: "em_tomography_specimen_id", allowNull: true, type: DataType.STRING(10) })
    emTomographySpecimenId?: string;

    @Column({ field: "final_thickness", allowNull: true, type: DataType.INTEGER })
    finalThickness?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "initial_thickness", allowNull: true, type: DataType.INTEGER })
    initialThickness?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    instrument?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    ion?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    temperature?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    voltage?: number;
}
