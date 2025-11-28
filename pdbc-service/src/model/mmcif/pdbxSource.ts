import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_source", timestamps: false })
export class pdbxSource extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "src_method", primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    srcMethod!: string;
}
