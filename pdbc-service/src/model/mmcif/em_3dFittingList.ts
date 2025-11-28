import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "em_3d_fitting_list", timestamps: false })
export class em_3dFittingList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;
    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;
    @Column({ field: "3d_fitting_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    _3dFittingId!: string;
    @Column({ field: "pdb_entry_id", allowNull: true, type: DataType.STRING(255) })
    pdbEntryId?: string;
    @Column({ field: "pdb_chain_id", allowNull: true, type: DataType.STRING(10) })
    pdbChainId?: string;
    @Column({ field: "pdb_chain_residue_range", allowNull: true, type: DataType.STRING(20) })
    pdbChainResidueRange?: string;
    @Column({ allowNull: true, type: DataType.STRING(1023) })
    details?: string;
}