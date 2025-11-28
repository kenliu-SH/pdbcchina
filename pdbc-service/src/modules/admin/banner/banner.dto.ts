import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Banner } from '@model/banner.model';

export class FindBannerPaginationDto extends Banner {
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
export class CreateManyBannerDto {
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({
    name: 'banners',
    type: [Banner],
    required: true,
    description: '列表',
  })
  banners: Banner[];
}
export class DeleteManyBannerDto {
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({
    name: 'ids',
    type: [Number],
    required: true,
    description: '列表',
  })
  ids: number[];
}
