import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_mon_details", timestamps: false })
export class structMonDetails extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "prot_cis", allowNull: true, type: DataType.FLOAT(12) })
    protCis?: number;

    @Column({ field: "RSCC", allowNull: true, type: DataType.STRING(200) })
    rscc?: string;

    @Column({ field: "RSR", allowNull: true, type: DataType.STRING(200) })
    rsr?: string;
}
