import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import {
  FindOptions,
  FindPaginationOptions,
  Op,
  Sequelize,
} from '@model/shared';
import { Banner } from '@model/banner.model';
import {
  FindBannerPaginationDto,
  CreateManyBannerDto,
  DeleteManyBannerDto,
} from './banner.dto';

@Injectable()
export class BannerService {
  constructor(
    @Inject(RedisProvider.local)
    private readonly redis: SuperRedis,

    @InjectModel(Banner)
    private bannerModel: typeof Banner,
    private sequelize: Sequelize,
    private readonly configs: ConfigProvider,
  ) {}

  private bannerCacheKey(...args: any[]) {
    return `${this.configs.info.appName}:bannerLIST:${JSON.stringify(args)}`;
  }

  public async create(dto: Banner) {
    const result = await this.bannerModel.create(dto);
    return result;
  }

  public async edit(dto: Banner, id: number) {
    let banner = await this.bannerModel.findOne({ where: { id } });
    if (!banner) {
      throw new HttpException(null, 500001);
    }
    await banner.update(dto);
    banner = await this.bannerModel.findOne({ where: { id } });
    return banner;
  }

  public async delete(id: number) {
    const result = await this.bannerModel.destroy({
      where: {
        id: id,
      },
    });
    return result;
  }

  public async find(id: number) {
    const options: FindOptions = {
      where: { id },
      include: [{ all: true }],
    };
    const result = await Banner.findOne(options);
    return result;
  }

  public async findPagination(
    dto: FindBannerPaginationDto,
    pagination: Pagination,
  ) {
    const result = await this.findPaginationDao(dto, pagination);
    return result;
  }

  public async findPaginationDao(dto: any, pagination: Pagination) {
    const whereOrList = [_.pickBy(dto, _.identity)];
    if (dto.name) {
      // 模糊查询
      whereOrList.push({
        name: { [Op.like]: `%${dto.name}%` },
      });
    }
    const options: FindPaginationOptions = {
      where: Object.keys(dto).length > 0 ? { [Op.or]: whereOrList } : {}, //删除对象中为空的属性
      include: [{ all: true }],
      pagination,
    };
    const result = await Banner.findPagination<Banner>(options);
    return result;
  }
}
