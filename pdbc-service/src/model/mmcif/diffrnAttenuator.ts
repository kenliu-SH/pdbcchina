import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_attenuator", timestamps: false })
export class diffrnAttenuator extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    code!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    material?: string;
}
