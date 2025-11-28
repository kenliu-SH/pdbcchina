import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chemical", timestamps: false })
export class chemical extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "compound_source", allowNull: true, type: DataType.STRING(200) })
    compoundSource?: string;

    @Column({ field: "melting_point", allowNull: true, type: DataType.FLOAT(12) })
    meltingPoint?: number;

    @Column({ field: "name_common", allowNull: true, type: DataType.STRING(200) })
    nameCommon?: string;

    @Column({ field: "name_mineral", allowNull: true, type: DataType.STRING(200) })
    nameMineral?: string;

    @Column({ field: "name_structure_type", allowNull: true, type: DataType.STRING(200) })
    nameStructureType?: string;

    @Column({ field: "name_systematic", allowNull: true, type: DataType.STRING(200) })
    nameSystematic?: string;

    @Column({ field: "absolute_configuration", allowNull: true, type: DataType.STRING(10) })
    absoluteConfiguration?: string;

    @Column({ field: "melting_point_gt", allowNull: true, type: DataType.FLOAT(12) })
    meltingPointGt?: number;

    @Column({ field: "melting_point_lt", allowNull: true, type: DataType.FLOAT(12) })
    meltingPointLt?: number;

    @Column({ field: "optical_rotation", allowNull: true, type: DataType.STRING(80) })
    opticalRotation?: string;

    @Column({ field: "properties_biological", allowNull: true, type: DataType.STRING(200) })
    propertiesBiological?: string;

    @Column({ field: "properties_physical", allowNull: true, type: DataType.STRING(200) })
    propertiesPhysical?: string;

    @Column({ field: "temperature_decomposition", allowNull: true, type: DataType.FLOAT(12) })
    temperatureDecomposition?: number;

    @Column({ field: "temperature_decomposition_esd", allowNull: true, type: DataType.FLOAT(12) })
    temperatureDecompositionEsd?: number;

    @Column({ field: "temperature_decomposition_gt", allowNull: true, type: DataType.FLOAT(12) })
    temperatureDecompositionGt?: number;

    @Column({ field: "temperature_decomposition_lt", allowNull: true, type: DataType.FLOAT(12) })
    temperatureDecompositionLt?: number;

    @Column({ field: "temperature_sublimation", allowNull: true, type: DataType.FLOAT(12) })
    temperatureSublimation?: number;

    @Column({ field: "temperature_sublimation_esd", allowNull: true, type: DataType.FLOAT(12) })
    temperatureSublimationEsd?: number;

    @Column({ field: "temperature_sublimation_gt", allowNull: true, type: DataType.FLOAT(12) })
    temperatureSublimationGt?: number;

    @Column({ field: "temperature_sublimation_lt", allowNull: true, type: DataType.FLOAT(12) })
    temperatureSublimationLt?: number;
}
