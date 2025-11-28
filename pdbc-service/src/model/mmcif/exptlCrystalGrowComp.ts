import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "exptl_crystal_grow_comp", timestamps: false })
export class exptlCrystalGrowComp extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    conc?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(128) })
    name?: string;

    @Column({ field: "sol_id", allowNull: true, type: DataType.STRING(80) })
    solId?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    volume?: string;

    @Column({ field: "pdbx_conc_final", allowNull: true, type: DataType.STRING(80) })
    pdbxConcFinal?: string;

    @Column({ field: "pdbx_bath", allowNull: true, type: DataType.STRING(80) })
    pdbxBath?: string;

    @Column({ field: "pdbx_salt", allowNull: true, type: DataType.STRING(80) })
    pdbxSalt?: string;

    @Column({ field: "pdbx_soak_salt", allowNull: true, type: DataType.STRING(80) })
    pdbxSoakSalt?: string;

    @Column({ field: "pdbx_soak_solv", allowNull: true, type: DataType.STRING(80) })
    pdbxSoakSolv?: string;

    @Column({ field: "pdbx_solv", allowNull: true, type: DataType.STRING(80) })
    pdbxSolv?: string;
}
