/*
 * @Author: your name
 * @Date: 2021-08-10 11:03:19
 * @LastEditTime: 2021-09-01 14:01:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\library\sync\index.service.ts
 */
import { pathConstant } from '@common/constant'
import { ConfigProvider } from '@library/configs'
import { MeilisearchProvider } from '@library/meilisearch'
import { _Entry } from '@model/entry.model'
import { pdbxDatabaseStatus } from '@model/mmcif'
import { FindPaginationOptions, Op, PaginationResult } from '@model/shared'
import { Inject, Injectable, LoggerService } from '@nestjs/common'
import dayjs = require('dayjs')
import _ = require('lodash')
import MeiliSearch from 'meilisearch'
/**
 * 索引同步服务
 */
@Injectable()
export class IndexService {
  public constructor(
    private readonly configs: ConfigProvider,
    @Inject(MeilisearchProvider.local)
    private readonly meiliSearch: MeiliSearch
  ) { }

  /**
   * 整库 更新/同步
   */
  // public async complete() {
  //   let pagination = {
  //     page: 1,
  //     pageSize: 500,
  //     order: 'id DESC',
  //   }
  //   await this.meiliSearch.index('entry').deleteAllDocuments()
  //   const options: FindPaginationOptions = {
  //     pagination: pagination,
  //     logging: true,
  //   }
  //   const result = await _Entry.findPagination<_Entry>(options)
  //   for (let index = 1; index < result.pagination.pageCount; index++) {
  //     let findPage: PaginationResult<_Entry>
  //     if (index == 1) {
  //       findPage = result
  //     } else {
  //       findPage = await _Entry.findPagination<_Entry>(options)
  //       pagination.page = index + 1
  //     }
  //     let entries = findPage.rows.map((vo) => {
  //       return {
  //         PDBId: vo.PDBId,
  //         method: vo.method,
  //         ...vo.details,
  //       }
  //     })
  //     console.log('创建索引->>>>>', index, result.rows.length)
  //     let response = await this.meiliSearch.index('entry').updateDocuments(entries, {
  //       primaryKey: 'PDBId',
  //     })
  //     console.log('整库 更新/同步 response->>', response)
  //   }
  // }

  /**
   * 根据最后更新时间同步
   */
  public async lastUpdateTime() {
    // 获取最后更新时间
    let lastUpdateTime = await pdbxDatabaseStatus.findOne({
      attributes: ['recvdInitialDepositionDate'],
      order: [['recvdInitialDepositionDate', 'DESC']],
    })
    let lastUpdateDate = dayjs(lastUpdateTime.recvdInitialDepositionDate).format('YYYY-MM-DD HH:mm:ss')
    let pagination = {
      page: 1,
      pageSize: 500,
      order: 'id DESC',
    }
    const options: FindPaginationOptions = {
      pagination: pagination,
      where: {
        [Op.or]: [
          {
            updatedAt: {
              [Op.gt]: lastUpdateDate,
            },
          },
          {
            createdAt: {
              [Op.gt]: lastUpdateDate,
            },
          },
        ],
      },
    }
    const result = await _Entry.findPagination<_Entry>(options)
    for (let index = 1; index < result.pagination.pageCount; index++) {
      let findPage: PaginationResult<_Entry>
      if (index == 1) {
        findPage = result
      } else {
        findPage = await _Entry.findPagination<_Entry>(options)
        pagination.page = index + 1
      }
      let entries = findPage.rows.map((vo) => {
        return {
          PDBId: vo.PDBId,
          method: vo.method,
          ...vo.details,
        }
      })
      let response = await this.meiliSearch.index('entry').updateDocuments(entries, {
        primaryKey: 'PDBId',
      })
      console.log('根据最后更新时间同步 response->>', response)
    }
  }

  /**
   * 添加/更新多条记录
   */
  public async addMany(entrys: _Entry[]) {
    const index = this.meiliSearch.index('entry')
    let dataList = entrys.map((vo) => {
      return {
        PDBId: vo.PDBId,
        method: vo.method,
        ...vo.details,
      }
    })
    let response = index.updateDocuments(dataList, {
      primaryKey: 'PDBId',
    })
    return response
  }
}
