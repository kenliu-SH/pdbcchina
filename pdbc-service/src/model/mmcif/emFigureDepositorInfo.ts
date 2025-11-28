import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_figure_depositor_info", timestamps: false })
export class emFigureDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "experiment_id", allowNull: true, type: DataType.STRING(10) })
    experimentId?: string;

    @Column({ field: "upload_file_name", allowNull: true, type: DataType.STRING(80) })
    uploadFileName?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
