import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_na_strand_info", timestamps: false })
export class pdbxNaStrandInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "num_of_NA_strands_per_asym_unit", allowNull: true, type: DataType.INTEGER })
    numOfNaStrandsPerAsymUnit?: number;

    @Column({ field: "num_of_NA_strands_per_biol_unit", allowNull: true, type: DataType.INTEGER })
    numOfNaStrandsPerBiolUnit?: number;

    @Column({ field: "fract_NA_strand_per_asym_unit", allowNull: true, type: DataType.STRING(10) })
    fractNaStrandPerAsymUnit?: string;
}
