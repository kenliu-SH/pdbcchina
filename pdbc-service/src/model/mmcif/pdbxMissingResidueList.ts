import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_missing_residue_list", timestamps: false })
export class pdbxMissingResidueList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdb_model_id", allowNull: true, type: DataType.INTEGER })
    pdbModelId?: number;

    @Column({ field: "pdb_chain_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbChainId!: string;

    @Column({ field: "pdb_residue_name", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbResidueName!: string;

    @Column({ field: "pdb_residue_number", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbResidueNumber!: string;

    @Column({ field: "pdb_insertion_code", allowNull: true, type: DataType.STRING(10) })
    pdbInsertionCode?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;
}
