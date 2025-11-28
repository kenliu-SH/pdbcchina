import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_connect_atom", timestamps: false })
export class pdbxConnectAtom extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "res_name", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    resName!: string;

    @Column({ field: "atom_name", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomName!: string;

    @Column({ field: "connect_to", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    connectTo!: string;

    @Column({ field: "type_symbol", allowNull: true, type: DataType.STRING(10) })
    typeSymbol?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    charge?: number;

    @Column({ field: "bond_type", allowNull: true, type: DataType.STRING(10) })
    bondType?: string;

    @Column({ field: "align_pos", allowNull: true, type: DataType.INTEGER })
    alignPos?: number;
}
