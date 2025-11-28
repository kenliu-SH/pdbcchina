import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Default, Table } from 'sequelize-typescript'

import { BaseModel } from './shared/base'

@Table({ tableName: 'sms', timestamps: true, freezeTableName: true })
export class Sms extends BaseModel<Sms> {
  @ApiProperty({
    name: 'phone',
    type: String,
    required: true,
    description: '手机号',
  })
  @Column({
    comment: '手机号',
    type: DataType.STRING(11),
  })
  phone: string

  @Column({
    comment: '验证码',
    type: DataType.INTEGER,
  })
  code: number

  @Column({
    comment: '使用时间',
    type: DataType.DATE,
  })
  usedAt: Date
}
