import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_xplor_file", timestamps: false })
export class pdbxXplorFile extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "serial_no", primaryKey: true, type: DataType.STRING(18) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    serialNo!: string;

    @Column({ field: "pdbx_refine_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxRefineId!: string;

    @Column({ field: "param_file", allowNull: true, type: DataType.STRING(80) })
    paramFile?: string;

    @Column({ field: "topol_file", allowNull: true, type: DataType.STRING(80) })
    topolFile?: string;
}
