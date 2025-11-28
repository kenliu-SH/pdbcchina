import { SuperRedis } from '@sophons/redis'
import { Pagination } from '@common/interface'
import { RedisProvider } from '@library/redis'
import { ConfigProvider } from '@library/configs'
import { InjectModel } from '@nestjs/sequelize'
import { HttpException, Inject, Injectable } from '@nestjs/common'
import _ = require('lodash')
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared'
import { Sms } from '@model/sms.model'
import { FindSmsPaginationDto, CreateManySmsDto, DeleteManySmsDto } from './sms.dto'

@Injectable()
export class SmsService {
  constructor(
    @Inject(RedisProvider.local)
    private readonly redis: SuperRedis,

    @InjectModel(Sms)
    private smsModel: typeof Sms,
    private sequelize: Sequelize,
    private readonly configs: ConfigProvider
  ) {}

  private smsCacheKey(...args: any[]) {
    return `${this.configs.info.appName}:smsLIST:${JSON.stringify(args)}`
  }

  public async create(dto: Sms) {
    const result = await this.smsModel.create(dto)
    return result
  }

  public async createMany(dto: CreateManySmsDto) {
    let result: Sms[]
    const smss: Sms[] = []
    try {
      result = await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t }
        dto.smss.forEach(async (vo) => {
          const sms = await this.smsModel.create(vo, transactionHost)
          smss.push(sms)
        })
        // Transaction 会自动提交
        // result 是事务回调中使用promise链中执行结果
        return smss
      })
    } catch (err) {
      // Transaction 会自动回滚
      // err 是事务回调中使用promise链中的异常结果
    }
    return result
  }

  public async edit(dto: Sms, id: number) {
    let sms = await this.smsModel.findOne({ where: { id } })
    if (!sms) {
      throw new HttpException(null, 500001)
    }
    await sms.update(dto)
    sms = await this.smsModel.findOne({ where: { id } })
    return sms
  }

  public async delete(id: number) {
    const result = await this.smsModel.destroy({
      where: {
        id: id,
      },
    })
    return result
  }

  public async deleteMany(dto: DeleteManySmsDto) {
    let successCount = 0
    let result = true
    try {
      for (let index = 0; index < dto.ids.length; index++) {
        const sms = await this.smsModel.destroy({
          where: { id: dto.ids[index] },
        })
      }
    } catch (err) {
      throw new HttpException(null, 400037)
    }
    if (successCount < dto.ids.length) {
      throw new HttpException(null, 400037)
    }
    return result
  }

  public async find(id: number) {
    const options: FindOptions = { where: { id }, include: [{ all: true }] }
    const result = await Sms.findOne(options)
    return result
  }

  public async findPagination(dto: FindSmsPaginationDto, pagination: Pagination) {
    const key = this.smsCacheKey(dto, pagination)

    const result = await this.redis.cache({ key, ttl: 10, next: this.findPaginationDao }).with(dto, pagination)

    return result
  }

  public async findPaginationDao(dto: any, pagination: Pagination) {
    const whereOrList = [_.pickBy(dto, _.identity)]
    if (dto.name) {
      // 模糊查询
      whereOrList.push({
        name: { [Op.like]: `%${dto.name}%` },
      })
    }
    const options: FindPaginationOptions = {
      where: Object.keys(dto).length > 0 ? { [Op.or]: whereOrList } : {}, //删除对象中为空的属性
      include: [{ all: true }],
      pagination,
    }
    const result = await Sms.findPagination<Sms>(options)
    return result
  }
}
