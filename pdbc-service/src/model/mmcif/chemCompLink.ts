import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_comp_link", timestamps: false })
export class chemCompLink extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "type_comp_1", allowNull: true, type: DataType.STRING(80) })
    typeComp_1?: string;

    @Column({ field: "type_comp_2", allowNull: true, type: DataType.STRING(80) })
    typeComp_2?: string;

    @Column({ field: "link_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
