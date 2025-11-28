import { POWER_CONTNET } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Default, Table } from 'sequelize-typescript';
import { BaseModel } from './shared/base';

@Table({ tableName: 'role', timestamps: true, freezeTableName: true, paranoid: true })
export class Role extends BaseModel<Role> {
  @ApiProperty({
    type: String,
    required: true,
    description: '名称',
    default: '超级管理员'
  })
  @Column({
    comment: '名称',
    type: DataType.STRING(11)
  })
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    description: '角色说明',
    default: '拥有后台管理所有权限'
  })
  @Column({
    comment: '角色说明',
    type: DataType.TEXT
  })
  describe: string;

  @ApiProperty({
    type: Array,
    required: true,
    description: '权限',
    default: []
  })
  @Column({
    comment: '权限',
    type: DataType.JSON
  })
  power: string[];
}
