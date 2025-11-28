import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_hybrid", timestamps: false })
export class pdbxHybrid extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "sugar_name", allowNull: true, type: DataType.STRING(80) })
    sugarName?: string;

    @Column({ field: "strand_id", allowNull: true, type: DataType.STRING(10) })
    strandId?: string;

    @Column({ field: "residue_names", allowNull: true, type: DataType.STRING(80) })
    residueNames?: string;
}
