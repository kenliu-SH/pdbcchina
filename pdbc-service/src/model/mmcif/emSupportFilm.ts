import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_support_film", timestamps: false })
export class emSupportFilm extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    material?: string;

    @Column({ field: "sample_support_id", allowNull: true, type: DataType.STRING(10) })
    sampleSupportId?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    thickness?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    topology?: string;
}
