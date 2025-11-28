/**
 * 业务API日志服务
 */
import { FindPaginationOptions } from '@model/shared';
import { Injectable } from '@nestjs/common';
import { Pagination } from '@common/interface';
import { BusinessAPILog } from '@model/businessAPILog.model';
import { Op } from '@model/shared';
import dayjs = require('dayjs');
import { FindPaginationDto } from './businessAPILog.dto';
import { User } from '@model/user.model';


@Injectable()
export class BusinessAPILogService {
    /**
     * 分页列表
     */
    public async findPagination(dto: FindPaginationDto, pagination: Pagination) {
        const options: FindPaginationOptions = {
            where: {
            },
            include: [{
                model: User,

            }],
            pagination,
        };
        if (dto.statusCode) {
            options.where['statusCode'] = dto.statusCode
        }
        const result = await BusinessAPILog.findPagination<BusinessAPILog>(options);
        return result
    }
}