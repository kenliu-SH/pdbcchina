import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_refine_component", timestamps: false })
export class pdbxRefineComponent extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "label_alt_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelAltId!: string;

    @Column({ field: "label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelAsymId!: string;

    @Column({ field: "label_comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelCompId!: string;

    @Column({ field: "label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelSeqId!: number;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbInsCode?: string;

    @Column({ field: "B_iso", allowNull: true, type: DataType.FLOAT(12) })
    bIso?: number;

    @Column({ field: "B_iso_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    bIsoMainChain?: number;

    @Column({ field: "B_iso_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    bIsoSideChain?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    shift?: number;

    @Column({ field: "shift_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    shiftSideChain?: number;

    @Column({ field: "shift_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    shiftMainChain?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    correlation?: number;

    @Column({ field: "correlation_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    correlationSideChain?: number;

    @Column({ field: "correlation_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    correlationMainChain?: number;

    @Column({ field: "real_space_R", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceR?: number;

    @Column({ field: "real_space_R_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceRSideChain?: number;

    @Column({ field: "real_space_R_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceRMainChain?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    connect?: number;

    @Column({ field: "density_index", allowNull: true, type: DataType.FLOAT(12) })
    densityIndex?: number;

    @Column({ field: "density_index_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    densityIndexMainChain?: number;

    @Column({ field: "density_index_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    densityIndexSideChain?: number;

    @Column({ field: "density_ratio", allowNull: true, type: DataType.FLOAT(12) })
    densityRatio?: number;

    @Column({ field: "density_ratio_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    densityRatioMainChain?: number;

    @Column({ field: "density_ratio_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    densityRatioSideChain?: number;
}
