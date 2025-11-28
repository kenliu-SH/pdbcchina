import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_supersede", timestamps: false })
export class emSupersede extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(15) })
    entry?: string;

    @Column({ primaryKey: true, type: DataType.STRING(15) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;
}
