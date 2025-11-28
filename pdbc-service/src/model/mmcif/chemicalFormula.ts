import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chemical_formula", timestamps: false })
export class chemicalFormula extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    analytical?: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    iupac?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    moiety?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    structural?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    sum?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    weight?: number;

    @Column({ field: "weight_meas", allowNull: true, type: DataType.FLOAT(12) })
    weightMeas?: number;
}
