import { ConfigProvider } from '@library/configs';
import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import axios from 'axios';
import { Feed } from 'feed';
import { PDBService } from '@library/sync';
import dayjs = require('dayjs');
import * as fs from 'fs';
import { join } from 'path';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class FeedService implements OnApplicationBootstrap {
  constructor(
    private readonly configs: ConfigProvider,
    private PDBService: PDBService,
  ) {}
  async onApplicationBootstrap() {
    try {
      if (this.configs.info.env === 'dev' || this.configs.info.env === 'test') {
        // await this.initNewPDBFeed();
      }
    } catch (error) {
      console.error(error);
    }
  }
  private readonly logger = new Logger(FeedService.name);
  /**
   * 获取每周更新的PDB Feed
   */
  async getWeeklyUpdateFeed() {
    // 获取每周更新的PDBID
    const pdbIds: [] = await this.getWeeklyUpdatePDBIds();
    // 生成Feed
    const feed = new Feed({
      title: 'New PDB',
      description: 'The latest protein releases every week',
      id: 'http://example.com/',
      link: 'http://example.com/',
      language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
      image: 'https://s2.loli.net/2023/02/27/g38xfkDLGSaUimh.png',
      favicon: 'http://example.com/favicon.ico',
      copyright: 'All rights reserved 2023, PDBC',
      generator: 'awesome', // optional, default = 'Feed for Node.js'
      feedLinks: {
        json: 'https://example.com/json',
        atom: 'https://example.com/atom',
      },
    });
    for (let index = 0; index < pdbIds.length; index++) {
      const pdbId = pdbIds[index];
      const { data } = await this.PDBService.getDetails(pdbId);
      const { struct, rcsb_accession_info } = data;
      feed.addItem({
        title: struct.title,
        id: pdbId,
        link: `http://example.com/${pdbId}`,
        description: struct.pdbx_descriptor,
        date: dayjs(rcsb_accession_info.initial_release_date).toDate(),
        content: `New PDB：${pdbId}!!!内容内容内容内容内容`,
      });
    }
    const rootDir = join(__dirname, '../../../');
    let fillPath = 'public/newPDB';
    if (!fs.existsSync(`${rootDir}/${fillPath}`)) {
      fs.mkdirSync(`${rootDir}/${fillPath}`, { recursive: true });
    }
    fs.writeFile(
      `${rootDir}/${fillPath}/feed.xml`,
      feed.rss2(),
      function (err) {
        if (err) throw err;
        console.log('Feed saved!');
      },
    );
  }

  /**
   * 获取每周更新的PDBID
   */
  async getWeeklyUpdatePDBIds() {
    const resp = await axios({
      method: 'get',
      url: 'https://pdbj.org/rest/newweb/search/sql?q=select+bs.pdbid+from+pdbj.brief_summary+bs+inner+join+misc.id_meta_list+iml+on+bs.pdbid%3Diml.id+where+iml.category%3D%27pdb_new%27&format=json',
    });
    return resp.data.results;
  }

  /**
   * 初始化newPDB Feed，每周三更新
   */
  @Cron('0 0 0 * * 3')
  async initNewPDBFeed() {
    const rootDir = join(__dirname, '../../..');
    let fillPath = 'public/newPDB';
    const feedXmlPath = `${rootDir}/${fillPath}/feed.xml`;
    // 如果不存在则创建
    if (!fs.existsSync(`${rootDir}/${fillPath}`)) {
      fs.mkdirSync(`${rootDir}/${fillPath}`, { recursive: true });
    }
    let feedXmlStat;
    // 读取文件
    try {
      feedXmlStat = fs.statSync(feedXmlPath);
    } catch (error) {
      console.error(error);
    }
    if (!feedXmlStat) {
      this.logger.log('初始化newPDB Feed, 生成新的Feed->>>>>>');
      await this.getWeeklyUpdateFeed();
      this.logger.log('初始化newPDB Feed, 生成新的Feed✅->>>>>>');
      return;
    }
    // 判断更新时间是否在本周 并且今天是周三及之后
    const feedXmlMtime = dayjs(feedXmlStat.mtime);
    if (!feedXmlMtime.isSame(dayjs(), 'week') && dayjs().day() >= 3) {
      this.logger.log('初始化newPDB Feed, 生成新的Feed->>>>>>');
      await this.getWeeklyUpdateFeed();
      this.logger.log('初始化newPDB Feed, 生成新的Feed✅->>>>>>');
      return;
    }
    this.logger.log('初始化newPDB Feed, Feed未过期->>>>>>');
  }
}
