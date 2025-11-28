import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_ref_seq_feature_prop", timestamps: false })
export class pdbxStructRefSeqFeatureProp extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "feature_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    featureId!: number;

    @Column({ field: "property_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    propertyId!: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    value?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "beg_db_mon_id", allowNull: true, type: DataType.STRING(10) })
    begDbMonId?: string;

    @Column({ field: "end_db_mon_id", allowNull: true, type: DataType.STRING(10) })
    endDbMonId?: string;

    @Column({ field: "beg_db_seq_id", allowNull: true, type: DataType.INTEGER })
    begDbSeqId?: number;

    @Column({ field: "end_db_seq_id", allowNull: true, type: DataType.INTEGER })
    endDbSeqId?: number;
}
