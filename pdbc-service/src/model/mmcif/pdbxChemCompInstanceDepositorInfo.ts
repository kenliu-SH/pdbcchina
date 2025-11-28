import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_instance_depositor_info", timestamps: false })
export class pdbxChemCompInstanceDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "comp_id", allowNull: true, type: DataType.STRING(10) })
    compId?: string;

    @Column({ field: "PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbInsCode?: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "in_polymer_flag", allowNull: true, type: DataType.STRING(10) })
    inPolymerFlag?: string;

    @Column({ field: "author_provided_flag", allowNull: true, type: DataType.STRING(10) })
    authorProvidedFlag?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    formula?: string;
}
