import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_volume_selection", timestamps: false })
export class emVolumeSelection extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "image_processing_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    imageProcessingId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;

    @Column({ field: "num_tomograms", allowNull: true, type: DataType.INTEGER })
    numTomograms?: number;

    @Column({ field: "num_volumes_extracted", allowNull: true, type: DataType.INTEGER })
    numVolumesExtracted?: number;

    @Column({ field: "reference_model", allowNull: true, type: DataType.STRING(200) })
    referenceModel?: string;
}
