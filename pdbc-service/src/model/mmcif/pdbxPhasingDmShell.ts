import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_phasing_dm_shell", timestamps: false })
export class pdbxPhasingDmShell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "d_res_high", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResHigh!: number;

    @Column({ field: "d_res_low", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResLow!: number;

    @Column({ field: "fom_acentric", allowNull: true, type: DataType.FLOAT(12) })
    fomAcentric?: number;

    @Column({ field: "fom_centric", allowNull: true, type: DataType.FLOAT(12) })
    fomCentric?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "reflns_acentric", allowNull: true, type: DataType.INTEGER })
    reflnsAcentric?: number;

    @Column({ field: "reflns_centric", allowNull: true, type: DataType.INTEGER })
    reflnsCentric?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    reflns?: number;

    @Column({ field: "delta_phi_initial", allowNull: true, type: DataType.FLOAT(12) })
    deltaPhiInitial?: number;

    @Column({ field: "delta_phi_final", allowNull: true, type: DataType.FLOAT(12) })
    deltaPhiFinal?: number;
}
