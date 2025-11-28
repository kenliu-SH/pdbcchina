import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MAD_expt", timestamps: false })
export class phasingMadExpt extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "delta_delta_phi", allowNull: true, type: DataType.FLOAT(12) })
    deltaDeltaPhi?: number;

    @Column({ field: "delta_phi", allowNull: true, type: DataType.FLOAT(12) })
    deltaPhi?: number;

    @Column({ field: "delta_phi_sigma", allowNull: true, type: DataType.FLOAT(12) })
    deltaPhiSigma?: number;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "mean_fom", allowNull: true, type: DataType.FLOAT(12) })
    meanFom?: number;

    @Column({ field: "number_clust", allowNull: true, type: DataType.INTEGER })
    numberClust?: number;

    @Column({ field: "R_normal_all", allowNull: true, type: DataType.FLOAT(12) })
    rNormalAll?: number;

    @Column({ field: "R_normal_anom_scat", allowNull: true, type: DataType.FLOAT(12) })
    rNormalAnomScat?: number;
}
