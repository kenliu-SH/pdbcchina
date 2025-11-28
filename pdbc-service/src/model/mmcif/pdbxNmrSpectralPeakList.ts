import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_spectral_peak_list", timestamps: false })
export class pdbxNmrSpectralPeakList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "data_file_name", allowNull: true, type: DataType.STRING(80) })
    dataFileName?: string;

    @Column({ field: "solution_id", allowNull: true, type: DataType.INTEGER })
    solutionId?: number;

    @Column({ field: "conditions_id", allowNull: true, type: DataType.INTEGER })
    conditionsId?: number;

    @Column({ field: "experiment_id", allowNull: true, type: DataType.INTEGER })
    experimentId?: number;

    @Column({ field: "number_of_spectral_dimensions", allowNull: true, type: DataType.INTEGER })
    numberOfSpectralDimensions?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "text_data_format", allowNull: true, type: DataType.STRING(80) })
    textDataFormat?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    label?: string;

    @Column({ field: "conditions_label", allowNull: true, type: DataType.STRING(80) })
    conditionsLabel?: string;
}
