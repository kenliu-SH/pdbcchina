import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_rms_devs_covalent", timestamps: false })
export class pdbxRmsDevsCovalent extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "rms_bonds", allowNull: true, type: DataType.FLOAT(12) })
    rmsBonds?: number;

    @Column({ field: "num_bonds", allowNull: true, type: DataType.INTEGER })
    numBonds?: number;

    @Column({ field: "rms_bonds_base", allowNull: true, type: DataType.FLOAT(12) })
    rmsBondsBase?: number;

    @Column({ field: "num_bonds_base", allowNull: true, type: DataType.INTEGER })
    numBondsBase?: number;

    @Column({ field: "rms_bonds_sugar", allowNull: true, type: DataType.FLOAT(12) })
    rmsBondsSugar?: number;

    @Column({ field: "num_bonds_sugar", allowNull: true, type: DataType.INTEGER })
    numBondsSugar?: number;

    @Column({ field: "rms_bonds_phosphate", allowNull: true, type: DataType.FLOAT(12) })
    rmsBondsPhosphate?: number;

    @Column({ field: "num_bonds_phosphate", allowNull: true, type: DataType.INTEGER })
    numBondsPhosphate?: number;

    @Column({ field: "rms_angles", allowNull: true, type: DataType.FLOAT(12) })
    rmsAngles?: number;

    @Column({ field: "num_angles", allowNull: true, type: DataType.INTEGER })
    numAngles?: number;

    @Column({ field: "rms_angles_base", allowNull: true, type: DataType.FLOAT(12) })
    rmsAnglesBase?: number;

    @Column({ field: "num_angles_base", allowNull: true, type: DataType.INTEGER })
    numAnglesBase?: number;

    @Column({ field: "rms_angles_sugar", allowNull: true, type: DataType.FLOAT(12) })
    rmsAnglesSugar?: number;

    @Column({ field: "num_angles_sugar", allowNull: true, type: DataType.INTEGER })
    numAnglesSugar?: number;

    @Column({ field: "rms_angles_phosphate", allowNull: true, type: DataType.FLOAT(12) })
    rmsAnglesPhosphate?: number;

    @Column({ field: "num_angles_phosphate", allowNull: true, type: DataType.INTEGER })
    numAnglesPhosphate?: number;
}
