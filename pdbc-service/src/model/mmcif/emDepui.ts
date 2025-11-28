import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_depui", timestamps: false })
export class emDepui extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "depositor_hold_instructions", allowNull: true, type: DataType.STRING(80) })
    depositorHoldInstructions?: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "macromolecule_description", allowNull: true, type: DataType.STRING(10) })
    macromoleculeDescription?: string;

    @Column({ field: "obsolete_instructions", allowNull: true, type: DataType.STRING(200) })
    obsoleteInstructions?: string;

    @Column({ field: "same_authors_as_pdb", allowNull: true, type: DataType.STRING(10) })
    sameAuthorsAsPdb?: string;

    @Column({ field: "same_title_as_pdb", allowNull: true, type: DataType.STRING(10) })
    sameTitleAsPdb?: string;
}
