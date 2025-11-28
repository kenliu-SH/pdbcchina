import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_site_view", timestamps: false })
export class structSiteView extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "site_id", allowNull: true, type: DataType.STRING(80) })
    siteId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "rot_matrix_1_1", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_1_1?: number;

    @Column({ field: "rot_matrix_1_2", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_1_2?: number;

    @Column({ field: "rot_matrix_1_3", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_1_3?: number;

    @Column({ field: "rot_matrix_2_1", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_2_1?: number;

    @Column({ field: "rot_matrix_2_2", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_2_2?: number;

    @Column({ field: "rot_matrix_2_3", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_2_3?: number;

    @Column({ field: "rot_matrix_3_1", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_3_1?: number;

    @Column({ field: "rot_matrix_3_2", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_3_2?: number;

    @Column({ field: "rot_matrix_3_3", allowNull: true, type: DataType.FLOAT(12) })
    rotMatrix_3_3?: number;
}
