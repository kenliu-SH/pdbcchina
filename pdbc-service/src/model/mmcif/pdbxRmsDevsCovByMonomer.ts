import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_rms_devs_cov_by_monomer", timestamps: false })
export class pdbxRmsDevsCovByMonomer extends Model {
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

    @Column({ field: "rms_bonds", allowNull: true, type: DataType.FLOAT(12) })
    rmsBonds?: number;

    @Column({ field: "num_bonds", allowNull: true, type: DataType.INTEGER })
    numBonds?: number;

    @Column({ field: "rms_angles", allowNull: true, type: DataType.FLOAT(12) })
    rmsAngles?: number;

    @Column({ field: "num_angles", allowNull: true, type: DataType.INTEGER })
    numAngles?: number;
}
