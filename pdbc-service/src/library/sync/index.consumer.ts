import { MeilisearchProvider } from '@library/meilisearch'
import { _Entry } from '@model/entry.model'
import { FindPaginationOptions, PaginationResult } from '@model/shared'
import { Process, Processor } from '@nestjs/bull'
import { Inject } from '@nestjs/common'
import { Job } from 'bull'
import MeiliSearch from 'meilisearch'
import { IndexService } from './index.service'

@Processor('index-sync-consumer')
export class IndexSyncConsumer {
  constructor(
    private readonly indexService: IndexService,
    @Inject(MeilisearchProvider.local)
    private readonly meiliSearch: MeiliSearch
  ) {}
  /**
   * 整库同步
   */
  @Process('complete')
  async complete(job: Job) {
    const lastProgress = await job.progress()
    console.log('最后 progress->>>>', lastProgress)
    let pagination = {
      page: 1,
      pageSize: 500,
      order: 'id DESC',
    }
    await this.meiliSearch.index('entry').deleteAllDocuments()
    const options: FindPaginationOptions = {
      pagination: pagination,
      logging: true,
    }
    let result = await _Entry.findPagination<_Entry>(options)
    if (lastProgress > 0) {
      // 根据上次进度计算当前页码
      console.log('result.pagination.pageCount->>>>', result.pagination.pageCount * (lastProgress / 100))
      options.pagination.page = result.pagination.pageCount * (lastProgress / 100)
      result = await _Entry.findPagination<_Entry>(options)
    }
    for (let index = 1; index < result.pagination.pageCount; index++) {
      let findPage: PaginationResult<_Entry>
      if (index == 1) {
        findPage = result
      } else {
        findPage = await _Entry.findPagination<_Entry>(options)
        pagination.page = index + 1
      }
      console.log('创建索引->>>>>', index, result.rows.length)
      let response = await this.indexService.addMany(findPage.rows)
      // 更新进度
      await job.progress((index / result.pagination.pageCount) * 100)
      console.log('整库 更新/同步 进度->>', await job.progress())
    }
    return 'complete'
  }

  /**
   * 单个同步
   */
  @Process('addMany')
  async addMany(job: Job) {
    const { entrys } = job.data
    await this.indexService.addMany(entrys)
  }
}
