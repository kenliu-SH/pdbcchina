import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_post_process_details", timestamps: false })
export class pdbxPostProcessDetails extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    text?: string;

    @Column({ field: "seq_details", allowNull: true, type: DataType.STRING(200) })
    seqDetails?: string;
}
