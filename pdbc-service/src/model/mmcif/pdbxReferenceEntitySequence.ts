import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_entity_sequence", timestamps: false })
export class pdbxReferenceEntitySequence extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    prdId!: string;

    @Column({ field: "ref_entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    refEntityId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ field: "NRP_flag", allowNull: true, type: DataType.STRING(10) })
    nrpFlag?: string;

    @Column({ field: "one_letter_codes", allowNull: true, type: DataType.STRING(80) })
    oneLetterCodes?: string;
}
