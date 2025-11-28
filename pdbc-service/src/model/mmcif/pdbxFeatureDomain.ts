import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_feature_domain", timestamps: false })
export class pdbxFeatureDomain extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "domain_id", allowNull: true, type: DataType.STRING(10) })
    domainId?: string;

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
}
