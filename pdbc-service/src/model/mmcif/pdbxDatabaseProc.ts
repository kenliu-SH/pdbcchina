import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_database_proc", timestamps: false })
export class pdbxDatabaseProc extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "cycle_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    cycleId!: string;

    @Column({ field: "date_begin_cycle", allowNull: true, type: DataType.DATE })
    dateBeginCycle?: Date;

    @Column({ field: "date_end_cycle", allowNull: true, type: DataType.DATE })
    dateEndCycle?: Date;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
