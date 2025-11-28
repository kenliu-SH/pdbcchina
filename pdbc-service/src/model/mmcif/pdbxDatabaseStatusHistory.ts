import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_database_status_history", timestamps: false })
export class pdbxDatabaseStatusHistory extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: string;

    @Column({ field: "date_begin", allowNull: true, type: DataType.DATE })
    dateBegin?: Date;

    @Column({ field: "date_end", allowNull: true, type: DataType.DATE })
    dateEnd?: Date;

    @Column({ field: "status_code", allowNull: true, type: DataType.STRING(10) })
    statusCode?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
