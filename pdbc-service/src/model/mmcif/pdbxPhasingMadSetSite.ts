import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_phasing_MAD_set_site", timestamps: false })
export class pdbxPhasingMadSetSite extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "atom_type_symbol", allowNull: true, type: DataType.STRING(10) })
    atomTypeSymbol?: string;

    @Column({ field: "Cartn_x", allowNull: true, type: DataType.FLOAT(12) })
    cartnX?: number;

    @Column({ field: "Cartn_y", allowNull: true, type: DataType.FLOAT(12) })
    cartnY?: number;

    @Column({ field: "Cartn_z", allowNull: true, type: DataType.FLOAT(12) })
    cartnZ?: number;

    @Column({ field: "Cartn_x_esd", allowNull: true, type: DataType.FLOAT(12) })
    cartnXEsd?: number;

    @Column({ field: "Cartn_y_esd", allowNull: true, type: DataType.FLOAT(12) })
    cartnYEsd?: number;

    @Column({ field: "Cartn_z_esd", allowNull: true, type: DataType.FLOAT(12) })
    cartnZEsd?: number;

    @Column({ field: "fract_x", allowNull: true, type: DataType.FLOAT(12) })
    fractX?: number;

    @Column({ field: "fract_y", allowNull: true, type: DataType.FLOAT(12) })
    fractY?: number;

    @Column({ field: "fract_z", allowNull: true, type: DataType.FLOAT(12) })
    fractZ?: number;

    @Column({ field: "fract_x_esd", allowNull: true, type: DataType.FLOAT(12) })
    fractXEsd?: number;

    @Column({ field: "fract_y_esd", allowNull: true, type: DataType.FLOAT(12) })
    fractYEsd?: number;

    @Column({ field: "fract_z_esd", allowNull: true, type: DataType.FLOAT(12) })
    fractZEsd?: number;

    @Column({ field: "b_iso", allowNull: true, type: DataType.FLOAT(12) })
    bIso?: number;

    @Column({ field: "b_iso_esd", allowNull: true, type: DataType.FLOAT(12) })
    bIsoEsd?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    occupancy?: number;

    @Column({ field: "occupancy_esd", allowNull: true, type: DataType.FLOAT(12) })
    occupancyEsd?: number;

    @Column({ field: "set_id", allowNull: true, type: DataType.STRING(10) })
    setId?: string;

    @Column({ field: "occupancy_iso", allowNull: true, type: DataType.FLOAT(12) })
    occupancyIso?: number;
}
