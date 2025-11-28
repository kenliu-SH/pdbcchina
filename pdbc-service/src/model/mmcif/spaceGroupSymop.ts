import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "space_group_symop", timestamps: false })
export class spaceGroupSymop extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "operation_xyz", allowNull: true, type: DataType.STRING(80) })
    operationXyz?: string;

    @Column({ field: "sg_id", allowNull: true, type: DataType.STRING(10) })
    sgId?: string;
}
