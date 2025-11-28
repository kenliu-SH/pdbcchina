
import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';

import { BaseModel } from '../shared/base';
@Table({ tableName: 'pdbc_assembly', timestamps: true })
export class PdbcAssembly extends BaseModel<PdbcAssembly> {
    @Column({
        comment: '结构id',
        type: DataType.STRING(10),
        allowNull: false,
        field: 'Structure_ID'
    })
    declare structureId: string;

    @Column({
        comment: 'Assembly id',
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare assemblyId: string;

    @Column({
        comment: '说明',
        type: DataType.STRING(255),
    })
    declare explain: string;

    @Column({
        comment: '证据',
        type: DataType.STRING(255),
    })
    declare biologicalAssemblyEvidence: string;
}