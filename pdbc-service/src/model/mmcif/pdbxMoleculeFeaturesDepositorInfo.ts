import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_molecule_features_depositor_info", timestamps: false })
export class pdbxMoleculeFeaturesDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    class?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
