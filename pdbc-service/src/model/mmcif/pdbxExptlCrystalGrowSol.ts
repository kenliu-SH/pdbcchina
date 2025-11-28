import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_exptl_crystal_grow_sol", timestamps: false })
export class pdbxExptlCrystalGrowSol extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ field: "sol_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    solId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    volume?: number;

    @Column({ field: "volume_units", allowNull: true, type: DataType.STRING(80) })
    volumeUnits?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    pH?: number;
}
