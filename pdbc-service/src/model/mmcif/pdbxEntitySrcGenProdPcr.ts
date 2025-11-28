import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_prod_pcr", timestamps: false })
export class pdbxEntitySrcGenProdPcr extends Model {
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

    @Column({ field: "forward_primer_id", allowNull: true, type: DataType.STRING(10) })
    forwardPrimerId?: string;

    @Column({ field: "reverse_primer_id", allowNull: true, type: DataType.STRING(10) })
    reversePrimerId?: string;

    @Column({ field: "reaction_details", allowNull: true, type: DataType.STRING(200) })
    reactionDetails?: string;

    @Column({ field: "purification_details", allowNull: true, type: DataType.STRING(200) })
    purificationDetails?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    summary?: string;
}
