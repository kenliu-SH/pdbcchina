import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_ref_seq_deletion", timestamps: false })
export class pdbxStructRefSeqDeletion extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "asym_id", allowNull: true, type: DataType.STRING(10) })
    asymId?: string;

    @Column({ field: "comp_id", allowNull: true, type: DataType.STRING(10) })
    compId?: string;

    @Column({ field: "db_seq_id", allowNull: true, type: DataType.INTEGER })
    dbSeqId?: number;

    @Column({ field: "db_code", allowNull: true, type: DataType.STRING(80) })
    dbCode?: string;

    @Column({ field: "db_name", allowNull: true, type: DataType.STRING(80) })
    dbName?: string;
}
