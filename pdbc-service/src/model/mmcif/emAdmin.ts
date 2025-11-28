import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_admin", timestamps: false })
export class emAdmin extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "current_status", allowNull: true, type: DataType.STRING(10) })
    currentStatus?: string;

    @Column({ field: "deposition_date", allowNull: true, type: DataType.DATE })
    depositionDate?: Date;

    @Column({ field: "deposition_site", allowNull: true, type: DataType.STRING(10) })
    depositionSite?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "last_update", allowNull: true, type: DataType.DATE })
    lastUpdate?: Date;

    @Column({ field: "map_release_date", allowNull: true, type: DataType.DATE })
    mapReleaseDate?: Date;

    @Column({ field: "map_hold_date", allowNull: true, type: DataType.DATE })
    mapHoldDate?: Date;

    @Column({ field: "header_release_date", allowNull: true, type: DataType.DATE })
    headerReleaseDate?: Date;

    @Column({ field: "obsoleted_date", allowNull: true, type: DataType.DATE })
    obsoletedDate?: Date;

    @Column({ field: "replace_existing_entry_flag", allowNull: true, type: DataType.STRING(10) })
    replaceExistingEntryFlag?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    title?: string;
}
