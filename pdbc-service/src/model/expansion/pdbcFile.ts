
import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';

import { BaseModel } from '../shared/base';
import { PDB_FILE_TYPE } from 'src/common/constant';
@Table({ tableName: 'pdbc_file', timestamps: true })
export class PdbcFile extends BaseModel<PdbcFile> {
    @Column({
        comment: '结构id',
        type: DataType.STRING(10),
        allowNull: false,
        field: 'Structure_ID'
    })
    declare structureId: string;

    // 文件类型
    @Column({
        comment: '文件类型',
        type: DataType.STRING(50),
    })
    declare fileType: PDB_FILE_TYPE;

    // 文件路径
    @Column({
        comment: '文件路径',
        type: DataType.STRING(255),
    })
    declare filePath: string;

    // 文件最近修改时间
    @Column({
        comment: '文件最近修改时间',
        type: DataType.DATE,
    })
    declare fileLastModified: Date;
}