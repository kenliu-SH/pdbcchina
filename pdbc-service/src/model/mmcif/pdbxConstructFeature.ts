import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_construct_feature", timestamps: false })
export class pdbxConstructFeature extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "construct_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    constructId!: string;

    @Column({ field: "entry_id", allowNull: true, type: DataType.STRING(10) })
    entryId?: string;

    @Column({ field: "start_seq", allowNull: true, type: DataType.INTEGER })
    startSeq?: number;

    @Column({ field: "end_seq", allowNull: true, type: DataType.INTEGER })
    endSeq?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
