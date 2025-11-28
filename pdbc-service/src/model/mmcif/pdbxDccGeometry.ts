import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dcc_geometry", timestamps: false })
export class pdbxDccGeometry extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "Ramachandran_outlier_percent", allowNull: true, type: DataType.FLOAT(12) })
    ramachandranOutlierPercent?: number;

    @Column({ field: "Ramachandran_outlier_number", allowNull: true, type: DataType.INTEGER })
    ramachandranOutlierNumber?: number;

    @Column({ field: "Ramachandran_allowed_percent", allowNull: true, type: DataType.FLOAT(12) })
    ramachandranAllowedPercent?: number;

    @Column({ field: "Ramachandran_allowed_number", allowNull: true, type: DataType.INTEGER })
    ramachandranAllowedNumber?: number;

    @Column({ field: "Ramachandran_favored_percent", allowNull: true, type: DataType.FLOAT(12) })
    ramachandranFavoredPercent?: number;

    @Column({ field: "Ramachandran_favored_number", allowNull: true, type: DataType.INTEGER })
    ramachandranFavoredNumber?: number;

    @Column({ field: "rotamer_outliers_percent", allowNull: true, type: DataType.FLOAT(12) })
    rotamerOutliersPercent?: number;

    @Column({ field: "rotamer_outliers_number", allowNull: true, type: DataType.INTEGER })
    rotamerOutliersNumber?: number;

    @Column({ field: "cbeta_deviations", allowNull: true, type: DataType.INTEGER })
    cbetaDeviations?: number;

    @Column({ field: "all_atom_clashscore", allowNull: true, type: DataType.FLOAT(12) })
    allAtomClashscore?: number;

    @Column({ field: "overall_score", allowNull: true, type: DataType.FLOAT(12) })
    overallScore?: number;

    @Column({ field: "bond_overall_rms", allowNull: true, type: DataType.FLOAT(12) })
    bondOverallRms?: number;

    @Column({ field: "bond_overall_max", allowNull: true, type: DataType.FLOAT(12) })
    bondOverallMax?: number;

    @Column({ field: "bond_ligand_rms", allowNull: true, type: DataType.FLOAT(12) })
    bondLigandRms?: number;

    @Column({ field: "bond_ligand_max", allowNull: true, type: DataType.FLOAT(12) })
    bondLigandMax?: number;

    @Column({ field: "angle_overall_rms", allowNull: true, type: DataType.FLOAT(12) })
    angleOverallRms?: number;

    @Column({ field: "angle_overall_max", allowNull: true, type: DataType.FLOAT(12) })
    angleOverallMax?: number;

    @Column({ field: "angle_ligand_rms", allowNull: true, type: DataType.FLOAT(12) })
    angleLigandRms?: number;

    @Column({ field: "angle_ligand_max", allowNull: true, type: DataType.FLOAT(12) })
    angleLigandMax?: number;

    @Column({ field: "dihedral_overall_rms", allowNull: true, type: DataType.FLOAT(12) })
    dihedralOverallRms?: number;

    @Column({ field: "dihedral_overall_max", allowNull: true, type: DataType.FLOAT(12) })
    dihedralOverallMax?: number;

    @Column({ field: "chirality_overall_rms", allowNull: true, type: DataType.FLOAT(12) })
    chiralityOverallRms?: number;

    @Column({ field: "chirality_overall_max", allowNull: true, type: DataType.FLOAT(12) })
    chiralityOverallMax?: number;

    @Column({ field: "planarity_overall_rms", allowNull: true, type: DataType.FLOAT(12) })
    planarityOverallRms?: number;

    @Column({ field: "planarity_overall_max", allowNull: true, type: DataType.FLOAT(12) })
    planarityOverallMax?: number;

    @Column({ field: "non_bonded_rms", allowNull: true, type: DataType.FLOAT(12) })
    nonBondedRms?: number;
}
