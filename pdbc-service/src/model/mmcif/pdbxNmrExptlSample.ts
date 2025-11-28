import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_exptl_sample", timestamps: false })
export class pdbxNmrExptlSample extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "solution_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    solutionId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(128) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    component!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    concentration?: number;

    @Column({ field: "concentration_range", allowNull: true, type: DataType.STRING(30) })
    concentrationRange?: string;

    @Column({ field: "concentration_units", allowNull: true, type: DataType.STRING(10) })
    concentrationUnits?: string;

    @Column({ field: "isotopic_labeling", allowNull: true, type: DataType.STRING(255) })
    isotopicLabeling?: string;

    @Column({ field: "concentration_err", allowNull: true, type: DataType.FLOAT(12) })
    concentrationErr?: number;
}
