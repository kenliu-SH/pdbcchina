import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { Highlight } from './highlight.model';
import { News } from './news.model';
import { BaseModel } from './shared/base';
import { Tag } from './tag.model';

@Table({
  tableName: 'news_tag',
  timestamps: true,
  freezeTableName: true,
})
export class NewsTag extends BaseModel<NewsTag> {
  @ApiProperty({
    name: 'newsId',
    type: Number,
    description: '新闻ID',
    required: false,
  })
  @ForeignKey(() => News)
  @Column({
    comment: '新闻ID',
    type: DataType.INTEGER,
  })
  newsId: number;
  @BelongsTo(() => News)
  news: News;

  @ApiProperty({
    name: 'tagId',
    type: Number,
    description: '标签ID',
    required: false,
  })
  @ForeignKey(() => Tag)
  @Column({
    comment: '标签ID',
    type: DataType.INTEGER,
  })
  tagId: number;
  @BelongsTo(() => Tag)
  tag: Tag;
}
