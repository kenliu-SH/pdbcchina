import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_pack_gen", timestamps: false })
export class pdbxStructPackGen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    asymId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    symmetry!: string;

    @Column({ field: "color_red", allowNull: true, type: DataType.FLOAT(12) })
    colorRed?: number;

    @Column({ field: "color_green", allowNull: true, type: DataType.FLOAT(12) })
    colorGreen?: number;

    @Column({ field: "color_blue", allowNull: true, type: DataType.FLOAT(12) })
    colorBlue?: number;

    @Column({ field: "crystal_type", allowNull: true, type: DataType.INTEGER })
    crystalType?: number;

    @Column({ field: "packing_type", allowNull: true, type: DataType.INTEGER })
    packingType?: number;
}
