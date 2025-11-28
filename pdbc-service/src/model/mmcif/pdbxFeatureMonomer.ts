import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_feature_monomer", timestamps: false })
export class pdbxFeatureMonomer extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "feature_name", allowNull: true, type: DataType.STRING(200) })
    featureName?: string;

    @Column({ field: "feature_type", allowNull: true, type: DataType.STRING(200) })
    featureType?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    feature?: string;

    @Column({ field: "feature_identifier", allowNull: true, type: DataType.STRING(200) })
    featureIdentifier?: string;

    @Column({ field: "feature_assigned_by", allowNull: true, type: DataType.STRING(200) })
    featureAssignedBy?: string;

    @Column({ field: "feature_citation_id", allowNull: true, type: DataType.STRING(10) })
    featureCitationId?: string;

    @Column({ field: "feature_software_id", allowNull: true, type: DataType.STRING(200) })
    featureSoftwareId?: string;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "label_asym_id", allowNull: true, type: DataType.STRING(10) })
    labelAsymId?: string;

    @Column({ field: "label_comp_id", allowNull: true, type: DataType.STRING(10) })
    labelCompId?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;
}
