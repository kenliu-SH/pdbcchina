import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { BaseModel } from "./shared/base";
import { User } from "./user.model";

@Table({
    tableName: 'business_api_log',
    timestamps: true,
    freezeTableName: true,
    comment: '业务API日志表',
})
export class BusinessAPILog extends BaseModel<BusinessAPILog> {
    // requestId
    @Column({
        type: DataType.STRING(64),
        allowNull: false,
    })
    declare requestId: string;

    // 请求路径
    @Column({
        type: DataType.STRING(64),
        allowNull: false,
    })
    declare path: string;

    // IP
    @Column({
        type: DataType.STRING(64),
        allowNull: false,
    })
    declare ip: string;

    // path 参数
    @Column({
        type: DataType.JSON,
        allowNull: true,
    })
    declare pathParams: object;

    // query || body 参数
    @Column({
        type: DataType.JSON,
        allowNull: true,
    })
    declare params: object;

    // 请求方法
    @Column({
        type: DataType.STRING(64),
        allowNull: false,
    })
    declare method: string;

    // 用户id
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    declare userId: number;

    @BelongsTo(() => User)
    declare user: User;



    // 返回状态码
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare statusCode: number;

    // 平台
    @Column({
        type: DataType.STRING(64),
        allowNull: false,
    })
    declare platform: string;

    // 返回数据
    @Column({
        type: DataType.JSON,
        allowNull: true,
    })
    declare responseBody: object;
}
