import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_clone_ligation", timestamps: false })
export class pdbxEntitySrcGenCloneLigation extends Model {
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

    @Column({ field: "cleavage_enzymes", allowNull: true, type: DataType.STRING(200) })
    cleavageEnzymes?: string;

    @Column({ field: "ligation_enzymes", allowNull: true, type: DataType.STRING(200) })
    ligationEnzymes?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    temperature?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    time?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
