import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_coord", timestamps: false })
export class pdbxCoord extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "chain_atoms_Y_P", allowNull: true, type: DataType.STRING(10) })
    chainAtomsYP?: string;

    @Column({ field: "hydrogen_atoms_Y_N", allowNull: true, type: DataType.STRING(10) })
    hydrogenAtomsYN?: string;

    @Column({ field: "solvent_atoms_Y_N", allowNull: true, type: DataType.STRING(10) })
    solventAtomsYN?: string;

    @Column({ field: "structure_factors_Y_N", allowNull: true, type: DataType.STRING(10) })
    structureFactorsYN?: string;
}
