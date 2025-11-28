import { pathConstant } from '@common/constant';
import { ConfigProvider } from '@library/configs';
import { _Entry } from '@model/entry.model';
import { Op } from '@model/shared';
import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Queue } from 'bull';
import dayjs = require('dayjs');
import _ = require('lodash');
@Injectable()
export class PDBService {
	public constructor(
		private readonly configs: ConfigProvider,
		@InjectModel(_Entry)
		private entryModel: typeof _Entry,
		@InjectQueue('index-sync-consumer')
		private indexSyncConsumer: Queue,
	) {}
	/**
	 * 获取PDB细节
	 * @param PDBId
	 * @returns
	 */
	public getDetails(PDBId: string) {
		const url = `https://data.rcsb.org/rest/v1/core/entry/${PDBId}`;
		return axios.request({
			url: url,
			method: 'GET',
			timeout: 5000,
		});
	}

	/**
	 * 获取最近一周更新的PDB
	 */
	public async getRecentUpdatePDB() {
		let getNewPdbListUrl =
			'https://pdbj.org/rest/newweb/search/sql?q=select+bs.pdbid+from+pdbj.brief_summary+bs+inner+join+misc.id_meta_list+iml+on+bs.pdbid%3Diml.id+where+iml.category%3D%27pdb_new%27&format=json';
		const { results: newPdbList } = (await axios.get(getNewPdbListUrl)).data;
    return newPdbList;
	}
}
