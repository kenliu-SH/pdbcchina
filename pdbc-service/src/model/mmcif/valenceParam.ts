import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "valence_param", timestamps: false })
export class valenceParam extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atom_1!: string;

    @Column({ field: "atom_1_valence", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atom_1Valence!: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atom_2!: string;

    @Column({ field: "atom_2_valence", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atom_2Valence!: number;

    @Column({ field: "B", allowNull: true, type: DataType.FLOAT(12) })
    b?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    declare id?: string;

    @Column({ field: "ref_id", allowNull: true, type: DataType.STRING(10) })
    refId?: string;

    @Column({ field: "Ro", allowNull: true, type: DataType.FLOAT(12) })
    ro?: number;
}
