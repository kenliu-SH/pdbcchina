import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_constraint_file", timestamps: false })
export class pdbxNmrConstraintFile extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "constraint_filename", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    constraintFilename!: string;

    @Column({ field: "constraint_number", allowNull: true, type: DataType.INTEGER })
    constraintNumber?: number;

    @Column({ field: "constraint_subtype", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    constraintSubtype!: string;

    @Column({ field: "constraint_type", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    constraintType!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    declare id?: number;

    @Column({ field: "software_name", allowNull: true, type: DataType.STRING(80) })
    softwareName?: string;

    @Column({ field: "software_ordinal", allowNull: true, type: DataType.INTEGER })
    softwareOrdinal?: number;
}
