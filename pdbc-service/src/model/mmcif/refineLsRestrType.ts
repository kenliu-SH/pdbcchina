import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_ls_restr_type", timestamps: false })
export class refineLsRestrType extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    type!: string;

    @Column({ field: "distance_cutoff_high", allowNull: true, type: DataType.FLOAT(12) })
    distanceCutoffHigh?: number;

    @Column({ field: "distance_cutoff_low", allowNull: true, type: DataType.FLOAT(12) })
    distanceCutoffLow?: number;
}
