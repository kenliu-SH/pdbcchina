import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_measurement", timestamps: false })
export class diffrnMeasurement extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    device?: string;

    @Column({ field: "device_details", allowNull: true, type: DataType.STRING(200) })
    deviceDetails?: string;

    @Column({ field: "device_type", allowNull: true, type: DataType.STRING(200) })
    deviceType?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;

    @Column({ field: "specimen_support", allowNull: true, type: DataType.STRING(200) })
    specimenSupport?: string;

    @Column({ field: "pdbx_date", allowNull: true, type: DataType.DATE })
    pdbxDate?: Date;
}
