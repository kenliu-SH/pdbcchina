import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Sms } from '@model/sms.model';

export class FindSmsPaginationDto extends Sms {
  @ApiProperty({
    name: 'order',
    type: String,
    required: false,
    description: 'order'
  })
  order?: string;
  @ApiProperty({
    name: 'page',
    type: String,
    required: false,
    description: 'page'
  })
  page?: string;
  @ApiProperty({
    name: 'pageSize',
    type: String,
    required: false,
    description: 'pageSize'
  })
  pageSize?: string;
}
export class CreateManySmsDto {
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({
    name: 'smss',
    type: [Sms],
    required: true,
    description: '列表'
  })
  smss: Sms[];
}
export class DeleteManySmsDto {
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({
    name: 'ids',
    type: [Number],
    required: true,
    description: '列表'
  })
  ids: number[];
}
