import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_depositor_info", timestamps: false })
export class pdbxEntitySrcGenDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "src_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    srcId!: number;

    @Column({ field: "entity_id", allowNull: true, type: DataType.STRING(10) })
    entityId?: string;

    @Column({ field: "seq_type", allowNull: true, type: DataType.STRING(80) })
    seqType?: string;

    @Column({ field: "beg_seq_num", allowNull: true, type: DataType.INTEGER })
    begSeqNum?: number;

    @Column({ field: "end_seq_num", allowNull: true, type: DataType.INTEGER })
    endSeqNum?: number;

    @Column({ field: "gene_src_gene", allowNull: true, type: DataType.STRING(200) })
    geneSrcGene?: string;

    @Column({ field: "gene_src_scientific_name", allowNull: true, type: DataType.STRING(200) })
    geneSrcScientificName?: string;

    @Column({ field: "host_org_gene", allowNull: true, type: DataType.STRING(200) })
    hostOrgGene?: string;

    @Column({ field: "host_org_scientific_name", allowNull: true, type: DataType.STRING(200) })
    hostOrgScientificName?: string;

    @Column({ field: "host_org_strain", allowNull: true, type: DataType.STRING(200) })
    hostOrgStrain?: string;

    @Column({ field: "gene_src_ncbi_taxonomy_id", allowNull: true, type: DataType.INTEGER })
    geneSrcNcbiTaxonomyId?: number;

    @Column({ field: "host_org_ncbi_taxonomy_id", allowNull: true, type: DataType.INTEGER })
    hostOrgNcbiTaxonomyId?: number;

    @Column({ field: "host_org_vector_type", allowNull: true, type: DataType.STRING(200) })
    hostOrgVectorType?: string;

    @Column({ field: "plasmid_name", allowNull: true, type: DataType.STRING(200) })
    plasmidName?: string;
}
