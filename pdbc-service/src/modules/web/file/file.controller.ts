import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { FileService } from './file.service';
import { Request, Response } from 'express';
import { PackDownDto } from './file.dto';
import { OpenAuthorize } from '@core/decorator/authorize';
import { FILE_ACTION } from '@common/constant';
import { ConfigProvider } from '@library/configs';

@ApiTags('文件(100d|200d)')
@ApiBearerAuth()
@WebController('file')
export class FileController {

	constructor(private readonly service: FileService,) { }
	@ApiOperation({ summary: '查看PDB文件' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/pdb/show/:id')
	async showPDB(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.showPDB(PDBId, response);
	}

	@ApiOperation({ summary: '下载PDB文件' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/pdb/down/:id')
	async downPDB(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.downPDB(PDBId, response);
	}

	@ApiOperation({ summary: '下载CIF文件' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('/mmCIF/down/:id')
	async downCif(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.downCif(PDBId, response);
	}

	@ApiOperation({ summary: '查看CIF文件' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('/mmCIF/show/:id')
	async showCif(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.showCif(PDBId, response);
	}

	@ApiOperation({ summary: '获取二维剖面图' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', example: '8ED0', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/ribbonDiagrams/:id')
	async getRibbonDiagrams(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		// await this.service.getRibbonDiagrams(PDBId, response);
	}

	@ApiOperation({ summary: '获取二维剖面图文件名列表(详情页用)' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/ribbonDiagramsUrlList/:id')
	async getRibbonDiagramFileNameList(@Param() param) {
		const { id: PDBId } = param;
		const result = await this.service.getRibbonDiagramFileNameList(PDBId);
		return result;
	}

	@ApiOperation({ summary: '返回指定文件名的二维剖面图' })
	@ApiParam({ name: 'name', description: 'name', type: String })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdb/ribbonDiagramsShow/:name')
	async ribbonDiagramsShow(@Param() param, @Res() response: Response) {
		const { name } = param;
		await this.service.ribbonDiagramsShow(name, response);
	}

	@ApiOperation({ summary: '获取完整验证报告PDF' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('/validation/full/:id')
	async validationFull(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.validationFull(PDBId, response);
	}

	@ApiOperation({ summary: '获取验证图片' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/validation/png/:id')
	async validationPNG(@Param() param, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.validationPNG(PDBId, response);
	}

	@ApiOperation({ summary: '批量压缩下载' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Post('/pack/down')
	async packDown(@Body() dto: PackDownDto, @Res() response: Response) {
		await this.service.packDown(dto, response);
	}

	/**
	 * 下载PDBML文件
	 */
	@ApiOperation({ summary: '获取PDBML文件' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdbml/:action/:id')
	async downPDBML(@Param() param, @Res() response: Response) {
		const { id: PDBId, action = FILE_ACTION.down } = param;
		await this.service.downPDBML(PDBId, response, action);
	}

	/**
	 * 下载PDBML文件(no-atom,header only)
	 */
	@ApiOperation({ summary: '获取PDBML文件(no-atom,header only)' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdbml/noatom/:action/:id')
	async downPDBMLNoAtom(@Param() param, @Res() response: Response) {
		const { id: PDBId, action = FILE_ACTION.down } = param;
		await this.service.downPDBMLNoAtom(PDBId, response, action);
	}

	/**
	 * 下载PDBML文件(ext-atom)
	 */
	@ApiOperation({ summary: '获取PDBML文件(ext-atom)' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/pdbml/extatom/:action/:id')
	async downPDBMLExtAtom(@Param() param, @Res() response: Response) {
		const { id: PDBId, action = FILE_ACTION.down } = param;
		await this.service.downPDBMLExtAtom(PDBId, response, action);
	}

	/**
	 * 下载验证报告XML文件
	 */
	@ApiOperation({ summary: '下载验证报告XML文件' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@Get('/validation/xml/:action/:id')
	async validationXML(@Param() param, @Res() response: Response) {
		const { id: PDBId, action = FILE_ACTION.down } = param;
		await this.service.downValidationXML(PDBId, response, action);
	}

	/**
	 * 下载验证报告CIF文件
	 */
	@ApiOperation({ summary: '下载验证报告CIF文件' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/validation/cif/:action/:id')
	async validationCIF(@Param() param, @Res() response: Response) {
		const { id: PDBId, action = FILE_ACTION.down } = param;
		await this.service.downValidationCIF(PDBId, response, action);
	}

	/**
	 * 下载验证报告PDF文件
	 */
	@ApiOperation({ summary: '下载验证报告PDF文件' })
	@ApiParam({ name: 'id', description: 'PDBID', type: String })
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/validation/pdf/:action/:id')
	async validationPDF(@Param() param, @Res() response: Response) {
		const { id: PDBId, action = FILE_ACTION.down } = param;
		await this.service.downValidationPDF(PDBId, response, action);
	}

	/**
	 * emdb 文件
	 */
	@ApiOperation({ summary: '下载/显示/EMDB文件(只有8C90有测试数据)' })
	@ApiParam({ name: 'id', description: 'EMDBID', type: String, example: 'EMD-16497' })
	@ApiParam({ name: 'action', description: '动作 下载或显示文件', type: String, enum: Object.values(FILE_ACTION) })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/emdb/:action/:id')
	async downEMDB(@Param() param, @Res() response: Response) {
		const { id: EMDBId, action = FILE_ACTION.down } = param;
		await this.service.downEMDB(EMDBId, response, action);
	}



}
