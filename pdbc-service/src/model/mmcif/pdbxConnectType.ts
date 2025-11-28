import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_connect_type", timestamps: false })
export class pdbxConnectType extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "res_name", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    resName!: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    ndbTokenType?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    modified?: string;
}
