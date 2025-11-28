import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_site", timestamps: false })
export class structSite extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(1023) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "pdbx_num_residues", allowNull: true, type: DataType.INTEGER })
    pdbxNumResidues?: number;

    @Column({ field: "pdbx_evidence_code", allowNull: true, type: DataType.STRING(200) })
    pdbxEvidenceCode?: string;

    @Column({ field: "pdbx_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthAsymId?: string;

    @Column({ field: "pdbx_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthCompId?: string;

    @Column({ field: "pdbx_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthSeqId?: string;

    @Column({ field: "pdbx_auth_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthInsCode?: string;
}
