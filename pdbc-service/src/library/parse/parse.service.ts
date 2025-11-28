import { pathConstant } from '@common/constant';
import { ConfigProvider } from '@library/configs';
import { _Entry } from '@model/entry.model';
import { Op } from '@model/shared';
import { HttpException, Injectable, LoggerService } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { readFile } from 'fs/promises';
// import * as parseCif  from 'crystcif-parse'
import { unzipSync, constants } from 'zlib';
const glob = require('glob');
import _ = require('lodash');
import { Entity, ExperimentalDataSnapshot, SmallMolecule, Structure } from './entity';
import axios from 'axios';
import parseCIF from './parse';
@Injectable()
export class ParseService {
	public constructor(
		private readonly configs: ConfigProvider,
		@InjectModel(_Entry)
		private entryModel: typeof _Entry,
	) {}

	// 获取PDB文本信息
	public async getPDBText(PDBId: string) {
		if (this.configs.info.env == 'dev') {
			try {
				const data = await axios.get(`https://files.rcsb.org/header/${PDBId}.pdb`);
				return data.data;
			} catch (e) {
				return null;
			}
		}
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			let path = `${this.configs.info.DataPath}/pdb/data/biounit/coordinates/divided/*/${PDBId}.pdb1.gz`;
			glob(path, {}, function (er, files) {
				resolve(files);
			});
		});
		if (files.length < 1) {
			// throw new HttpException(null, 400008)
			return '';
		}
		const buffer = await readFile(files[0]);
		const result = unzipSync(buffer, { finishFlush: constants.Z_SYNC_FLUSH }).toString();
		return result;
	}

	// 获取cif文本信息
	public async getCIFText(PDBId: string) {
		if (this.configs.info.env == 'dev') {
			const data = await axios.get(`https://files.rcsb.org/header/${PDBId}.cif`, {
				// proxy: {
				//   host: '127.0.0.1',
				//   port: 7890,
				// },
			});
			return data.data;
		}
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/data/structures/divided/mmCIF/*/${PDBId}.cif.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			// 本地没有找到，尝试使用外网在线地址
			const data = await axios.get(`https://files.rcsb.org/header/${PDBId}.cif`);
			return data.data;
			// throw new HttpException(null, 400008)
		}
		const buffer = await readFile(files[0]);
		const result = unzipSync(buffer, { finishFlush: constants.Z_SYNC_FLUSH }).toString();
		return result;
	}

	public async parsePDB(PDBId: string) {
		let structure = new Structure();
		structure.DOI = `10.2210/pdb${PDBId.toLowerCase()}/pdb`;
		structure.Mutations = false;
		//---------------------解析CIF中的信息------------------//
		const cifText = await this.getCIFText(PDBId);
		const cifJSON = parseCIF(cifText);
		const Snapshot = cifJSON.summary['Experimental Data Snapshot'];
		const { macromolecules, SmallMolecules } = cifJSON.summary;
		cifJSON.summary.basis[0]['Method'] = [];
		cifJSON.summary.basis[0]['Unique Ligands'] = [];
		// 处理基础信息
		Snapshot.map(vo => {
			cifJSON.summary.basis[0]['Method'].push(`${vo['Method']} ${vo['Resolution'] ? vo['Resolution'] : ''}`);
		});
		SmallMolecules.map(vo => {
			const ID = vo['ID'];
			cifJSON.summary.basis[0]['Unique Ligands'].push(ID);
		});
		// 从大分子提取Organisms信息 去重后合并到概要信息中的 Organisms，暂不清楚多个如何处理
		macromolecules.map(vo => {
			console.log(3333, vo);

			if (cifJSON.summary.basis[0]['Organisms']) {
				cifJSON.summary.basis[0]['Organisms'].push(...vo.Organisms);
			}
		});
		// 去重
		cifJSON.summary.basis[0]['Organisms'] = _.uniqWith(cifJSON.summary.basis[0]['Organisms']);
		structure.vo = cifJSON;
		return structure;
	}

	// 截取 字符串中某一字符串后面几个字符 不传len为最后一个
	public substr(str: string, childStr: string, len: number = 0) {
		const startIndex = str.indexOf(childStr) + childStr.length;
		const result = len ? str.substring(startIndex, len + startIndex) : str.substring(startIndex);
		return result.trim();
	}

	// 深度数组去重
	public depthUniq(data: any) {
		if (_.isArray(data)) {
			data = _.uniq(data);
			for (const key in data) {
				if (Object.prototype.hasOwnProperty.call(data, key)) {
					if (_.isArray(data[key])) {
						data[key] = _.uniq(data);
					}
				}
			}
		} else if (_.isObject(data)) {
			for (const _key in data) {
				if (Object.prototype.hasOwnProperty.call(data, _key)) {
					if (_.isArray(data[_key])) {
						data[_key] = _.uniq(data[_key]);
					}
				}
			}
		}
		return data;
	}

	// 首字母大写
	public firstUp(str: string) {
		return str.toLocaleLowerCase().replace(/^\S/, s => s.toUpperCase());
	}
}
