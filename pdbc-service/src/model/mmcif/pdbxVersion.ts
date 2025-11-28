import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_version", timestamps: false })
export class pdbxVersion extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "revision_date", allowNull: true, type: DataType.DATE })
    revisionDate?: Date;

    @Column({ field: "major_version", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    majorVersion!: number;

    @Column({ field: "minor_version", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    minorVersion!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "revision_type", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    revisionType!: string;
}
