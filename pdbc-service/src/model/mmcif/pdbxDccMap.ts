import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dcc_map", timestamps: false })
export class pdbxDccMap extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "model_id", allowNull: true, type: DataType.STRING(10) })
    modelId?: string;

    @Column({ field: "pdb_id", allowNull: true, type: DataType.STRING(10) })
    pdbId?: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "label_ins_code", allowNull: true, type: DataType.STRING(10) })
    labelInsCode?: string;

    @Column({ field: "RSCC", allowNull: true, type: DataType.FLOAT(12) })
    rscc?: number;

    @Column({ field: "RSR", allowNull: true, type: DataType.FLOAT(12) })
    rsr?: number;

    @Column({ field: "weighted_RSR", allowNull: true, type: DataType.FLOAT(12) })
    weightedRsr?: number;

    @Column({ field: "RSRZ", allowNull: true, type: DataType.FLOAT(12) })
    rsrz?: number;

    @Column({ field: "weighted_RSRZ", allowNull: true, type: DataType.FLOAT(12) })
    weightedRsrz?: number;

    @Column({ field: "Biso_mean", allowNull: true, type: DataType.FLOAT(12) })
    bisoMean?: number;

    @Column({ field: "occupancy_mean", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMean?: number;

    @Column({ field: "RSCC_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    rsccMainChain?: number;

    @Column({ field: "RSR_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    rsrMainChain?: number;

    @Column({ field: "wRSR_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    wRsrMainChain?: number;

    @Column({ field: "RSRZ_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    rsrzMainChain?: number;

    @Column({ field: "wRSRZ_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    wRsrzMainChain?: number;

    @Column({ field: "Biso_mean_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    bisoMeanMainChain?: number;

    @Column({ field: "occupancy_mean_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMeanMainChain?: number;

    @Column({ field: "RSCC_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    rsccSideChain?: number;

    @Column({ field: "RSR_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    rsrSideChain?: number;

    @Column({ field: "wRSR_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    wRsrSideChain?: number;

    @Column({ field: "RSRZ_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    rsrzSideChain?: number;

    @Column({ field: "wRSRZ_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    wRsrzSideChain?: number;

    @Column({ field: "Biso_mean_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    bisoMeanSideChain?: number;

    @Column({ field: "occupancy_mean_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMeanSideChain?: number;

    @Column({ field: "RSCC_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    rsccPhosphateGroup?: number;

    @Column({ field: "RSR_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    rsrPhosphateGroup?: number;

    @Column({ field: "wRSR_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    wRsrPhosphateGroup?: number;

    @Column({ field: "RSRZ_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    rsrzPhosphateGroup?: number;

    @Column({ field: "wRSRZ_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    wRsrzPhosphateGroup?: number;

    @Column({ field: "Biso_mean_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    bisoMeanPhosphateGroup?: number;

    @Column({ field: "occupancy_mean_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMeanPhosphateGroup?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    shift?: number;

    @Column({ field: "shift_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    shiftMainChain?: number;

    @Column({ field: "shift_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    shiftSideChain?: number;

    @Column({ field: "density_connectivity", allowNull: true, type: DataType.FLOAT(12) })
    densityConnectivity?: number;

    @Column({ field: "density_index_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    densityIndexMainChain?: number;

    @Column({ field: "density_index_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    densityIndexSideChain?: number;

    @Column({ field: "RSZD", allowNull: true, type: DataType.FLOAT(12) })
    rszd?: number;

    @Column({ field: "RSZO", allowNull: true, type: DataType.FLOAT(12) })
    rszo?: number;

    @Column({ field: "RSZO_Zscore", allowNull: true, type: DataType.FLOAT(12) })
    rszoZscore?: number;

    @Column({ field: "LLDF", allowNull: true, type: DataType.FLOAT(12) })
    lldf?: number;

    @Column({ field: "RSZD_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    rszdMainChain?: number;

    @Column({ field: "RSZO_main_chain", allowNull: true, type: DataType.FLOAT(12) })
    rszoMainChain?: number;

    @Column({ field: "RSZD_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    rszdSideChain?: number;

    @Column({ field: "RSZO_side_chain", allowNull: true, type: DataType.FLOAT(12) })
    rszoSideChain?: number;

    @Column({ field: "RSZD_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    rszdPhosphateGroup?: number;

    @Column({ field: "RSZO_phosphate_group", allowNull: true, type: DataType.FLOAT(12) })
    rszoPhosphateGroup?: number;

    @Column({ field: "quality_indicator", allowNull: true, type: DataType.STRING(80) })
    qualityIndicator?: string;
}
