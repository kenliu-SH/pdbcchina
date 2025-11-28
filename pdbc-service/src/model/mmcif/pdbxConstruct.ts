import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_construct", timestamps: false })
export class pdbxConstruct extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", allowNull: true, type: DataType.STRING(10) })
    entryId?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    organisation?: string;

    @Column({ field: "entity_id", allowNull: true, type: DataType.STRING(10) })
    entityId?: string;

    @Column({ field: "robot_id", allowNull: true, type: DataType.STRING(10) })
    robotId?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    class?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    seq?: string;
}
