import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_sugar_phosphate_geometry", timestamps: false })
export class pdbxSugarPhosphateGeometry extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "model_id", allowNull: true, type: DataType.INTEGER })
    modelId?: number;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "label_asym_id", allowNull: true, type: DataType.STRING(10) })
    labelAsymId?: string;

    @Column({ field: "label_comp_id", allowNull: true, type: DataType.STRING(10) })
    labelCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;

    @Column({ field: "neighbor_comp_id_5prime", allowNull: true, type: DataType.STRING(10) })
    neighborCompId_5prime?: string;

    @Column({ field: "neighbor_comp_id_3prime", allowNull: true, type: DataType.STRING(10) })
    neighborCompId_3prime?: string;

    @Column({ field: "o3_p_o5_c5", allowNull: true, type: DataType.FLOAT(12) })
    o3PO5C5?: number;

    @Column({ field: "p_o5_c5_c4", allowNull: true, type: DataType.FLOAT(12) })
    pO5C5C4?: number;

    @Column({ field: "o5_c5_c4_c3", allowNull: true, type: DataType.FLOAT(12) })
    o5C5C4C3?: number;

    @Column({ field: "c5_c4_c3_o3", allowNull: true, type: DataType.FLOAT(12) })
    c5C4C3O3?: number;

    @Column({ field: "c4_c3_o3_p", allowNull: true, type: DataType.FLOAT(12) })
    c4C3O3P?: number;

    @Column({ field: "c3_o3_p_o5", allowNull: true, type: DataType.FLOAT(12) })
    c3O3PO5?: number;

    @Column({ field: "c4_o4_c1_n1_9", allowNull: true, type: DataType.FLOAT(12) })
    c4O4C1N1_9?: number;

    @Column({ field: "o4_c1_n1_9_c2_4", allowNull: true, type: DataType.FLOAT(12) })
    o4C1N1_9C2_4?: number;

    @Column({ field: "o4_c1_n1_9_c6_8", allowNull: true, type: DataType.FLOAT(12) })
    o4C1N1_9C6_8?: number;

    @Column({ field: "c4_o4_c1_c2", allowNull: true, type: DataType.FLOAT(12) })
    c4O4C1C2?: number;

    @Column({ field: "o4_c1_c2_c3", allowNull: true, type: DataType.FLOAT(12) })
    o4C1C2C3?: number;

    @Column({ field: "c1_c2_c3_c4", allowNull: true, type: DataType.FLOAT(12) })
    c1C2C3C4?: number;

    @Column({ field: "c2_c3_c4_o4", allowNull: true, type: DataType.FLOAT(12) })
    c2C3C4O4?: number;

    @Column({ field: "c3_c4_o4_c1", allowNull: true, type: DataType.FLOAT(12) })
    c3C4O4C1?: number;

    @Column({ field: "c5_c4_c3_c2", allowNull: true, type: DataType.FLOAT(12) })
    c5C4C3C2?: number;

    @Column({ field: "o4_c4_c3_o3", allowNull: true, type: DataType.FLOAT(12) })
    o4C4C3O3?: number;

    @Column({ field: "o3_c3_c2_o2", allowNull: true, type: DataType.FLOAT(12) })
    o3C3C2O2?: number;

    @Column({ field: "o5_c5_c4_o4", allowNull: true, type: DataType.FLOAT(12) })
    o5C5C4O4?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    pseudorot?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    maxtorsion?: number;

    @Column({ field: "next_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    nextLabelCompId?: string;

    @Column({ field: "next_label_seq_id", allowNull: true, type: DataType.INTEGER })
    nextLabelSeqId?: number;

    @Column({ field: "next_o3_p_o5_c5", allowNull: true, type: DataType.FLOAT(12) })
    nextO3PO5C5?: number;

    @Column({ field: "next_p_o5_c5_c4", allowNull: true, type: DataType.FLOAT(12) })
    nextPO5C5C4?: number;

    @Column({ field: "next_o5_c5_c4_c3", allowNull: true, type: DataType.FLOAT(12) })
    nextO5C5C4C3?: number;

    @Column({ field: "next_c5_c4_c3_o3", allowNull: true, type: DataType.FLOAT(12) })
    nextC5C4C3O3?: number;

    @Column({ field: "next_c4_c3_o3_p", allowNull: true, type: DataType.FLOAT(12) })
    nextC4C3O3P?: number;

    @Column({ field: "next_c3_o3_p_o5", allowNull: true, type: DataType.FLOAT(12) })
    nextC3O3PO5?: number;

    @Column({ field: "next_c4_o4_c1_n1_9", allowNull: true, type: DataType.FLOAT(12) })
    nextC4O4C1N1_9?: number;

    @Column({ field: "next_o4_c1_n1_9_c2_4", allowNull: true, type: DataType.FLOAT(12) })
    nextO4C1N1_9C2_4?: number;

    @Column({ field: "c1_c2", allowNull: true, type: DataType.FLOAT(12) })
    c1C2?: number;

    @Column({ field: "c2_c3", allowNull: true, type: DataType.FLOAT(12) })
    c2C3?: number;

    @Column({ field: "c3_c4", allowNull: true, type: DataType.FLOAT(12) })
    c3C4?: number;

    @Column({ field: "c4_o4", allowNull: true, type: DataType.FLOAT(12) })
    c4O4?: number;

    @Column({ field: "o4_c1", allowNull: true, type: DataType.FLOAT(12) })
    o4C1?: number;

    @Column({ field: "p_o5", allowNull: true, type: DataType.FLOAT(12) })
    pO5?: number;

    @Column({ field: "o5_c5", allowNull: true, type: DataType.FLOAT(12) })
    o5C5?: number;

    @Column({ field: "c5_c4", allowNull: true, type: DataType.FLOAT(12) })
    c5C4?: number;

    @Column({ field: "c3_o3", allowNull: true, type: DataType.FLOAT(12) })
    c3O3?: number;

    @Column({ field: "o3_p", allowNull: true, type: DataType.FLOAT(12) })
    o3P?: number;

    @Column({ field: "p_o1p", allowNull: true, type: DataType.FLOAT(12) })
    pO1p?: number;

    @Column({ field: "p_o2p", allowNull: true, type: DataType.FLOAT(12) })
    pO2p?: number;

    @Column({ field: "c1_n9_1", allowNull: true, type: DataType.FLOAT(12) })
    c1N9_1?: number;

    @Column({ field: "n1_c2", allowNull: true, type: DataType.FLOAT(12) })
    n1C2?: number;

    @Column({ field: "n1_c6", allowNull: true, type: DataType.FLOAT(12) })
    n1C6?: number;

    @Column({ field: "n9_c4", allowNull: true, type: DataType.FLOAT(12) })
    n9C4?: number;

    @Column({ field: "n9_c8", allowNull: true, type: DataType.FLOAT(12) })
    n9C8?: number;

    @Column({ field: "c1_c2_c3", allowNull: true, type: DataType.FLOAT(12) })
    c1C2C3?: number;

    @Column({ field: "c2_c3_c4", allowNull: true, type: DataType.FLOAT(12) })
    c2C3C4?: number;

    @Column({ field: "c3_c4_o4", allowNull: true, type: DataType.FLOAT(12) })
    c3C4O4?: number;

    @Column({ field: "c4_o4_c1", allowNull: true, type: DataType.FLOAT(12) })
    c4O4C1?: number;

    @Column({ field: "o4_c1_c2", allowNull: true, type: DataType.FLOAT(12) })
    o4C1C2?: number;

    @Column({ field: "p_o5_c5", allowNull: true, type: DataType.FLOAT(12) })
    pO5C5?: number;

    @Column({ field: "o5_c5_c4", allowNull: true, type: DataType.FLOAT(12) })
    o5C5C4?: number;

    @Column({ field: "c5_c4_c3", allowNull: true, type: DataType.FLOAT(12) })
    c5C4C3?: number;

    @Column({ field: "c4_c3_o3", allowNull: true, type: DataType.FLOAT(12) })
    c4C3O3?: number;

    @Column({ field: "c3_o3_p", allowNull: true, type: DataType.FLOAT(12) })
    c3O3P?: number;

    @Column({ field: "o3_p_o5", allowNull: true, type: DataType.FLOAT(12) })
    o3PO5?: number;

    @Column({ field: "o4_c1_n1_9", allowNull: true, type: DataType.FLOAT(12) })
    o4C1N1_9?: number;

    @Column({ field: "c1_n1_9_c2_4", allowNull: true, type: DataType.FLOAT(12) })
    c1N1_9C2_4?: number;

    @Column({ field: "c5_c4_o4", allowNull: true, type: DataType.FLOAT(12) })
    c5C4O4?: number;

    @Column({ field: "c2_c3_o3", allowNull: true, type: DataType.FLOAT(12) })
    c2C3O3?: number;

    @Column({ field: "o1p_p_o2p", allowNull: true, type: DataType.FLOAT(12) })
    o1pPO2p?: number;

    @Column({ field: "c2_c1_n1_9", allowNull: true, type: DataType.FLOAT(12) })
    c2C1N1_9?: number;

    @Column({ field: "c1_n1_9_c6_8", allowNull: true, type: DataType.FLOAT(12) })
    c1N1_9C6_8?: number;
}
