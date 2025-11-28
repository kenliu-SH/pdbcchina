import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "columninfo", timestamps: false })
export class columninfo extends Model {
    @Column({ primaryKey: true, type: DataType.STRING(30) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    columnname!: string;

    @Column({ primaryKey: true, type: DataType.STRING(30) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    tablename!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    description?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    example?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    type?: number;

    @Column({ field: "table_serial_no", allowNull: true, type: DataType.INTEGER })
    tableSerialNo?: number;

    @Column({ field: "column_serial_no", allowNull: true, type: DataType.INTEGER })
    columnSerialNo?: number;

    @Column({ field: "WWW_Selection_Criteria", allowNull: true, type: DataType.INTEGER })
    wwwSelectionCriteria?: number;

    @Column({ field: "WWW_Report_Criteria", allowNull: true, type: DataType.INTEGER })
    wwwReportCriteria?: number;
}
