import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "space_group", timestamps: false })
export class spaceGroup extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_system", allowNull: true, type: DataType.STRING(13) })
    crystalSystem?: string;

    @Column({ primaryKey: true, type: DataType.STRING(13) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "IT_number", allowNull: true, type: DataType.INTEGER })
    itNumber?: number;

    @Column({ field: "name_Hall", allowNull: true, type: DataType.STRING(80) })
    nameHall?: string;

    @Column({ field: "name_H_M_alt", allowNull: true, type: DataType.STRING(80) })
    nameHMAlt?: string;
}
