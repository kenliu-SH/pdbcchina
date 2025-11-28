import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_standard_refln", timestamps: false })
export class diffrnStandardRefln extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    code!: string;

    @Column({ field: "index_h", allowNull: true, type: DataType.INTEGER })
    indexH?: number;

    @Column({ field: "index_k", allowNull: true, type: DataType.INTEGER })
    indexK?: number;

    @Column({ field: "index_l", allowNull: true, type: DataType.INTEGER })
    indexL?: number;
}
