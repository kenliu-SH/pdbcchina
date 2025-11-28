import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_sheet_topology", timestamps: false })
export class structSheetTopology extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "sheet_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    sheetId!: string;

    @Column({ field: "range_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    rangeId_1!: string;

    @Column({ field: "range_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    rangeId_2!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    offset?: number;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    sense?: string;
}
