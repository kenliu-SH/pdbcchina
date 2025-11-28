import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_ensemble_rms", timestamps: false })
export class pdbxNmrEnsembleRms extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "residue_range_begin", allowNull: true, type: DataType.INTEGER })
    residueRangeBegin?: number;

    @Column({ field: "chain_range_begin", allowNull: true, type: DataType.STRING(10) })
    chainRangeBegin?: string;

    @Column({ field: "residue_range_end", allowNull: true, type: DataType.INTEGER })
    residueRangeEnd?: number;

    @Column({ field: "chain_range_end", allowNull: true, type: DataType.STRING(10) })
    chainRangeEnd?: string;

    @Column({ field: "atom_type", allowNull: true, type: DataType.STRING(80) })
    atomType?: string;

    @Column({ field: "distance_rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    distanceRmsDev?: number;

    @Column({ field: "distance_rms_dev_error", allowNull: true, type: DataType.FLOAT(12) })
    distanceRmsDevError?: number;

    @Column({ field: "covalent_bond_rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    covalentBondRmsDev?: number;

    @Column({ field: "covalent_bond_rms_dev_error", allowNull: true, type: DataType.FLOAT(12) })
    covalentBondRmsDevError?: number;

    @Column({ field: "bond_angle_rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    bondAngleRmsDev?: number;

    @Column({ field: "bond_angle_rms_dev_error", allowNull: true, type: DataType.FLOAT(12) })
    bondAngleRmsDevError?: number;

    @Column({ field: "improper_torsion_angle_rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    improperTorsionAngleRmsDev?: number;

    @Column({ field: "improper_torsion_angle_rms_dev_error", allowNull: true, type: DataType.FLOAT(12) })
    improperTorsionAngleRmsDevError?: number;

    @Column({ field: "peptide_planarity_rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    peptidePlanarityRmsDev?: number;

    @Column({ field: "peptide_planarity_rms_dev_error", allowNull: true, type: DataType.FLOAT(12) })
    peptidePlanarityRmsDevError?: number;

    @Column({ field: "dihedral_angles_rms_dev", allowNull: true, type: DataType.FLOAT(12) })
    dihedralAnglesRmsDev?: number;

    @Column({ field: "dihedral_angles_rms_dev_error", allowNull: true, type: DataType.FLOAT(12) })
    dihedralAnglesRmsDevError?: number;

    @Column({ field: "coord_average_rmsd_method", allowNull: true, type: DataType.STRING(200) })
    coordAverageRmsdMethod?: string;
}
