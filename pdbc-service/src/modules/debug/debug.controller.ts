import { ParseService } from '@library/parse'
import { parseCIF } from '@library/parse/parseCIF'
import { PDBService } from '@library/sync'
import { IndexService } from '@library/sync/index.service'
import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import axios from 'axios'
import CIF from 'libs/ciftools'
import _ from 'lodash'
const { readFileSync } = require('fs')
@Controller('debug')
export class DebugController {
  constructor(
    private readonly syncService: PDBService,
    private readonly indexService: IndexService,
    private readonly parseService: ParseService
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '索引整库同步' })
  @Post('sync/index/complete')
  async indexSyncComplete() {
    // await this.indexService.complete()
    return true
  }
  
  @Post('sync/index/startSyncIndex')
  async startSyncIndex() {
    // await this.indexService.startSyncIndex(1)
    return true
  }

  @HttpCode(HttpStatus.OK)
  @Post('sync/index/sugget/search')
  async searchIndex(@Body() body) {
    const { q } = body
    // const result = await this.indexService.suggetSearch(q)
    return "result"
  }
  @HttpCode(HttpStatus.OK)
  @Post('cifParser')
  async cifParser(@Body() body) {
    const { cifParser } = require('cif-to-json')
    const { PDBID } = body
    const data = await axios.get(`https://files.rcsb.org/header/${PDBID}.cif`)
    return cifParser(data.data)
  }

  @HttpCode(HttpStatus.OK)
  @Post('cifParser_2')
  async cifParser_2(@Body() body) {
    const { PDBID } = body
    const data = await axios.get(`https://files.rcsb.org/header/${PDBID}.cif`)
    const comp = parseCIF(data.data)
    // console.time('parseCif')
    // const parsed = await comp.run();
    // console.timeEnd('parseCif')
    // if (parsed.isError) throw parsed;
    return comp
  }

  // 解析CIF方法测试
  @HttpCode(HttpStatus.OK)
  @Post('cifParser_3')
  async cifParser_3(@Body() body) {
    const { PDBID } = body
    const data = await axios.get(`https://files.rcsb.org/header/${PDBID}.cif`)
    const comp = CIF.Text.parse(data.data)
    const result = {}
    // return comp['result']['dataBlocks'][0]['categories']
    // 格式化
    comp['result']['dataBlocks'][0]['categories'].map((vo, index) => {
      vo = vo.toJSON()
      let node = {}
      const tableKey = vo.name
      const rows = vo['rows'].map((vo) => {
        const _vo = {}
        for (const key in vo) {
          if (Object.prototype.hasOwnProperty.call(vo, key)) {
            _vo[tableKey + '.' + key] = vo[key]
          }
        }
        return _vo
      })
      result[tableKey + '.'] = rows
    })
    // console.time('parseCif')
    // const parsed = await comp.run();
    // console.timeEnd('parseCif')
    // if (parsed.isError) throw parsed;
    return result
  }

  // // 填充实体筛选数据
  // @HttpCode(HttpStatus.OK)
  // @Post('createEntityFilter')
  // async createEntityFilter() {

  // }
}
