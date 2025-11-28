import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import {
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Put,
  Delete
} from '@nestjs/common';
import { AdminController, WebController } from '@core/decorator/controller';
import { BannerService } from './banner.service';
import {
  FindBannerPaginationDto,
  DeleteManyBannerDto,
  CreateManyBannerDto
} from './banner.dto';
import { Banner } from '@model/banner.model';

@ApiTags('banner')
@ApiBearerAuth()
@AdminController('banner')
export class BannerController {
  constructor(private readonly service: BannerService) {}
  @HttpCode(HttpStatus.OK)
  @Post('/')
  async create(@Body() dto: Banner) {
    const result = await this.service.create(dto);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Put(':id')
  async edit(@Body() dto: Banner, @Param() params) {
    const { id } = params;
    const result = await this.service.edit(dto, id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Delete(':id')
  async delete(@Param() params) {
    const { id } = params;
    const result = await this.service.delete(id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Get('find/:id')
  async find(@Param() Param) {
    const result = await this.service.find(Param.id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @Get('findPagination')
  async findPagination(
    @Query() dto: FindBannerPaginationDto,
    @CurrentPage() pagination: Pagination
  ) {
    const result = await this.service.findPagination(dto, pagination);
    return result;
  }
}
