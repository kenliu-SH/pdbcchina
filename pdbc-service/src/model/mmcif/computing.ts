import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "computing", timestamps: false })
export class computing extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "cell_refinement", allowNull: true, type: DataType.STRING(200) })
    cellRefinement?: string;

    @Column({ field: "data_collection", allowNull: true, type: DataType.STRING(200) })
    dataCollection?: string;

    @Column({ field: "data_reduction", allowNull: true, type: DataType.STRING(200) })
    dataReduction?: string;

    @Column({ field: "molecular_graphics", allowNull: true, type: DataType.STRING(200) })
    molecularGraphics?: string;

    @Column({ field: "publication_material", allowNull: true, type: DataType.STRING(200) })
    publicationMaterial?: string;

    @Column({ field: "structure_refinement", allowNull: true, type: DataType.STRING(200) })
    structureRefinement?: string;

    @Column({ field: "structure_solution", allowNull: true, type: DataType.STRING(200) })
    structureSolution?: string;

    @Column({ field: "pdbx_structure_refinement_method", allowNull: true, type: DataType.STRING(200) })
    pdbxStructureRefinementMethod?: string;

    @Column({ field: "pdbx_data_reduction_ii", allowNull: true, type: DataType.STRING(200) })
    pdbxDataReductionIi?: string;

    @Column({ field: "pdbx_data_reduction_ds", allowNull: true, type: DataType.STRING(200) })
    pdbxDataReductionDs?: string;
}
