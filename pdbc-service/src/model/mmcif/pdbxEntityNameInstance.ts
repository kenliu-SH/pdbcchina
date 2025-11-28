import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_name_instance", timestamps: false })
export class pdbxEntityNameInstance extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    name!: string;

    @Column({ field: "pdb_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbId!: string;

    @Column({ field: "rcsb_id", allowNull: true, type: DataType.STRING(10) })
    rcsbId?: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "pdb_chain_id", allowNull: true, type: DataType.STRING(10) })
    pdbChainId?: string;

    @Column({ field: "pdb_mol_id", allowNull: true, type: DataType.STRING(10) })
    pdbMolId?: string;
}
