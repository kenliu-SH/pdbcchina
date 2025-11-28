import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger'
import { CurrentPage } from '@core/decorator'
import { Pagination } from '@common/interface'
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete } from '@nestjs/common'
import { AdminController, WebController } from '@core/decorator/controller'
import { SmsService } from './sms.service'
import { FindSmsPaginationDto, DeleteManySmsDto, CreateManySmsDto } from './sms.dto'
import { Sms } from '@model/sms.model'
import { InjectModel } from '@nestjs/sequelize'
import _ = require('lodash')
import { OpenAuthorize } from '@core/decorator/authorize'

@ApiTags('sms')
@ApiBearerAuth()
@AdminController('sms')
export class SmsController {
  constructor(
    @InjectModel(Sms)
    private smsModel: typeof Sms
  ) {}

  @OpenAuthorize()
  @HttpCode(HttpStatus.OK)
  @Post('/')
  async create(@Body() dto: Sms) {
    dto.code = _.random(1000, 9999)
    const result = await this.smsModel.create(dto)
    return result
  }
}
