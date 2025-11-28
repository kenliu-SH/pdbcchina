import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nonstandard_list", timestamps: false })
export class pdbxNonstandardList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelAsymId!: string;

    @Column({ field: "label_seq_num", allowNull: true, type: DataType.STRING(10) })
    labelSeqNum?: string;

    @Column({ field: "label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelSeqId!: number;

    @Column({ field: "ins_code", allowNull: true, type: DataType.STRING(10) })
    insCode?: string;

    @Column({ field: "number_atoms_nh", allowNull: true, type: DataType.INTEGER })
    numberAtomsNh?: number;
}
