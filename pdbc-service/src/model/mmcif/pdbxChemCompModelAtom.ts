import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_model_atom", timestamps: false })
export class pdbxChemCompModelAtom extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "atom_id", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId!: string;

    @Column({ field: "ordinal_id", allowNull: true, type: DataType.INTEGER })
    ordinalId?: number;

    @Column({ field: "model_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    modelId!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    charge?: number;

    @Column({ field: "model_Cartn_x", allowNull: true, type: DataType.FLOAT(12) })
    modelCartnX?: number;

    @Column({ field: "model_Cartn_y", allowNull: true, type: DataType.FLOAT(12) })
    modelCartnY?: number;

    @Column({ field: "model_Cartn_z", allowNull: true, type: DataType.FLOAT(12) })
    modelCartnZ?: number;

    @Column({ field: "type_symbol", allowNull: true, type: DataType.STRING(10) })
    typeSymbol?: string;
}
