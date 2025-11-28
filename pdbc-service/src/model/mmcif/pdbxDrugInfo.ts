import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_drug_info", timestamps: false })
export class pdbxDrugInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    name!: string;

    @Column({ field: "num_per_asym_unit", allowNull: true, type: DataType.INTEGER })
    numPerAsymUnit?: number;

    @Column({ field: "num_of_whole_molecule", allowNull: true, type: DataType.INTEGER })
    numOfWholeMolecule?: number;

    @Column({ field: "size_of_molecule_per_asym_unit", allowNull: true, type: DataType.STRING(10) })
    sizeOfMoleculePerAsymUnit?: string;
}
