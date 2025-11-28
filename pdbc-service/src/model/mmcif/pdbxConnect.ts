import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_connect", timestamps: false })
export class pdbxConnect extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "res_name", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    resName!: string;

    @Column({ field: "hetgroup_name", allowNull: true, type: DataType.STRING(80) })
    hetgroupName?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    formul?: string;

    @Column({ field: "hetgroup_chemical_name", allowNull: true, type: DataType.STRING(200) })
    hetgroupChemicalName?: string;

    @Column({ field: "parent_residue", allowNull: true, type: DataType.STRING(10) })
    parentResidue?: string;

    @Column({ field: "formal_charge", allowNull: true, type: DataType.INTEGER })
    formalCharge?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    class_1?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    class_2?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    status?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "modified_date", allowNull: true, type: DataType.DATE })
    modifiedDate?: Date;
}
