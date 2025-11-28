import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_crystal_formation", timestamps: false })
export class emCrystalFormation extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    atmosphere?: string;

    @Column({ allowNull: true, type: DataType.STRING(1023) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    instrument?: string;

    @Column({ field: "lipid_mixture", allowNull: true, type: DataType.STRING(200) })
    lipidMixture?: string;

    @Column({ field: "lipid_protein_ratio", allowNull: true, type: DataType.FLOAT(12) })
    lipidProteinRatio?: number;

    @Column({ field: "specimen_id", allowNull: true, type: DataType.STRING(10) })
    specimenId?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    temperature?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    time?: number;

    @Column({ field: "time_unit", allowNull: true, type: DataType.STRING(10) })
    timeUnit?: string;
}
