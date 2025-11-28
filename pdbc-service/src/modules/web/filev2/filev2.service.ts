import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { File } from "@model/file.model";
import { HttpException, Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path = require('path');
import _ = require('lodash');
import { ParseService } from '@library/parse';
import { FILE_ACTION, PDB_FILE_FORMAT, PDB_FILE_TYPE, PDB_FILE_TYPE_MAP } from '@common/constant';

import * as shelljs from 'shelljs';
// import * as puppeteer from 'puppeteer';
// import { PuppeteerService } from '@library/puppeteer';
import * as fg from 'fast-glob';
import { PdbcFile } from '@model/expansion';
import { pdbxDatabaseRelated } from '@model/mmcif';
@Injectable()
export class FileServiceV2 {
	pdbSeqresStr = '';
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		private readonly configs: ConfigProvider,
		// private readonly puppeteerService: PuppeteerService,
		private readonly parseService: ParseService,
	) {
		fs.readFile(`${this.configs.info.DataPath}/pdb/derived_data/pdb_seqres.txt`, (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			this.pdbSeqresStr = data.toString();
		});
	}

	/**
	 * 获取文件展示与下载信息
	 */
	async getFileOptions(id: string) {
		const result = {};
		const promises = [];

		for (let key in PDB_FILE_TYPE_MAP) {
			promises.push(this.processFile.call(this, id, key));
		}

		const results = await Promise.all(promises);

		results.forEach(res => {
			result[res.key] = {
				isClick: res.isClick,
				isDisplay: res.isDisplay,
				isDownload: res.isDownload,
				name: res.name,
				files: res.files,
			};
		});

		return result;
	}
	async processFile(id: string, key) {
		const pdbId = id.toLowerCase();
		const { value, path, suffix, keywords, display, isClick, isEmdb } = PDB_FILE_TYPE_MAP[key];
		// 查找文件
		const files = await PdbcFile.findAll({
			where: {
				structureId: pdbId,
				fileType: key
			}
		})
		return {
			key: key,
			isClick: files && files.length > 0 ? true : isClick ? isClick : false,
			isDisplay: display || false,
			isDownload: true,
			name: value,
			files: files.map(file => {
				return file.filePath
			}) || []
		};
	}
	/**
	 * 获取文件地址
	 */
	async getFilePath(id: string, type: PDB_FILE_TYPE, filePath: string = null) {
		const map = Object.values(PDB_FILE_TYPE_MAP).find(v => {
			return v.value == type;
		});
		if (!map) {
			throw new HttpException('文件类型不存在', 400);
		}
		const { DataPath, emdbDataPath } = this.configs.info;
		// 查找类型key
		let key = '';
		Object.keys(PDB_FILE_TYPE_MAP).forEach(k => {
			if (PDB_FILE_TYPE_MAP[k].value == type) {
				key = k;
			}
		})
		const pdbId = id.toLowerCase();
		// @ts-ignore
		const { path, suffix, keywords, isEmdb, subDir } = map;
		let where = {
			structureId: id.toLowerCase(),
			fileType: key
		}
		if (filePath) {
			where['filePath'] = filePath
		}
		const findFile = await PdbcFile.findOne({
			where: where,
			order: [['createdAt', 'DESC']]
		})
		if (!findFile) {
			throw new HttpException('文件不存在', 400);
		}
		return `${isEmdb ? emdbDataPath : DataPath}${findFile.filePath}`;
	}

	/**
	 * 获取3d截图文件列表
	 */
	async get3dImageList(id: string) {
		const { DataPath } = this.configs.info;
		const pdbId = id.toLowerCase();
		const filePath = `${DataPath}/images/snapshot/${pdbId}`;
		const files = await fg(`${filePath}/*.png`, {
			stats: false,
		});
		let fileNames = files.map(file => {
			return file.split('/').pop();
		});
		let result = {
			assemblys: [],
			unit: '',
		};
		if (fileNames && fileNames.length > 0) {
			fileNames.map(file => {
				if (file.indexOf('assembly') != -1) {
					result.assemblys.push(file);
				} else {
					result.unit = file;
				}
			});
		}
		return result;
	}

	/**
	 * 获取 FASTA sequence
	 */
	async getFastaSequence(PDBID: string) {
		PDBID = PDBID.toLowerCase();
		// 使用正则表达式匹配PDBID和相关数据
		const regex = new RegExp(`(>${PDBID}_\\w+.*\\n.*\\n)`, 'gi');
		const matches = this.pdbSeqresStr.match(regex);
		if (matches) {
			matches.forEach(match => {
				console.log(match);
			});
			return matches.join('');
		} else {
			console.log(`No data found for PDBID: ${PDBID}`);
		}
		return '';
	}

	/**
	 * 获取versionsFile 文件地址
	 */
	async getVersionsFilePath(pdbid: string, versions: string) {
		versions = versions.toLowerCase();
		versions = versions.replace('.', '-');
		pdbid = pdbid.toLowerCase();
		// 获取中间2位
		const middleStr = pdbid.substr(1, 2);
		let path = `${this.configs.info.pdbVersionedPath}/data/entries/${middleStr}/pdb_0000${pdbid}/pdb_0000${pdbid}_xyz_v${versions}.cif.gz`;
		return path;
	}
}
