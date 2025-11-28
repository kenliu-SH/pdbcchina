import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_depui_entity_status_flags", timestamps: false })
export class pdbxDepuiEntityStatusFlags extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "dep_dataset_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    depDatasetId!: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "has_mutation", allowNull: true, type: DataType.STRING(10) })
    hasMutation?: string;

    @Column({ field: "sample_xyz_sequence_alignments_valid", allowNull: true, type: DataType.STRING(200) })
    sampleXyzSequenceAlignmentsValdeclareId?: string;
}
