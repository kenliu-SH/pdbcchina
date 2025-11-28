import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_depositor_info", timestamps: false })
export class emDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "em_method_selection", allowNull: true, type: DataType.STRING(80) })
    emMethodSelection?: string;

    @Column({ field: "molecular_description_flag", allowNull: true, type: DataType.STRING(10) })
    molecularDescriptionFlag?: string;
}
