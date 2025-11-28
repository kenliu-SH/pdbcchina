import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_final_classification", timestamps: false })
export class emFinalClassification extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "avg_num_images_per_class", allowNull: true, type: DataType.INTEGER })
    avgNumImagesPerClass?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "image_processing_id", allowNull: true, type: DataType.STRING(10) })
    imageProcessingId?: string;

    @Column({ field: "num_classes", allowNull: true, type: DataType.INTEGER })
    numClasses?: number;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    type?: string;
}
