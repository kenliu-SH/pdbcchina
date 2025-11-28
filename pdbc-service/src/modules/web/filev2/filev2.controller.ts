import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { FileServiceV2 } from './filev2.service';
import { Request, Response } from 'express';
import { OpenAuthorize } from '@core/decorator/authorize';
import { FILE_ACTION, PDB_FILE_TYPE } from '@common/constant';
import { createReadStream, statSync } from 'fs';
import { readFile } from 'fs/promises';
import { ConfigProvider } from '@library/configs';
import * as fg from 'fast-glob';
import { DownVersionsFileDto, ShowFileDto } from './filev2.dto';
const { Readable } = require('stream');

@ApiTags('文件接口V2')
@ApiBearerAuth()
@WebController('file/v2')
export class FileV2Controller {
	constructor(private readonly service: FileServiceV2, private readonly configs: ConfigProvider) { }
	/**
	 * 获取文件展示与下载信息
	 */
	@ApiOperation({ summary: '获取文件展示与下载信息' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', example: '8ED0', type: String })
	@Get('/options/:id')
	async getFileOptions(@Param('id') id: string) {
		const result = await this.service.getFileOptions(id);
		return result;
	}

	/**
	 * 显示文件
	 */
	@ApiOperation({ summary: '显示文件' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', example: '7WWA', type: String })
	@ApiParam({
		name: 'type',
		description: '文件类型/名称',
		example: PDB_FILE_TYPE.ENTRY_MMCIF,
		type: String,
		enum: [...Object.values(PDB_FILE_TYPE)],
	})
	@Get('/show/:id/:type')
	async showFile(@Param('id') id: string, @Param('type') type: PDB_FILE_TYPE, @Query() dto: ShowFileDto, @Res() response: Response) {
		let writeStream = null;
		if (type != PDB_FILE_TYPE.FASTA_SEQUENCE) {
			// 获取文件地址
			const path = await this.service.getFilePath(id, type, dto.filePath);
			// 显示文件
			writeStream = createReadStream(path);
			const stats = statSync(path);
			// 从 path 中获取文件名
			let fileName = path.split('/').pop();
			// 暂时去除 .gz
			fileName = path.split('/').pop().replace('.gz', '');
		} else {
			const data = await this.service.getFastaSequence(id);
			writeStream = new Readable();
			writeStream.push(data);
			writeStream.push(null);
		}

		response.set({
			'Content-type': 'text/plain;charset=UTF-8',
			// 'Content-Disposition': `filename=` + encodeURI(`${fileName}`),
			// 'Content-Length': stats.size,
			'Content-Encoding': type != PDB_FILE_TYPE.FASTA_SEQUENCE ? 'gzip' : '',
		});
		writeStream.pipe(response);
	}

	/**
	 * 下载文件
	 */
	@ApiOperation({ summary: '下载文件' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', example: '7WWA', type: String })
	@ApiParam({
		name: 'type',
		description: '文件类型/名称',
		example: PDB_FILE_TYPE.ENTRY_MMCIF,
		type: String,
		enum: [...Object.values(PDB_FILE_TYPE)],
	})
	@Get('/down/:id/:type')
	async downFile(@Param('id') id: string, @Param('type') type: PDB_FILE_TYPE, @Query() dto: ShowFileDto, @Res() response: Response) {
		// 获取文件地址
		let writeStream = null;
		if (type != PDB_FILE_TYPE.FASTA_SEQUENCE) {
			const path = await this.service.getFilePath(id, type, dto.filePath);
			// 从 path 中获取文件名
			let fileName = path.split('/').pop();
			// 暂时去除 .gz
			// emdb 不需要去除
			if (!path.includes('EMD')) {
				fileName = path.split('/').pop().replace('.gz', '');
			}
			// 下载文件
			writeStream = createReadStream(path);
			const stats = statSync(path);
			response.set({
				'Content-type': 'application/octet-stream',
				'Content-Disposition': `attachment;filename=` + encodeURI(`${fileName}`),
				'Content-Length': stats.size,
				'Content-Encoding': !path.includes('EMD') ? 'gzip' : '',
			});
		} else {
			const data = await this.service.getFastaSequence(id);
			writeStream = new Readable();
			writeStream.push(data);
			writeStream.push(null);
			response.set({
				'Content-type': 'application/octet-stream',
				'Content-Disposition': `attachment;filename=` + encodeURI(`pdbc_pdb_${id.toUpperCase()}.fasta`),
				'Content-Encoding': 'UTF-8',
			});
		}

		writeStream.pipe(response);
	}

	// 获取3d截图图片
	@ApiOperation({ summary: '获取3d截图图片' })
	@ApiParam({ name: 'name', description: '文件名称', type: String })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/3dImage/:name')
	async get3dImage(@Param('name') fileName: string, @Res() response: Response) {
		// 获取name前四位
		let pdbId = fileName.substr(0, 4);
		pdbId = pdbId.toLowerCase();
		const filePath = `${this.configs.info.DataPath}/images/snapshot/${pdbId}/${fileName}`;
		// 下载文件

		try {
			const data = await readFile(filePath);
			response.set({
				'Content-type': 'image/png',
			});
			return response.send(data);
		} catch (error) {
			return response.status(HttpStatus.NOT_FOUND).send();
		}
	}

	// 获取3d截图文件列表
	@ApiOperation({ summary: '获取3d截图文件列表' })
	@ApiParam({ name: 'pdbId', description: 'PDBID', example: '8IGL', type: String })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/3dImage/list/:pdbId')
	async get3dImageList(@Param('pdbId') pdbId: string) {
		const result = await this.service.get3dImageList(pdbId);
		return result;
	}

	// 获取小分子化学结构式图片
	@ApiOperation({ summary: '获取小分子化学结构式图片' })
	@ApiParam({ name: 'name', description: '文件名称', type: String, example: '8og.png' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/chemImage/:name')
	async getChemImage(@Param('name') fileName: string, @Res() response: Response) {
		// 获取name前3位
		let ccdId = fileName.split('.')[0];
		ccdId = ccdId.toUpperCase();
		const filePath = `${this.configs.info.DataPath}/images/ligand/${ccdId}/${ccdId}.svg`;
		// 下载文件
		try {
			const data = await readFile(filePath);
			response.set({
				'Content-type': 'image/svg+xml',
			});
			return response.send(data);
		} catch (error) {
			return response.status(HttpStatus.NOT_FOUND).send();
		}
	}

	// ccd下载
	@ApiOperation({ summary: 'ccd下载' })
	@ApiParam({ name: 'name', description: 'ccd file name', type: String, example: '8OG.cif' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/chemFile/:name')
	async getChemFile(@Param('name') name: string, @Res() response: Response) {
		// 获取id
		let ccdId = name.split('.')[0];
		ccdId = ccdId.toUpperCase();
		const lastStr = ccdId.substr(ccdId.length - 1, 1);
		const filePath = `${this.configs.info.DataPath}/pdb/refdata/chem_comp/${lastStr}/${ccdId}/${ccdId}.cif`;
		// 下载文件
		try {
			const data = await readFile(filePath);
			response.set({
				'Content-type': 'text/plain;charset=UTF-8',
			});
			return response.send(data);
		} catch (error) {
			return response.status(HttpStatus.NOT_FOUND).send();
		}
	}

	/**
	 * 下载 versions cif 文件
	 */
	@ApiOperation({ summary: '下载 versions cif 文件' })
	@OpenAuthorize()
	@Get('/down/versions')
	async downVersionsFile(@Query() dto: DownVersionsFileDto, @Res() response: Response) {
		const filePath = await this.service.getVersionsFilePath(dto.pdbid, dto.version);
		const stats = statSync(filePath);
		const fileName = filePath.split('/').pop();
		// 下载文件

		try {
			let writeStream = createReadStream(filePath);
			response.set({
				'Content-type': 'application/octet-stream',
				'Content-Disposition': `attachment;filename=` + encodeURI(`${fileName}`),
				'Content-Length': stats.size,
			});
			writeStream.pipe(response);
		} catch (error) {
			return response.status(HttpStatus.NOT_FOUND).send();
		}
	}
}
