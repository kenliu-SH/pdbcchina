import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_exptl_crystal_grow_comp", timestamps: false })
export class pdbxExptlCrystalGrowComp extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "comp_name", allowNull: true, type: DataType.STRING(80) })
    compName?: string;

    @Column({ field: "sol_id", allowNull: true, type: DataType.STRING(80) })
    solId?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    conc?: number;

    @Column({ field: "conc_range", allowNull: true, type: DataType.STRING(80) })
    concRange?: string;

    @Column({ field: "conc_units", allowNull: true, type: DataType.STRING(80) })
    concUnits?: string;
}
