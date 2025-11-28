import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_force_constants", timestamps: false })
export class pdbxNmrForceConstants extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "exptl_distance_term", allowNull: true, type: DataType.FLOAT(12) })
    exptlDistanceTerm?: number;

    @Column({ field: "exptl_distance_term_units", allowNull: true, type: DataType.STRING(10) })
    exptlDistanceTermUnits?: string;

    @Column({ field: "exptl_torsion_angles_term", allowNull: true, type: DataType.FLOAT(12) })
    exptlTorsionAnglesTerm?: number;

    @Column({ field: "exptl_torsion_angles_term_units", allowNull: true, type: DataType.STRING(10) })
    exptlTorsionAnglesTermUnits?: string;

    @Column({ field: "exptl_J_coupling_term", allowNull: true, type: DataType.FLOAT(12) })
    exptlJCouplingTerm?: number;

    @Column({ field: "exptl_J_coupling_term_units", allowNull: true, type: DataType.STRING(10) })
    exptlJCouplingTermUnits?: string;

    @Column({ field: "exptl_13C_shift_term", allowNull: true, type: DataType.FLOAT(12) })
    exptl_13CShiftTerm?: number;

    @Column({ field: "exptl_13C_shift_term_units", allowNull: true, type: DataType.STRING(10) })
    exptl_13CShiftTermUnits?: string;

    @Column({ field: "exptl_1H_shift_term", allowNull: true, type: DataType.FLOAT(12) })
    exptl_1HShiftTerm?: number;

    @Column({ field: "exptl_1H_shift_term_units", allowNull: true, type: DataType.STRING(10) })
    exptl_1HShiftTermUnits?: string;

    @Column({ field: "exptl_dipolar_coupling_term", allowNull: true, type: DataType.FLOAT(12) })
    exptlDipolarCouplingTerm?: number;

    @Column({ field: "exptl_dipolar_coupling_term_units", allowNull: true, type: DataType.STRING(10) })
    exptlDipolarCouplingTermUnits?: string;

    @Column({ field: "exptl_D_isotope_shift_term", allowNull: true, type: DataType.FLOAT(12) })
    exptlDIsotopeShiftTerm?: number;

    @Column({ field: "exptl_D_isotope_shift_term_units", allowNull: true, type: DataType.STRING(10) })
    exptlDIsotopeShiftTermUnits?: string;

    @Column({ field: "covalent_geom_bond_term", allowNull: true, type: DataType.FLOAT(12) })
    covalentGeomBondTerm?: number;

    @Column({ field: "covalent_geom_bond_term_units", allowNull: true, type: DataType.STRING(10) })
    covalentGeomBondTermUnits?: string;

    @Column({ field: "covalent_geom_angles_term", allowNull: true, type: DataType.FLOAT(12) })
    covalentGeomAnglesTerm?: number;

    @Column({ field: "covalent_geom_angles_term_units", allowNull: true, type: DataType.STRING(10) })
    covalentGeomAnglesTermUnits?: string;

    @Column({ field: "covalent_geom_impropers_term", allowNull: true, type: DataType.FLOAT(12) })
    covalentGeomImpropersTerm?: number;

    @Column({ field: "covalent_geom_impropers_term_units", allowNull: true, type: DataType.STRING(10) })
    covalentGeomImpropersTermUnits?: string;

    @Column({ field: "non_bonded_inter_van_der_Waals_term_type", allowNull: true, type: DataType.STRING(200) })
    nonBondedInterVanDerWaalsTermType?: string;

    @Column({ field: "non_bonded_inter_van_der_Waals_term", allowNull: true, type: DataType.FLOAT(12) })
    nonBondedInterVanDerWaalsTerm?: number;

    @Column({ field: "non_bonded_inter_van_der_Waals_term_units", allowNull: true, type: DataType.STRING(10) })
    nonBondedInterVanDerWaalsTermUnits?: string;

    @Column({ field: "non_bonded_inter_conf_db_potential_term", allowNull: true, type: DataType.FLOAT(12) })
    nonBondedInterConfDbPotentialTerm?: number;

    @Column({ field: "non_bonded_inter_radius_of_gyration_term", allowNull: true, type: DataType.FLOAT(12) })
    nonBondedInterRadiusOfGyrationTerm?: number;

    @Column({ field: "non_bonded_inter_radius_of_gyration_term_units", allowNull: true, type: DataType.STRING(10) })
    nonBondedInterRadiusOfGyrationTermUnits?: string;
}
