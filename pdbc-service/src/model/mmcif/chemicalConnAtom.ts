import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chemical_conn_atom", timestamps: false })
export class chemicalConnAtom extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "type_symbol", allowNull: true, type: DataType.STRING(10) })
    typeSymbol?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    charge?: number;

    @Column({ field: "display_x", allowNull: true, type: DataType.FLOAT(12) })
    displayX?: number;

    @Column({ field: "display_y", allowNull: true, type: DataType.FLOAT(12) })
    displayY?: number;

    @Column({ field: "NCA", allowNull: true, type: DataType.INTEGER })
    nca?: number;

    @Column({ field: "NH", allowNull: true, type: DataType.INTEGER })
    nh?: number;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    number!: number;
}
