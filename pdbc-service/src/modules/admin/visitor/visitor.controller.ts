import { AdminController } from '@core/decorator';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { VisitorService } from './visitor.service';
import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { BatchGenerateDto } from './visitor.dto';
import { Visitor } from '@model/index';
import dayjs = require('dayjs');

@ApiTags('访问码')
@ApiBearerAuth()
@AdminController('visitor')
export class VisitorController {
	constructor(private readonly service: VisitorService) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '批量生成验证码' })
	@Post('batchGenerate')
	async batchGenerate(@Body() dto: BatchGenerateDto) {
		const { count, expiresAt, remark } = dto;
		const codes = await this.service.generateCodes(count, expiresAt, remark);
		return { codes };
	}

	// 获取访问列表
	@ApiOperation({ summary: '获取访问列表' })
	@HttpCode(HttpStatus.OK)
	@Get('/list')
	async list() {
		const result = await Visitor.findAll({
			attributes: ['id', 'accessCode', 'expiresAt', 'isExpires', 'remark'],
			order: [['id', 'DESC']],
		});

		const currentDate = dayjs();
		result.forEach(async visitor => {
			const expiresAt = dayjs(visitor.expiresAt);
			if (expiresAt.isBefore(currentDate)) {
				visitor.isExpires = 1;
				await visitor.save();
			}
		});
		return result;
	}

	// 删除访问码
	@ApiOperation({ summary: '删除访问码' })
	@ApiParam({ name: 'id', description: '访问码id' })
	@HttpCode(HttpStatus.OK)
	@Delete('/:id')
	async delete(@Param('id') id: number) {
		const result = await Visitor.destroy({ where: { id } });
		return result;
	}
}
