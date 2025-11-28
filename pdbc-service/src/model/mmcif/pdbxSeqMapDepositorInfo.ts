import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_seq_map_depositor_info", timestamps: false })
export class pdbxSeqMapDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "auth_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    authAsymId!: string;

    @Column({ field: "one_letter_code", allowNull: true, type: DataType.STRING(200) })
    oneLetterCode?: string;

    @Column({ field: "one_letter_code_mod", allowNull: true, type: DataType.STRING(200) })
    oneLetterCodeMod?: string;
}
