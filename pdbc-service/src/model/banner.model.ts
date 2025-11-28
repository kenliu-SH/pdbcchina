/*
 * @Author: your name
 * @Date: 2021-08-09 16:52:52
 * @LastEditTime: 2021-09-01 14:00:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\model\entry.model.ts
 */
import { ApiProperty } from '@nestjs/swagger'
import { isArray } from 'lodash'
import { AfterFind, BelongsTo, Column, DataType, Default, DeletedAt, ForeignKey, HasOne, Table } from 'sequelize-typescript'
import { Collect } from './collect.model'

import { BaseModel } from './shared/base'

@Table({ tableName: 'banner', timestamps: true, freezeTableName: true, paranoid: true })
export class Banner extends BaseModel<Banner> {
  @ApiProperty({
    name: 'describe',
    type: String,
    required: false,
    description: '描述内容',
  })
  @Column({
    comment: '描述内容',
    type: DataType.STRING(256),
  })
  describe: string

  @ApiProperty({
    name: 'isShow',
    type: Number,
    required: false,
    description: '是否显示 0/1',
  })
  @Column({
    comment: '是否显示',
    type: DataType.INTEGER,
  })
  isShow: string

  @ApiProperty({
    name: 'image',
    type: String,
    required: false,
    description: '图片地址',
  })
  @Column({
    comment: '图片地址',
    type: DataType.STRING(256),
  })
  image: string

  @ApiProperty({
    name: 'link',
    type: String,
    required: false,
    description: '链接地址',
  })
  @Column({
    comment: '链接地址',
    type: DataType.STRING(256),
  })
  link: string
}
