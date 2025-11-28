import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
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
  Delete,
} from '@nestjs/common';
import { AdminController, WebController } from '@core/decorator/controller';
import { RoleService } from './role.service';
import { FindPaginationDto } from './role.dto';
import { Role } from '@model/role.model';
import { InjectModel } from '@nestjs/sequelize';

@ApiTags('角色')
@ApiBearerAuth()
@AdminController('role')
export class RoleController {
  constructor(
    private readonly service: RoleService,
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) {}
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '新建角色' })
  @Post('/')
  async create(@Body() dto: Role) {
    const result = await this.service.create(dto);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '编辑角色' })
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Put(':id')
  async edit(@Body() dto: Role, @Param() params) {
    const { id } = params;
    const result = await this.service.edit(dto, id);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '删除角色' })
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Delete(':id')
  async delete(@Param() params) {
    const { id } = params;
    const result = await this.service.delete(id);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @Get('/')
  @ApiOperation({ summary: '查找角色' })
  async find(
    @Query() dto: FindPaginationDto,
    @CurrentPage() pagination: Pagination,
  ) {
    const result = await this.service.find(dto, pagination);
    return result;
  }
}
