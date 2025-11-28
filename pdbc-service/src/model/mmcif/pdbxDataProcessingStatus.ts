import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_data_processing_status", timestamps: false })
export class pdbxDataProcessingStatus extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "task_name", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    taskName!: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    status!: string;
}
