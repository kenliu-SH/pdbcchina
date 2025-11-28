import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { File } from "@model/file.model";
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { createReadStream, createWriteStream, existsSync, mkdirSync, statSync } from 'fs';
import { Response } from 'express';
import * as fs from 'fs';
import axios from 'axios';
import path = require('path');
import _ = require('lodash');
import { PackDownDto } from './file.dto';
import { ParseService } from '@library/parse';
import { FILE_ACTION, PDB_FILE_FORMAT } from '@common/constant';
const JSZip = require('jszip');
const glob = require('glob');
import * as shelljs from 'shelljs';
// import * as puppeteer from 'puppeteer';
// import { PuppeteerService } from '@library/puppeteer';

@Injectable()
export class FileService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		private readonly configs: ConfigProvider,
		// private readonly puppeteerService: PuppeteerService,
		private readonly parseService: ParseService,
	) { }

	public async showPDB(PDBId: string, response: Response) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		let path = `${this.configs.info.DataPath}/pdb/data/biounit/coordinates/divided/*/${PDBId}.pdb1.gz`;
		const files: any = await new Promise((resolve, reject) => {
			glob(path, {}, function (er, files) {
				resolve(files);
			});
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			// 'Content-type': 'application/octet-stream', // 下载
			'Content-type': 'text/plain;charset=UTF-8',
			// 'Content-Disposition': 'attachment;filename=' + encodeURI(files[0]),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	public async downPDB(PDBId: string, response: Response) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		let path = `${this.configs.info.DataPath}/pdb/data/biounit/coordinates/divided/*/${PDBId}.pdb1.gz`;
		const files: any = await new Promise((resolve, reject) => {
			glob(path, {}, function (er, files) {
				resolve(files);
			});
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		let fileName = files[0].split('/').pop();
		fileName.replace('.gz', '');
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': 'application/octet-stream', // 下载
			'Content-Disposition': 'attachment;filename=' + encodeURI(`${fileName}`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	// public async getRibbonDiagrams(PDBId: string, response: Response) {
	// 	PDBId = PDBId.toLocaleLowerCase();
	// 	let dirPath = `${this.configs.info.DataPath}/images/structures`;
	// 	if (!existsSync(dirPath)) {
	// 		mkdirSync(dirPath, { recursive: true });
	// 	}
	// 	let imageFilePath = `${dirPath}/${PDBId}.png`;
	// 	let files: any[] = await new Promise((resolve, reject) => {
	// 		glob(imageFilePath, {}, function (er, files) {
	// 			resolve(files);
	// 		});
	// 	});
	// 	if (!files || files.length < 1) {
	// 		// // 获取PDB文件
	// 		// let path = `${this.configs.info.DataPath}/pub/pdb/data/biounit/coordinates/divided/*/${PDBId}.pdb1.gz`;
	// 		// let files: any = await new Promise((resolve, reject) => {
	// 		// 	glob(path, {}, function (er, files) {
	// 		// 		resolve(files);
	// 		// 	});
	// 		// });
	// 		// if (files.length < 1) {
	// 		// 	// 找CIF文件
	// 		// 	let path = `${this.configs.info.DataPath}/pub/pdb/data/structures/divided//mmCIF/*/${PDBId}.cif.gz`;
	// 		// 	files = await new Promise((resolve, reject) => {
	// 		// 		glob(path, {}, function (er, files) {
	// 		// 			resolve(files);
	// 		// 		});
	// 		// 	});
	// 		// }
	// 		// let filePath = files[0];
	// 		// let fileName = files[0].split('/').pop();
	// 		// // 调用python 脚本生成图像
	// 		// shelljs.cd(process.cwd() + '/script');
	// 		// let pythonPath = this.configs.info.env == 'test' ? '/usr/bin/python2.7' : 'python3';
	// 		// shelljs.exec(`${pythonPath} 3d-view-screenshot.py ${filePath} ${imageFilePath}`, {
	// 		// 	silent: true,
	// 		// 	async: true,
	// 		// }).stdout;
	// 		// shelljs.cd('..');
	// 		// if (this.configs.info.env != 'test') {
	// 		await this.puppeteerService.renderMolstarImage(PDBId, imageFilePath);
	// 		// }
	// 	}
	// 	// 读取图片流
	// 	const fileReadStream = createReadStream(imageFilePath);
	// 	const stat = statSync(imageFilePath);

	// 	response.set({
	// 		'Content-type': 'image/png',
	// 		'Content-Length': stat.size,
	// 	});
	// 	fileReadStream.pipe(response);
	// }

	public async getRibbonDiagramFileNameList(PDBId: string) {
		PDBId = PDBId.toLocaleLowerCase();
		const result = {
			'Biological Assembly': [],
			'Asymmetric Unit': [],
			'NMR Ensemble': [],
		};
		let files: any[] = await new Promise((resolve, reject) => {
			glob(`${this.configs.info.DataPath}/images/structures/*/*/${PDBId}*.jpeg`, {}, function (er, files) {
				resolve(files);
			});
		});
		if (files.length < 1) {
			// 下载
			let index = 1;
			while (true) {
				try {
					const data = await this.downRibbonDiagrams(PDBId, index);
					console.log(333, data);

					if (!data.isAssembly && !data.isAssembly) {
						break;
					}
					index = index + 1;
				} catch (error) {
					console.log('写入文件错误', error);

					break;
				}
			}
			files = await new Promise((resolve, reject) => {
				glob(`${this.configs.info.DataPath}/images/structures/*/*/${PDBId}*.jpeg`, {}, function (er, files) {
					resolve(files);
				});
			});
		}
		files.forEach((path: string) => {
			if (path.indexOf('assembly-') != -1 || path.indexOf('assembly.') != -1)
				result['Biological Assembly'].push(path.split('/')[path.split('/').length - 1]);
			if (path.indexOf('model-') != -1 || path.indexOf('model.') != -1)
				result['Asymmetric Unit'].push(path.split('/')[path.split('/').length - 1]);
		});
		const parsingData = await this.parseService.parsePDB(PDBId);
		// 如果方法中有NMR 就一定有NMR Ensemble, 挑选一个
		for (let index = 0; index < parsingData.vo['summary']['Experimental Data Snapshot'].length; index++) {
			const { Method } = parsingData.vo['summary']['Experimental Data Snapshot'][index];
			if (Method.indexOf('NMR') != -1 && result['NMR Ensemble'].length < 1) {
				result['Asymmetric Unit'] = [];
				const models = _.find(files, o => {
					return o.indexOf('models-') != -1 || o.indexOf('models.') != -1;
				});
				const model = _.find(files, o => {
					return o.indexOf('model-') != -1 || o.indexOf('model.') != -1;
				});
				const assembly = _.find(files, o => {
					return o.indexOf('assembly-') != -1 || o.indexOf('assembly.') != -1;
				});
				if (models) {
					result['NMR Ensemble'].push(models.split('/')[models.split('/').length - 1]);
					break;
				}
				if (model) {
					result['NMR Ensemble'].push(model.split('/')[model.split('/').length - 1]);
					break;
				}
				if (assembly) {
					result['NMR Ensemble'].push(assembly.split('/')[assembly.split('/').length - 1]);
					break;
				}
			}
		}

		return result;
	}

	public async ribbonDiagramsShow(name: string, response: Response) {
		let files: any[] = await new Promise((resolve, reject) => {
			glob(`${this.configs.info.DataPath}/pdb/data/images/structures/*/*/${name}`, {}, function (er, files) {
				resolve(files);
			});
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);

		response.set({
			// 'Content-type': 'application/octet-stream', // 下载
			'Content-type': 'image/png',
			// 'Content-Disposition': 'attachment;filename=' + encodeURI(`${dto.PDBId}_model-1.jpeg`),
			'Content-Length': stats.size,
		});
		writeStream.pipe(response);
	}

	private async downRibbonDiagrams(PDBId: string, index: number = 1) {
		let pathAssembly, pathModel;
		const rootDataPath = this.configs.info.DataPath;
		const fileNameAssembly = `${PDBId}_assembly-${index}.jpeg`; // 生物
		const fileNameModel = `${PDBId}_model-${index}.jpeg`; // 不对称单位
		const fileNameModels = `${PDBId}_models.jpeg`; // 不对称单位
		const fillPath = `images/structures/${PDBId.substring(1, PDBId.length - 1)}/${PDBId}/`;
		// 创建文件夹
		if (!fs.existsSync(`${rootDataPath}/${fillPath}`)) {
			fs.mkdirSync(`${rootDataPath}/${fillPath}`, { recursive: true });
		}
		// 下载文件
		const urlAssembly = `https://cdn.rcsb.org/${fillPath}${fileNameAssembly}`;
		const urlModel = `https://cdn.rcsb.org/${fillPath}${fileNameModel}`;
		const urlModels = `https://cdn.rcsb.org/${fillPath}${fileNameModels}`;
		console.log(111, urlModels);

		let isAssembly = false;
		let isModel = false;
		let isModels = false;
		console.log(555, urlAssembly);

		// 下载图片1
		try {
			const resAssembly = await axios({
				url: urlAssembly,
				method: 'GET',
				responseType: 'stream',
			});
			if (resAssembly.status == 200) {
				pathAssembly = path.resolve(rootDataPath, fillPath, fileNameAssembly);
				const writer = fs.createWriteStream(pathAssembly);
				resAssembly.data.pipe(writer);
				await new Promise((resolve, reject) => {
					writer.on('finish', resolve);
					writer.on('error', reject);
				});
				isAssembly = true;
			}
		} catch (error) { }

		// 下载图片2
		try {
			const resModel = await axios({
				url: urlModel,
				method: 'GET',
				responseType: 'stream',
			});
			if (resModel.status == 200) {
				pathModel = path.resolve(rootDataPath, fillPath, fileNameModel);
				const writer = fs.createWriteStream(pathModel);
				resModel.data.pipe(writer);
				await new Promise((resolve, reject) => {
					writer.on('finish', resolve);
					writer.on('error', reject);
				});
				isModel = true;
			}
		} catch (error) { }

		// 下载图片3
		try {
			const resModel = await axios({
				url: urlModels,
				method: 'GET',
				responseType: 'stream',
			});
			if (resModel.status == 200) {
				pathModel = path.resolve(rootDataPath, fillPath, fileNameModels);
				const writer = fs.createWriteStream(pathModel);
				resModel.data.pipe(writer);
				await new Promise((resolve, reject) => {
					writer.on('finish', resolve);
					writer.on('error', reject);
				});
				isModels = true;
			}
		} catch (error) { }
		return { isAssembly, isModel };
	}

	public async validationFull(PDBId: string, response: Response) {
		PDBId = PDBId.toLocaleLowerCase();
		console.log(333333, `${this.configs.info.DataPath}/pdb/validation_reports/*/${PDBId}/${PDBId}_full_validation.pdf.gz`);
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/validation_reports/*/${PDBId}/${PDBId}_full_validation.pdf.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': 'application/pdf',
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	public async validationPNG(PDBId: string, response: Response) {
		PDBId = PDBId.toLocaleLowerCase();
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/validation_reports/*/${PDBId}/${PDBId}_multipercentile_validation.png.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': 'image/png',
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	public async packDown(dto: PackDownDto, response: Response) {
		for (let index = 0; index < dto.PIDBS.length; index++) {
			const v = dto.PIDBS[index];
			dto.PIDBS[index] = v.toLowerCase();
		}
		let filePaths = [];
		for (let index = 0; index < dto.formats.length; index++) {
			const format = dto.formats[index];
			const files = await this.getFilePathByFormat(dto.PIDBS, format);
			console.log('files->>>>', files);
			filePaths = filePaths.concat(files);
		}
		response.setHeader('Content-Type', 'application/zip');
		const zip = new JSZip();
		// 声明一个压缩文件夹
		const folder = zip.folder('package');
		// 为文件夹添加文件
		// 如果是需要压缩一个目录下文件夹，那么循环当前这个文件夹，
		// 为文件夹挨个添加文件名以及文件内容
		for (let index = 0; index < filePaths.length; index++) {
			const path: string = filePaths[index];
			const fileName = path.split('/')[path.split('/').length - 1];
			folder.file(fileName, fs.readFileSync(path));
		}
		// 通过 base64 类型生成zip的内容
		response.set({
			'Content-Type': 'application/zip',
			'Content-Disposition': 'attachment;filename=' + encodeURI('package.zip'),
		});
		zip.generateAsync({
			type: 'nodebuffer',
			compression: 'DEFLATE',
			compressionOptions: {
				//压缩级别
				level: 9,
			},
		}).then(content => {
			const stream = require('stream');
			const bufferStream = new stream.PassThrough();
			bufferStream.end(content);
			bufferStream.pipe(response);
		});
	}

	public async downCif(PDBId: string, response: Response) {
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
			throw new HttpException(null, 400008);
		}

		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': 'application/octet-stream', // 下载
			'Content-Disposition': 'attachment;filename=' + encodeURI(`${PDBId}.cif`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	public async showCif(PDBId: string, response: Response) {
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
			throw new HttpException(null, 400008);
		}

		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': 'text/plain;charset=UTF-8', //
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载PDBML文件
	 */
	public async downPDBML(PDBId: string, response: Response, action: FILE_ACTION) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/data/structures/divided/XML/*/${PDBId}.xml.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8', // 下载
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${PDBId}.xml`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载PDBML文件(no-atom,header only)
	 */
	public async downPDBMLNoAtom(PDBId: string, response: Response, action: FILE_ACTION) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/data/structures/divided/XML-noatom/*/${PDBId}-noatom.xml.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8', // 下载
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${PDBId}-noatom.xml`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载PDBML文件(ext-atom)
	 */
	public async downPDBMLExtAtom(PDBId: string, response: Response, action: FILE_ACTION) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/data/structures/divided/XML-noatom/*/${PDBId}-extatom.xml.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8', // 下载
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${PDBId}-extatom.xml`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载验证报告XML文件
	 */
	public async downValidationXML(PDBId: string, response: Response, action: FILE_ACTION) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/validation_reports/*/${PDBId}/${PDBId}_validation.xml.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8', // 下载
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${PDBId}_validation.xml.gz`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载验证报告CIF文件
	 */
	public async downValidationCIF(PDBId: string, response: Response, action: FILE_ACTION) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/validation_reports/*/${PDBId}/${PDBId}_validation.cif.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8',
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${PDBId}_validation.cif.gz`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载验证报告PDF文件
	 */
	public async downValidationPDF(PDBId: string, response: Response, action: FILE_ACTION) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/pdb/validation_reports/*/${PDBId}/${PDBId}_validation.pdf.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8',
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${PDBId}_validation.pdf.gz`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载/显示/EMDB文件
	 */
	public async downEMDB(EMDBId: string, response: Response, action: FILE_ACTION) {
		EMDBId = EMDBId.split('-')[1];
		console.log(2222, EMDBId);
		const files: any = await new Promise((resolve, reject) => {
			glob(
				`${this.configs.info.DataPath}/emdb/structures/EMD-${EMDBId}/map/emd_${EMDBId}.map.gz`,
				{},
				function (er, files) {
					resolve(files);
				},
			);
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			'Content-type': action == FILE_ACTION.down ? 'application/octet-stream' : 'text/plain;charset=UTF-8', // 下载
			'Content-Disposition':
				`${action == FILE_ACTION.down ? 'attachment;' : ''}filename=` + encodeURI(`${EMDBId}.map.gz`),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	/**
	 * 根据文件格式获取文件路径
	 */
	public async getFilePathByFormat(PDBIds: string[], format: PDB_FILE_FORMAT) {
		// 文件路径规则
		let filePathRule = `${this.configs.info.DataPath}/pdb/data/biounit/coordinates/divided/*/{${PDBIds.join(
			',',
		)}}.pdb1.gz`;
		switch (format) {
			case PDB_FILE_FORMAT.PDB: {
				filePathRule = `${this.configs.info.DataPath}/pdb/data/biounit/coordinates/divided/*/{${PDBIds.join(
					',',
				)}}.pdb1.gz`;
				break;
			}
			case PDB_FILE_FORMAT['PDBx/mmCIF']: {
				filePathRule = `${this.configs.info.DataPath}/pdb/data/structures/divided/mmCIF/*/{${PDBIds.join(
					',',
				)}}.cif.gz`;
				break;
			}
			case PDB_FILE_FORMAT.PDBML: {
				filePathRule = `${this.configs.info.DataPath}/pdb/data/structures/divided/XML/*/{${PDBIds.join(
					',',
				)}}.xml.gz`;
				break;
			}
			default: {
				throw new HttpException(`暂不支持下 ${format} 类型资源文件`, 400009);
			}
		}
		console.log('filePathRule->>>', filePathRule);
		const files: any = await new Promise((resolve, reject) => {
			glob(filePathRule, {}, function (er, files) {
				if (er) reject(er);
				resolve(files);
			});
		});
		return files;
	}

	/**
	 * 
	 */
}
