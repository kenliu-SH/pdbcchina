import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_map", timestamps: false })
export class emMap extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "annotation_details", allowNull: true, type: DataType.STRING(200) })
    annotationDetails?: string;

    @Column({ field: "axis_order_fast", allowNull: true, type: DataType.STRING(10) })
    axisOrderFast?: string;

    @Column({ field: "axis_order_medium", allowNull: true, type: DataType.STRING(10) })
    axisOrderMedium?: string;

    @Column({ field: "axis_order_slow", allowNull: true, type: DataType.STRING(10) })
    axisOrderSlow?: string;

    @Column({ field: "cell_a", allowNull: true, type: DataType.FLOAT(12) })
    cellA?: number;

    @Column({ field: "cell_b", allowNull: true, type: DataType.FLOAT(12) })
    cellB?: number;

    @Column({ field: "cell_c", allowNull: true, type: DataType.FLOAT(12) })
    cellC?: number;

    @Column({ field: "cell_alpha", allowNull: true, type: DataType.FLOAT(12) })
    cellAlpha?: number;

    @Column({ field: "cell_beta", allowNull: true, type: DataType.FLOAT(12) })
    cellBeta?: number;

    @Column({ field: "cell_gamma", allowNull: true, type: DataType.FLOAT(12) })
    cellGamma?: number;

    @Column({ field: "contour_level", allowNull: true, type: DataType.FLOAT(12) })
    contourLevel?: number;

    @Column({ field: "contour_level_source", allowNull: true, type: DataType.STRING(80) })
    contourLevelSource?: string;

    @Column({ field: "data_type", allowNull: true, type: DataType.STRING(80) })
    dataType?: string;

    @Column({ field: "dimensions_col", allowNull: true, type: DataType.INTEGER })
    dimensionsCol?: number;

    @Column({ field: "dimensions_row", allowNull: true, type: DataType.INTEGER })
    dimensionsRow?: number;

    @Column({ field: "dimensions_sec", allowNull: true, type: DataType.INTEGER })
    dimensionsSec?: number;

    @Column({ field: "endian_type", allowNull: true, type: DataType.STRING(10) })
    endianType?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    file?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    format?: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    partition1?: number;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    label?: string;

    @Column({ field: "limit_col", allowNull: true, type: DataType.INTEGER })
    limitCol?: number;

    @Column({ field: "limit_row", allowNull: true, type: DataType.INTEGER })
    limitRow?: number;

    @Column({ field: "limit_sec", allowNull: true, type: DataType.INTEGER })
    limitSec?: number;

    @Column({ field: "origin_col", allowNull: true, type: DataType.INTEGER })
    originCol?: number;

    @Column({ field: "origin_row", allowNull: true, type: DataType.INTEGER })
    originRow?: number;

    @Column({ field: "origin_sec", allowNull: true, type: DataType.INTEGER })
    originSec?: number;

    @Column({ field: "pixel_spacing_x", allowNull: true, type: DataType.FLOAT(12) })
    pixelSpacingX?: number;

    @Column({ field: "pixel_spacing_y", allowNull: true, type: DataType.FLOAT(12) })
    pixelSpacingY?: number;

    @Column({ field: "pixel_spacing_z", allowNull: true, type: DataType.FLOAT(12) })
    pixelSpacingZ?: number;

    @Column({ field: "size_kb", allowNull: true, type: DataType.INTEGER })
    sizeKb?: number;

    @Column({ field: "spacing_x", allowNull: true, type: DataType.INTEGER })
    spacingX?: number;

    @Column({ field: "spacing_y", allowNull: true, type: DataType.INTEGER })
    spacingY?: number;

    @Column({ field: "spacing_z", allowNull: true, type: DataType.INTEGER })
    spacingZ?: number;

    @Column({ field: "statistics_average", allowNull: true, type: DataType.FLOAT(12) })
    statisticsAverage?: number;

    @Column({ field: "statistics_maximum", allowNull: true, type: DataType.FLOAT(12) })
    statisticsMaximum?: number;

    @Column({ field: "statistics_minimum", allowNull: true, type: DataType.FLOAT(12) })
    statisticsMinimum?: number;

    @Column({ field: "statistics_std", allowNull: true, type: DataType.FLOAT(12) })
    statisticsStd?: number;

    @Column({ field: "symmetry_space_group", allowNull: true, type: DataType.STRING(80) })
    symmetrySpaceGroup?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;
}
