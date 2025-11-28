import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@model/role.model';

export class FindRoleDto {
  @ApiProperty({
    name: 'name',
    type: String,
    required: false,
    description: '名称',
    default: '超级管理员',
  })
  name: string;

  @ApiProperty({
    name: 'describe',
    type: String,
    required: false,
    description: '角色说明',
    default: '拥有后台管理所有权限',
  })
  describe: string;
}

export class FindPaginationDto extends FindRoleDto {
  @ApiProperty({
    name: 'order',
    type: String,
    required: false,
    description: 'order',
  })
  order?: string;
  @ApiProperty({
    name: 'page',
    type: String,
    required: false,
    description: 'page',
  })
  page?: string;
  @ApiProperty({
    name: 'pageSize',
    type: String,
    required: false,
    description: 'pageSize',
  })
  pageSize?: string;
}
