import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { SelectedPolymerEntityTypes } from '@common/type'

export class SearchDto {}

export class SuggestDto {
  @ApiProperty({ name: 'keyword', type: String, required: true, description: '关键字' })
  keyword: string
}

export class FullTextDto {
  @ApiProperty({
    name: 'exptlMethod',
    type: String,
    // enum: ['Protein', 'DNA', 'RNA', 'NA-hybrid', 'Other'],
    required: false,
    description: '实验方法 多选用逗号隔开  如 1,2',
  })
  exptlMethod: string
  @ApiProperty({ name: 'keyword', type: String, required: false, description: '关键字' })
  keyword: string
  @ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
  order?: string
  @ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
  page?: string
  @ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
  pageSize?: string
}
