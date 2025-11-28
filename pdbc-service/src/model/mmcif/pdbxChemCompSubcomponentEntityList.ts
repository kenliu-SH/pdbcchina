import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_subcomponent_entity_list", timestamps: false })
export class pdbxChemCompSubcomponentEntityList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "parent_comp_id", allowNull: true, type: DataType.STRING(10) })
    parentCompId?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    class?: string;
}
