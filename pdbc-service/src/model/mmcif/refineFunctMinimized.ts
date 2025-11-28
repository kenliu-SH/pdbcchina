import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_funct_minimized", timestamps: false })
export class refineFunctMinimized extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdbx_refine_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxRefineId!: string;

    @Column({ field: "number_terms", allowNull: true, type: DataType.INTEGER })
    numberTerms?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    residual?: number;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    type!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    weight?: number;
}
