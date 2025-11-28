import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_exptl_pd", timestamps: false })
export class pdbxExptlPd extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "spec_preparation_pH", allowNull: true, type: DataType.FLOAT(12) })
    specPreparationPH?: number;

    @Column({ field: "spec_preparation_pH_range", allowNull: true, type: DataType.STRING(80) })
    specPreparationPHRange?: string;

    @Column({ field: "spec_preparation", allowNull: true, type: DataType.STRING(200) })
    specPreparation?: string;
}
