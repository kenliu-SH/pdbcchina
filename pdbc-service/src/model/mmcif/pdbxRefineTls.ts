import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_refine_tls", timestamps: false })
export class pdbxRefineTls extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "pdbx_refine_id", allowNull: true, type: DataType.STRING(80) })
    pdbxRefineId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    method?: string;

    @Column({ field: "origin_x", allowNull: true, type: DataType.FLOAT(12) })
    originX?: number;

    @Column({ field: "origin_y", allowNull: true, type: DataType.FLOAT(12) })
    originY?: number;

    @Column({ field: "origin_z", allowNull: true, type: DataType.FLOAT(12) })
    originZ?: number;

    @Column({ field: "T_1_1", allowNull: true, type: DataType.FLOAT(12) })
    t_1_1?: number;

    @Column({ field: "T_1_1_esd", allowNull: true, type: DataType.FLOAT(12) })
    t_1_1Esd?: number;

    @Column({ field: "T_1_2", allowNull: true, type: DataType.FLOAT(12) })
    t_1_2?: number;

    @Column({ field: "T_1_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    t_1_2Esd?: number;

    @Column({ field: "T_1_3", allowNull: true, type: DataType.FLOAT(12) })
    t_1_3?: number;

    @Column({ field: "T_1_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    t_1_3Esd?: number;

    @Column({ field: "T_2_2", allowNull: true, type: DataType.FLOAT(12) })
    t_2_2?: number;

    @Column({ field: "T_2_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    t_2_2Esd?: number;

    @Column({ field: "T_2_3", allowNull: true, type: DataType.FLOAT(12) })
    t_2_3?: number;

    @Column({ field: "T_2_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    t_2_3Esd?: number;

    @Column({ field: "T_3_3", allowNull: true, type: DataType.FLOAT(12) })
    t_3_3?: number;

    @Column({ field: "T_3_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    t_3_3Esd?: number;

    @Column({ field: "L_1_1", allowNull: true, type: DataType.FLOAT(12) })
    l_1_1?: number;

    @Column({ field: "L_1_1_esd", allowNull: true, type: DataType.FLOAT(12) })
    l_1_1Esd?: number;

    @Column({ field: "L_1_2", allowNull: true, type: DataType.FLOAT(12) })
    l_1_2?: number;

    @Column({ field: "L_1_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    l_1_2Esd?: number;

    @Column({ field: "L_1_3", allowNull: true, type: DataType.FLOAT(12) })
    l_1_3?: number;

    @Column({ field: "L_1_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    l_1_3Esd?: number;

    @Column({ field: "L_2_2", allowNull: true, type: DataType.FLOAT(12) })
    l_2_2?: number;

    @Column({ field: "L_2_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    l_2_2Esd?: number;

    @Column({ field: "L_2_3", allowNull: true, type: DataType.FLOAT(12) })
    l_2_3?: number;

    @Column({ field: "L_2_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    l_2_3Esd?: number;

    @Column({ field: "L_3_3", allowNull: true, type: DataType.FLOAT(12) })
    l_3_3?: number;

    @Column({ field: "L_3_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    l_3_3Esd?: number;

    @Column({ field: "S_1_1", allowNull: true, type: DataType.FLOAT(12) })
    s_1_1?: number;

    @Column({ field: "S_1_1_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_1_1Esd?: number;

    @Column({ field: "S_1_2", allowNull: true, type: DataType.FLOAT(12) })
    s_1_2?: number;

    @Column({ field: "S_1_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_1_2Esd?: number;

    @Column({ field: "S_1_3", allowNull: true, type: DataType.FLOAT(12) })
    s_1_3?: number;

    @Column({ field: "S_1_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_1_3Esd?: number;

    @Column({ field: "S_2_1", allowNull: true, type: DataType.FLOAT(12) })
    s_2_1?: number;

    @Column({ field: "S_2_1_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_2_1Esd?: number;

    @Column({ field: "S_2_2", allowNull: true, type: DataType.FLOAT(12) })
    s_2_2?: number;

    @Column({ field: "S_2_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_2_2Esd?: number;

    @Column({ field: "S_2_3", allowNull: true, type: DataType.FLOAT(12) })
    s_2_3?: number;

    @Column({ field: "S_2_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_2_3Esd?: number;

    @Column({ field: "S_3_1", allowNull: true, type: DataType.FLOAT(12) })
    s_3_1?: number;

    @Column({ field: "S_3_1_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_3_1Esd?: number;

    @Column({ field: "S_3_2", allowNull: true, type: DataType.FLOAT(12) })
    s_3_2?: number;

    @Column({ field: "S_3_2_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_3_2Esd?: number;

    @Column({ field: "S_3_3", allowNull: true, type: DataType.FLOAT(12) })
    s_3_3?: number;

    @Column({ field: "S_3_3_esd", allowNull: true, type: DataType.FLOAT(12) })
    s_3_3Esd?: number;
}
