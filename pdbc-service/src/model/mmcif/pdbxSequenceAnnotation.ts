import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_sequence_annotation", timestamps: false })
export class pdbxSequenceAnnotation extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdb_chain_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbChainId!: string;

    @Column({ field: "ncbi_taxid", allowNull: true, type: DataType.STRING(10) })
    ncbiTaxdeclareId?: string;
}
