import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_poly_domain", timestamps: false })
export class pdbxEntityPolyDomain extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "begin_mon_id", allowNull: true, type: DataType.STRING(10) })
    beginMonId?: string;

    @Column({ field: "begin_seq_num", allowNull: true, type: DataType.INTEGER })
    beginSeqNum?: number;

    @Column({ field: "end_mon_id", allowNull: true, type: DataType.STRING(10) })
    endMonId?: string;

    @Column({ field: "end_seq_num", allowNull: true, type: DataType.INTEGER })
    endSeqNum?: number;
}
