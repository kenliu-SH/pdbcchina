import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_fract", timestamps: false })
export class pdbxEntitySrcGenFract extends Model {
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

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    temperature?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "protein_location", allowNull: true, type: DataType.STRING(10) })
    proteinLocation?: string;

    @Column({ field: "protein_volume", allowNull: true, type: DataType.FLOAT(12) })
    proteinVolume?: number;

    @Column({ field: "protein_yield", allowNull: true, type: DataType.FLOAT(12) })
    proteinYield?: number;

    @Column({ field: "protein_yield_method", allowNull: true, type: DataType.STRING(200) })
    proteinYieldMethod?: string;
}
