import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_entity_src_gen_pure", timestamps: false })
export class pdbxEntitySrcGenPure extends Model {
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

    @Column({ field: "product_id", allowNull: true, type: DataType.STRING(10) })
    productId?: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "conc_device_id", allowNull: true, type: DataType.STRING(10) })
    concDeviceId?: string;

    @Column({ field: "conc_details", allowNull: true, type: DataType.STRING(200) })
    concDetails?: string;

    @Column({ field: "conc_assay_method", allowNull: true, type: DataType.STRING(200) })
    concAssayMethod?: string;

    @Column({ field: "protein_concentration", allowNull: true, type: DataType.FLOAT(12) })
    proteinConcentration?: number;

    @Column({ field: "protein_yield", allowNull: true, type: DataType.FLOAT(12) })
    proteinYield?: number;

    @Column({ field: "protein_purity", allowNull: true, type: DataType.FLOAT(12) })
    proteinPurity?: number;

    @Column({ field: "protein_oligomeric_state", allowNull: true, type: DataType.INTEGER })
    proteinOligomericState?: number;

    @Column({ field: "storage_buffer_id", allowNull: true, type: DataType.STRING(10) })
    storageBufferId?: string;

    @Column({ field: "storage_temperature", allowNull: true, type: DataType.FLOAT(12) })
    storageTemperature?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    summary?: string;
}
