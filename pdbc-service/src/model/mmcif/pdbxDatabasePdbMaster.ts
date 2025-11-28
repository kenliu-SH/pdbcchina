import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_database_PDB_master", timestamps: false })
export class pdbxDatabasePdbMaster extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "num_remark", allowNull: true, type: DataType.INTEGER })
    numRemark?: number;

    @Column({ field: "num_ftnote", allowNull: true, type: DataType.INTEGER })
    numFtnote?: number;

    @Column({ field: "num_het", allowNull: true, type: DataType.INTEGER })
    numHet?: number;

    @Column({ field: "num_helix", allowNull: true, type: DataType.INTEGER })
    numHelix?: number;

    @Column({ field: "num_sheet", allowNull: true, type: DataType.INTEGER })
    numSheet?: number;

    @Column({ field: "num_turn", allowNull: true, type: DataType.INTEGER })
    numTurn?: number;

    @Column({ field: "num_site", allowNull: true, type: DataType.INTEGER })
    numSite?: number;

    @Column({ field: "num_trans", allowNull: true, type: DataType.INTEGER })
    numTrans?: number;

    @Column({ field: "num_coord", allowNull: true, type: DataType.INTEGER })
    numCoord?: number;

    @Column({ field: "num_ter", allowNull: true, type: DataType.INTEGER })
    numTer?: number;

    @Column({ field: "num_conect", allowNull: true, type: DataType.INTEGER })
    numConect?: number;

    @Column({ field: "num_seqres", allowNull: true, type: DataType.INTEGER })
    numSeqres?: number;
}
