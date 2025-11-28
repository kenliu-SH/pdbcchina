import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_bond_distance_limits", timestamps: false })
export class pdbxBondDistanceLimits extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "atom_type_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomType_1!: string;

    @Column({ field: "atom_type_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomType_2!: string;

    @Column({ field: "lower_limit", allowNull: true, type: DataType.FLOAT(12) })
    lowerLimit?: number;

    @Column({ field: "upper_limit", allowNull: true, type: DataType.FLOAT(12) })
    upperLimit?: number;
}
