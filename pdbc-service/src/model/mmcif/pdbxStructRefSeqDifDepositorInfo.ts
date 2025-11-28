import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_ref_seq_dif_depositor_info", timestamps: false })
export class pdbxStructRefSeqDifDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "ref_id", allowNull: true, type: DataType.STRING(10) })
    refId?: string;

    @Column({ field: "entity_id", allowNull: true, type: DataType.STRING(10) })
    entityId?: string;

    @Column({ field: "db_mon_id", allowNull: true, type: DataType.STRING(10) })
    dbMonId?: string;

    @Column({ field: "db_seq_id", allowNull: true, type: DataType.INTEGER })
    dbSeqId?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "auth_mon_id", allowNull: true, type: DataType.STRING(10) })
    authMonId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.INTEGER })
    authSeqId?: number;

    @Column({ field: "db_accession", allowNull: true, type: DataType.STRING(10) })
    dbAccession?: string;

    @Column({ field: "db_code", allowNull: true, type: DataType.STRING(80) })
    dbCode?: string;

    @Column({ field: "db_name", allowNull: true, type: DataType.STRING(80) })
    dbName?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    annotation?: string;
}
