import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MIR_der_site", timestamps: false })
export class phasingMirDerSite extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "der_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    derId!: string;

    @Column({ field: "atom_type_symbol", allowNull: true, type: DataType.STRING(10) })
    atomTypeSymbol?: string;

    @Column({ field: "B_iso", allowNull: true, type: DataType.FLOAT(12) })
    bIso?: number;

    @Column({ field: "B_iso_esd", allowNull: true, type: DataType.FLOAT(12) })
    bIsoEsd?: number;

    @Column({ field: "Cartn_x", allowNull: true, type: DataType.FLOAT(12) })
    cartnX?: number;

    @Column({ field: "Cartn_x_esd", allowNull: true, type: DataType.FLOAT(12) })
    cartnXEsd?: number;

    @Column({ field: "Cartn_y", allowNull: true, type: DataType.FLOAT(12) })
    cartnY?: number;

    @Column({ field: "Cartn_y_esd", allowNull: true, type: DataType.FLOAT(12) })
    cartnYEsd?: number;

    @Column({ field: "Cartn_z", allowNull: true, type: DataType.FLOAT(12) })
    cartnZ?: number;

    @Column({ field: "Cartn_z_esd", allowNull: true, type: DataType.FLOAT(12) })
    cartnZEsd?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "fract_x", allowNull: true, type: DataType.FLOAT(12) })
    fractX?: number;

    @Column({ field: "fract_x_esd", allowNull: true, type: DataType.FLOAT(12) })
    fractXEsd?: number;

    @Column({ field: "fract_y", allowNull: true, type: DataType.FLOAT(12) })
    fractY?: number;

    @Column({ field: "fract_y_esd", allowNull: true, type: DataType.FLOAT(12) })
    fractYEsd?: number;

    @Column({ field: "fract_z", allowNull: true, type: DataType.FLOAT(12) })
    fractZ?: number;

    @Column({ field: "fract_z_esd", allowNull: true, type: DataType.FLOAT(12) })
    fractZEsd?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    occupancy?: number;

    @Column({ field: "occupancy_anom", allowNull: true, type: DataType.FLOAT(12) })
    occupancyAnom?: number;

    @Column({ field: "occupancy_anom_su", allowNull: true, type: DataType.FLOAT(12) })
    occupancyAnomSu?: number;

    @Column({ field: "occupancy_iso", allowNull: true, type: DataType.FLOAT(12) })
    occupancyIso?: number;

    @Column({ field: "occupancy_iso_su", allowNull: true, type: DataType.FLOAT(12) })
    occupancyIsoSu?: number;
}
