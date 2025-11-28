import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_point_symmetry", timestamps: false })
export class pdbxPointSymmetry extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "Schoenflies_symbol", allowNull: true, type: DataType.STRING(10) })
    schoenfliesSymbol?: string;

    @Column({ field: "circular_symmetry", allowNull: true, type: DataType.INTEGER })
    circularSymmetry?: number;

    @Column({ field: "H_M_notation", allowNull: true, type: DataType.STRING(10) })
    hMNotation?: string;
}
