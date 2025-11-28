import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_refine_ls_restr_ncs", timestamps: false })
export class pdbxRefineLsRestrNcs extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "dom_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    domId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    number?: number;

    @Column({ field: "rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    rmsDev?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    weight?: number;
}
