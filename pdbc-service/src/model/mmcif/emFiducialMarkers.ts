import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_fiducial_markers", timestamps: false })
export class emFiducialMarkers extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    diameter?: number;

    @Column({ field: "em_tomography_specimen_id", allowNull: true, type: DataType.STRING(10) })
    emTomographySpecimenId?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    manufacturer?: string;
}
