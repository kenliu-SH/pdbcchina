import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_depositor_info", timestamps: false })
export class pdbxChemCompDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "comp_id", allowNull: true, type: DataType.STRING(10) })
    compId?: string;

    @Column({ field: "alt_comp_id", allowNull: true, type: DataType.STRING(10) })
    altCompId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    formula?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    descriptor?: string;

    @Column({ field: "descriptor_type", allowNull: true, type: DataType.STRING(80) })
    descriptorType?: string;

    @Column({ field: "in_dictionary_flag", allowNull: true, type: DataType.STRING(10) })
    inDictionaryFlag?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
