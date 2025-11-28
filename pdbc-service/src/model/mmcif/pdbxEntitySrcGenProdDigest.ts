import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_prod_digest", timestamps: false })
export class pdbxEntitySrcGenProdDigest extends Model {
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

    @Column({ field: "restriction_enzyme_1", allowNull: true, type: DataType.STRING(200) })
    restrictionEnzyme_1?: string;

    @Column({ field: "restriction_enzyme_2", allowNull: true, type: DataType.STRING(200) })
    restrictionEnzyme_2?: string;

    @Column({ field: "purification_details", allowNull: true, type: DataType.STRING(200) })
    purificationDetails?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    summary?: string;
}
