import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_lysis", timestamps: false })
export class pdbxEntitySrcGenLysis extends Model {
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

    @Column({ field: "next_step_id", allowNull: true, type: DataType.INTEGER })
    nextStepId?: number;

    @Column({ field: "end_construct_id", allowNull: true, type: DataType.STRING(10) })
    endConstructId?: string;

    @Column({ field: "robot_id", allowNull: true, type: DataType.STRING(10) })
    robotId?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    method?: string;

    @Column({ field: "buffer_id", allowNull: true, type: DataType.STRING(10) })
    bufferId?: string;

    @Column({ field: "buffer_volume", allowNull: true, type: DataType.FLOAT(12) })
    bufferVolume?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    temperature?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    time?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
