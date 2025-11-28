
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Notice } from '@model/notice.model';

export class FindNoticePaginationDto extends Notice {
    @ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
    order?: string;
    @ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
    page?: string;
    @ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
    pageSize?: string;
}
    