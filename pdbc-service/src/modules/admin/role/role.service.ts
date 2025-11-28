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
import { FindPaginationDto } from './role.dto';
import { Role } from '@model/role.model';

@Injectable()
export class RoleService {
  constructor(
    @Inject(RedisProvider.local)
    private readonly redis: SuperRedis,

    @InjectModel(Role)
    private roleModel: typeof Role,
    private sequelize: Sequelize,
    private readonly configs: ConfigProvider,
  ) {}

  // private bannerCacheKey(...args: any[]) {
  //   return `${this.configs.info.appName}:bannerLIST:${JSON.stringify(args)}`;
  // }

  /**
   *
   * @param dto
   * @returns
   */
  public async create(dto: Role) {
    const result = await this.roleModel.create(dto);
    return result;
  }

  /**
   *
   * @param dto
   * @param id
   * @returns
   */
  public async edit(dto: Role, id: number) {
    let role = await this.roleModel.findOne({ where: { id } });
    if (!role) {
      throw new HttpException(null, 500001);
    }
    await role.update(dto);
    role = await this.roleModel.findOne({ where: { id } });
    return role;
  }

  /**
   *
   * @param id
   * @returns
   */
  public async delete(id: number) {
    const result = await this.roleModel.destroy({
      where: {
        id: id,
      },
    });
    return result;
  }

  public async find(dto: FindPaginationDto, pagination: Pagination) {
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
    const result = await Role.findPagination<Role>(options);
    return result;
  }
}
