import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_B_iso", timestamps: false })
export class refineBIso extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdbx_refine_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxRefineId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    class!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(12) })
    treatment?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    value?: number;

    @Column({ field: "pdbx_residue_name", allowNull: true, type: DataType.STRING(10) })
    pdbxResidueName?: string;

    @Column({ field: "pdbx_strand", allowNull: true, type: DataType.STRING(10) })
    pdbxStrand?: string;

    @Column({ field: "pdbx_residue_num", allowNull: true, type: DataType.STRING(10) })
    pdbxResidueNum?: string;
}
