import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_na_struct_keywds", timestamps: false })
export class pdbxNaStructKeywds extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "conformation_type", allowNull: true, type: DataType.STRING(80) })
    conformationType?: string;

    @Column({ field: "strand_description", allowNull: true, type: DataType.STRING(80) })
    strandDescription?: string;

    @Column({ field: "special_feature", allowNull: true, type: DataType.STRING(80) })
    specialFeature?: string;
}
