import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "chem_comp_chir", timestamps: false })
export class chemCompChir extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "atom_id", allowNull: true, type: DataType.STRING(6) })
    atomId?: string;

    @Column({ field: "atom_config", allowNull: true, type: DataType.STRING(10) })
    atomConfig?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "number_atoms_all", allowNull: true, type: DataType.INTEGER })
    numberAtomsAll?: number;

    @Column({ field: "number_atoms_nh", allowNull: true, type: DataType.INTEGER })
    numberAtomsNh?: number;

    @Column({ field: "volume_flag", allowNull: true, type: DataType.STRING(10) })
    volumeFlag?: string;

    @Column({ field: "volume_three", allowNull: true, type: DataType.FLOAT(12) })
    volumeThree?: number;

    @Column({ field: "volume_three_esd", allowNull: true, type: DataType.FLOAT(12) })
    volumeThreeEsd?: number;
}
