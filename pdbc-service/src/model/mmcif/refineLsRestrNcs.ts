import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_ls_restr_ncs", timestamps: false })
export class refineLsRestrNcs extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdbx_refine_id", allowNull: true, type: DataType.STRING(80) })
    pdbxRefineId?: string;

    @Column({ field: "dom_id", allowNull: true, type: DataType.STRING(10) })
    domId?: string;

    @Column({ field: "ncs_model_details", allowNull: true, type: DataType.STRING(1023) })
    ncsModelDetails?: string;

    @Column({ field: "rms_dev_B_iso", allowNull: true, type: DataType.FLOAT(12) })
    rmsDevBIso?: number;

    @Column({ field: "rms_dev_position", allowNull: true, type: DataType.FLOAT(12) })
    rmsDevPosition?: number;

    @Column({ field: "weight_B_iso", allowNull: true, type: DataType.FLOAT(12) })
    weightBIso?: number;

    @Column({ field: "weight_position", allowNull: true, type: DataType.FLOAT(12) })
    weightPosition?: number;

    @Column({ field: "pdbx_ordinal", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxOrdinal!: number;

    @Column({ field: "pdbx_type", allowNull: true, type: DataType.STRING(200) })
    pdbxType?: string;

    @Column({ field: "pdbx_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxAsymId?: string;

    @Column({ field: "pdbx_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthAsymId?: string;

    @Column({ field: "pdbx_number", allowNull: true, type: DataType.INTEGER })
    pdbxNumber?: number;

    @Column({ field: "pdbx_rms", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRms?: number;

    @Column({ field: "pdbx_weight", allowNull: true, type: DataType.FLOAT(12) })
    pdbxWeight?: number;

    @Column({ field: "pdbx_ens_id", allowNull: true, type: DataType.STRING(10) })
    pdbxEnsId?: string;
}
