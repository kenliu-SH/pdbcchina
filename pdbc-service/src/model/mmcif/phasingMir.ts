import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MIR", timestamps: false })
export class phasingMir extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "FOM", allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "FOM_acentric", allowNull: true, type: DataType.FLOAT(12) })
    fomAcentric?: number;

    @Column({ field: "FOM_centric", allowNull: true, type: DataType.FLOAT(12) })
    fomCentric?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    reflns?: number;

    @Column({ field: "reflns_acentric", allowNull: true, type: DataType.INTEGER })
    reflnsAcentric?: number;

    @Column({ field: "reflns_centric", allowNull: true, type: DataType.INTEGER })
    reflnsCentric?: number;

    @Column({ field: "reflns_criterion", allowNull: true, type: DataType.STRING(200) })
    reflnsCriterion?: string;

    @Column({ field: "pdbx_number_derivatives", allowNull: true, type: DataType.INTEGER })
    pdbxNumberDerivatives?: number;
}
