import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "cell_measurement", timestamps: false })
export class cellMeasurement extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    pressure?: number;

    @Column({ field: "pressure_esd", allowNull: true, type: DataType.FLOAT(12) })
    pressureEsd?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    radiation?: string;

    @Column({ field: "reflns_used", allowNull: true, type: DataType.INTEGER })
    reflnsUsed?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    temp?: number;

    @Column({ field: "temp_esd", allowNull: true, type: DataType.FLOAT(12) })
    tempEsd?: number;

    @Column({ field: "theta_max", allowNull: true, type: DataType.FLOAT(12) })
    thetaMax?: number;

    @Column({ field: "theta_min", allowNull: true, type: DataType.FLOAT(12) })
    thetaMin?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    wavelength?: number;
}
