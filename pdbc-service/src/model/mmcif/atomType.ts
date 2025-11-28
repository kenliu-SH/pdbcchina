import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "atom_type", timestamps: false })
export class atomType extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "analytical_mass_percent", allowNull: true, type: DataType.FLOAT(12) })
    analyticalMassPercent?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    description?: string;

    @Column({ field: "number_in_cell", allowNull: true, type: DataType.INTEGER })
    numberInCell?: number;

    @Column({ field: "oxidation_number", allowNull: true, type: DataType.INTEGER })
    oxidationNumber?: number;

    @Column({ field: "radius_bond", allowNull: true, type: DataType.FLOAT(12) })
    radiusBond?: number;

    @Column({ field: "radius_contact", allowNull: true, type: DataType.FLOAT(12) })
    radiusContact?: number;

    @Column({ field: "scat_Cromer_Mann_a1", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannA1?: number;

    @Column({ field: "scat_Cromer_Mann_a2", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannA2?: number;

    @Column({ field: "scat_Cromer_Mann_a3", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannA3?: number;

    @Column({ field: "scat_Cromer_Mann_a4", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannA4?: number;

    @Column({ field: "scat_Cromer_Mann_b1", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannB1?: number;

    @Column({ field: "scat_Cromer_Mann_b2", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannB2?: number;

    @Column({ field: "scat_Cromer_Mann_b3", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannB3?: number;

    @Column({ field: "scat_Cromer_Mann_b4", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannB4?: number;

    @Column({ field: "scat_Cromer_Mann_c", allowNull: true, type: DataType.FLOAT(12) })
    scatCromerMannC?: number;

    @Column({ field: "scat_dispersion_imag", allowNull: true, type: DataType.FLOAT(12) })
    scatDispersionImag?: number;

    @Column({ field: "scat_dispersion_real", allowNull: true, type: DataType.FLOAT(12) })
    scatDispersionReal?: number;

    @Column({ field: "scat_length_neutron", allowNull: true, type: DataType.STRING(200) })
    scatLengthNeutron?: string;

    @Column({ field: "scat_source", allowNull: true, type: DataType.STRING(200) })
    scatSource?: string;

    @Column({ field: "scat_versus_stol_list", allowNull: true, type: DataType.STRING(200) })
    scatVersusStolList?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    symbol!: string;

    @Column({ field: "scat_dispersion_source", allowNull: true, type: DataType.STRING(200) })
    scatDispersionSource?: string;

    @Column({ field: "pdbx_scat_Cromer_Mann_a5", allowNull: true, type: DataType.FLOAT(12) })
    pdbxScatCromerMannA5?: number;

    @Column({ field: "pdbx_scat_Cromer_Mann_b5", allowNull: true, type: DataType.FLOAT(12) })
    pdbxScatCromerMannB5?: number;
}
