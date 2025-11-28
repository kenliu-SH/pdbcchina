import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_ncs_virus_gen", timestamps: false })
export class pdbxStructNcsVirusGen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "oper_id", allowNull: true, type: DataType.STRING(10) })
    operId?: string;

    @Column({ field: "asym_id", allowNull: true, type: DataType.STRING(10) })
    asymId?: string;

    @Column({ field: "pdb_chain_id", allowNull: true, type: DataType.STRING(10) })
    pdbChainId?: string;
}
