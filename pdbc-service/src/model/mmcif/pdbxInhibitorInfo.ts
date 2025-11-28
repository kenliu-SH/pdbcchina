import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_inhibitor_info", timestamps: false })
export class pdbxInhibitorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ field: "num_per_asym_unit", allowNull: true, type: DataType.INTEGER })
    numPerAsymUnit?: number;
}
