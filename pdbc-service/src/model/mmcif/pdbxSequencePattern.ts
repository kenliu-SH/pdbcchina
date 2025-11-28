import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_sequence_pattern", timestamps: false })
export class pdbxSequencePattern extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelAsymId!: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "pattern_count", allowNull: true, type: DataType.INTEGER })
    patternCount?: number;

    @Column({ field: "sequence_pattern", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    sequencePattern!: string;
}
