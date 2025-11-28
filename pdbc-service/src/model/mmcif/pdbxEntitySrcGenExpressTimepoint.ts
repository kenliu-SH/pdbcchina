import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_express_timepoint", timestamps: false })
export class pdbxEntitySrcGenExpressTimepoint extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ field: "step_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    stepId!: number;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    serial!: number;

    @Column({ field: "OD", allowNull: true, type: DataType.INTEGER })
    od?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    time?: number;
}
