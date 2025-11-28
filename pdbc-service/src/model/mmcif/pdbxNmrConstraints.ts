import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_constraints", timestamps: false })
export class pdbxNmrConstraints extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "NOE_constraints_total", allowNull: true, type: DataType.INTEGER })
    noeConstraintsTotal?: number;

    @Column({ field: "NOE_intraresidue_total_count", allowNull: true, type: DataType.INTEGER })
    noeIntraresidueTotalCount?: number;

    @Column({ field: "NOE_interentity_total_count", allowNull: true, type: DataType.INTEGER })
    noeInterentityTotalCount?: number;

    @Column({ field: "NOE_sequential_total_count", allowNull: true, type: DataType.INTEGER })
    noeSequentialTotalCount?: number;

    @Column({ field: "NOE_medium_range_total_count", allowNull: true, type: DataType.INTEGER })
    noeMediumRangeTotalCount?: number;

    @Column({ field: "NOE_long_range_total_count", allowNull: true, type: DataType.INTEGER })
    noeLongRangeTotalCount?: number;

    @Column({ field: "protein_phi_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    proteinPhiAngleConstraintsTotalCount?: number;

    @Column({ field: "protein_psi_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    proteinPsiAngleConstraintsTotalCount?: number;

    @Column({ field: "protein_chi_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    proteinChiAngleConstraintsTotalCount?: number;

    @Column({ field: "protein_other_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    proteinOtherAngleConstraintsTotalCount?: number;

    @Column({ field: "NOE_interproton_distance_evaluation", allowNull: true, type: DataType.STRING(200) })
    noeInterprotonDistanceEvaluation?: string;

    @Column({ field: "NOE_pseudoatom_corrections", allowNull: true, type: DataType.STRING(200) })
    noePseudoatomCorrections?: string;

    @Column({ field: "NOE_motional_averaging_correction", allowNull: true, type: DataType.STRING(200) })
    noeMotionalAveragingCorrection?: string;

    @Column({ field: "hydrogen_bond_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    hydrogenBondConstraintsTotalCount?: number;

    @Column({ field: "disulfide_bond_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    disulfideBondConstraintsTotalCount?: number;

    @Column({ field: "NA_alpha_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naAlphaAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_beta_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naBetaAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_gamma_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naGammaAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_delta_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naDeltaAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_epsilon_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naEpsilonAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_chi_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naChiAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_other_angle_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naOtherAngleConstraintsTotalCount?: number;

    @Column({ field: "NA_sugar_pucker_constraints_total_count", allowNull: true, type: DataType.INTEGER })
    naSugarPuckerConstraintsTotalCount?: number;
}
