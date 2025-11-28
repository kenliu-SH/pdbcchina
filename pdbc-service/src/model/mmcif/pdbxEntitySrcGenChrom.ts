import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_chrom", timestamps: false })
export class pdbxEntitySrcGenChrom extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "step_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    stepId!: number;

    @Column({ field: "next_step_id", allowNull: true, type: DataType.INTEGER })
    nextStepId?: number;

    @Column({ field: "end_construct_id", allowNull: true, type: DataType.STRING(10) })
    endConstructId?: string;

    @Column({ field: "robot_id", allowNull: true, type: DataType.STRING(10) })
    robotId?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "column_type", allowNull: true, type: DataType.STRING(200) })
    columnType?: string;

    @Column({ field: "column_volume", allowNull: true, type: DataType.FLOAT(12) })
    columnVolume?: number;

    @Column({ field: "column_temperature", allowNull: true, type: DataType.FLOAT(12) })
    columnTemperature?: number;

    @Column({ field: "equilibration_buffer_id", allowNull: true, type: DataType.STRING(10) })
    equilibrationBufferId?: string;

    @Column({ field: "flow_rate", allowNull: true, type: DataType.FLOAT(12) })
    flowRate?: number;

    @Column({ field: "elution_buffer_id", allowNull: true, type: DataType.STRING(10) })
    elutionBufferId?: string;

    @Column({ field: "elution_protocol", allowNull: true, type: DataType.STRING(200) })
    elutionProtocol?: string;

    @Column({ field: "sample_prep_details", allowNull: true, type: DataType.STRING(200) })
    samplePrepDetails?: string;

    @Column({ field: "sample_volume", allowNull: true, type: DataType.FLOAT(12) })
    sampleVolume?: number;

    @Column({ field: "sample_concentration", allowNull: true, type: DataType.FLOAT(12) })
    sampleConcentration?: number;

    @Column({ field: "sample_conc_method", allowNull: true, type: DataType.STRING(200) })
    sampleConcMethod?: string;

    @Column({ field: "volume_pooled_fractions", allowNull: true, type: DataType.FLOAT(12) })
    volumePooledFractions?: number;

    @Column({ field: "yield_pooled_fractions", allowNull: true, type: DataType.FLOAT(12) })
    yieldPooledFractions?: number;

    @Column({ field: "yield_method", allowNull: true, type: DataType.STRING(200) })
    yieldMethod?: string;

    @Column({ field: "post_treatment", allowNull: true, type: DataType.STRING(200) })
    postTreatment?: string;
}
