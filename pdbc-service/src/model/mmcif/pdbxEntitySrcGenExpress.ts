import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_express", timestamps: false })
export class pdbxEntitySrcGenExpress extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "step_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    stepId!: number;

    @Column({ field: "next_step_id", allowNull: true, type: DataType.INTEGER })
    nextStepId?: number;

    @Column({ field: "end_construct_id", allowNull: true, type: DataType.STRING(10) })
    endConstructId?: string;

    @Column({ field: "robot_id", allowNull: true, type: DataType.STRING(10) })
    robotId?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "promoter_type", allowNull: true, type: DataType.STRING(200) })
    promoterType?: string;

    @Column({ field: "plasmid_id", allowNull: true, type: DataType.STRING(10) })
    plasmidId?: string;

    @Column({ field: "vector_type", allowNull: true, type: DataType.STRING(10) })
    vectorType?: string;

    @Column({ field: "N_terminal_seq_tag", allowNull: true, type: DataType.STRING(200) })
    nTerminalSeqTag?: string;

    @Column({ field: "C_terminal_seq_tag", allowNull: true, type: DataType.STRING(200) })
    cTerminalSeqTag?: string;

    @Column({ field: "host_org_scientific_name", allowNull: true, type: DataType.STRING(80) })
    hostOrgScientificName?: string;

    @Column({ field: "host_org_common_name", allowNull: true, type: DataType.STRING(80) })
    hostOrgCommonName?: string;

    @Column({ field: "host_org_variant", allowNull: true, type: DataType.STRING(80) })
    hostOrgVariant?: string;

    @Column({ field: "host_org_strain", allowNull: true, type: DataType.STRING(80) })
    hostOrgStrain?: string;

    @Column({ field: "host_org_tissue", allowNull: true, type: DataType.STRING(80) })
    hostOrgTissue?: string;

    @Column({ field: "host_org_culture_collection", allowNull: true, type: DataType.STRING(80) })
    hostOrgCultureCollection?: string;

    @Column({ field: "host_org_cell_line", allowNull: true, type: DataType.STRING(80) })
    hostOrgCellLine?: string;

    @Column({ field: "host_org_tax_id", allowNull: true, type: DataType.STRING(80) })
    hostOrgTaxId?: string;

    @Column({ field: "host_org_details", allowNull: true, type: DataType.STRING(200) })
    hostOrgDetails?: string;

    @Column({ field: "culture_base_media", allowNull: true, type: DataType.STRING(200) })
    cultureBaseMedia?: string;

    @Column({ field: "culture_additives", allowNull: true, type: DataType.STRING(200) })
    cultureAdditives?: string;

    @Column({ field: "culture_volume", allowNull: true, type: DataType.FLOAT(12) })
    cultureVolume?: number;

    @Column({ field: "culture_time", allowNull: true, type: DataType.FLOAT(12) })
    cultureTime?: number;

    @Column({ field: "culture_temperature", allowNull: true, type: DataType.FLOAT(12) })
    cultureTemperature?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    inducer?: string;

    @Column({ field: "inducer_concentration", allowNull: true, type: DataType.FLOAT(12) })
    inducerConcentration?: number;

    @Column({ field: "induction_details", allowNull: true, type: DataType.STRING(200) })
    inductionDetails?: string;

    @Column({ field: "multiplicity_of_infection", allowNull: true, type: DataType.FLOAT(12) })
    multiplicityOfInfection?: number;

    @Column({ field: "induction_timepoint", allowNull: true, type: DataType.FLOAT(12) })
    inductionTimepoint?: number;

    @Column({ field: "induction_temperature", allowNull: true, type: DataType.FLOAT(12) })
    inductionTemperature?: number;

    @Column({ field: "harvesting_details", allowNull: true, type: DataType.STRING(200) })
    harvestingDetails?: string;

    @Column({ field: "storage_details", allowNull: true, type: DataType.STRING(200) })
    storageDetails?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    summary?: string;
}
