import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_comp_chir_atom", timestamps: false })
export class chemCompChirAtom extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "atom_id", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId!: string;

    @Column({ field: "chir_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    chirId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    dev?: number;
}
