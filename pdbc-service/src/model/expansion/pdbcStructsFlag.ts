import { BelongsTo, Column, DataType, Default, ForeignKey, Index, Table } from 'sequelize-typescript';

import { BaseModel } from '../shared/base';
import { pdbxAuditRevisionHistory } from '..';
// 结构标志
@Table({
    tableName: 'pdbc_structs_flag',
    timestamps: true,
    freezeTableName: true,
})
export class PdbcStructsFlag extends BaseModel<PdbcStructsFlag> {
    @ForeignKey(() => pdbxAuditRevisionHistory)
    @Index('pdbc_structs_flag_entityId')
    @Column({
        comment: 'entityId',
        type: DataType.STRING(60),
    })
    declare entityId: string;

    @BelongsTo(() => pdbxAuditRevisionHistory, 'entityId')
    declare pdbxAuditRevisionHistory: pdbxAuditRevisionHistory;
    /**
     * 拓展数据最后更新时间
     */
    @Column({
        comment: '拓展数据最后更新时间',
        type: DataType.DATE,
    })
    declare expansionLastUpdate: Date;

    /**
     * mmcif数据最后更新时间
     */
    @Column({
        comment: 'mmcif数据最后更新时间',
        type: DataType.DATE,
    })
    declare mmcifLastUpdate: Date;

    /**
     * 文件最后更新时间
     */
    @Column({
        comment: '文件最后更新时间',
        type: DataType.DATE,
    })
    declare fileLastUpdate: Date;

    /**
     * 状态
     */
    @Column({
        comment: '状态',
        type: DataType.STRING(60),
    })
    declare status: string;
}
