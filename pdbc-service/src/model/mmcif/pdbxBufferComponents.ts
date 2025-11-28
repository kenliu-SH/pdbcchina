import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_buffer_components", timestamps: false })
export class pdbxBufferComponents extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "buffer_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    bufferId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    volume?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    conc?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "conc_units", allowNull: true, type: DataType.STRING(10) })
    concUnits?: string;

    @Column({ field: "isotopic_labeling", allowNull: true, type: DataType.STRING(80) })
    isotopicLabeling?: string;
}
