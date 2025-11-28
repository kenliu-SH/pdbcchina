import { AdminController } from '@core/decorator';
import { OpenAuthorize } from '@core/decorator/authorize';
import { Tag } from '@model/tag.model';
import { Body, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SystemConfigService } from './systemConfig.service';
import { SystemConfig } from '@model/systemConfig.model';
import {
	IndexFooterDto,
	IndexShowBuildingDto,
	IndexShowCountConfigDto,
	IndexShowLogoImgConfigDto,
} from './systemConfig.dto';
import { SystemConfigKey } from '@common/constant';

@ApiTags('系统配置')
@ApiBearerAuth()
@AdminController('systemConfig')
export class SystemConfigController {
	constructor(
		private readonly service: SystemConfigService,
		@InjectModel(SystemConfig)
		private systemConfigModel: typeof SystemConfig,
	) {}

	// 首页蛋白质数量描述
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '首页蛋白质数量描述' })
	@Get('/protein')
	async getProtein() {
		const result = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.homeProteinCountDesc,
			},
		});
		return result;
	}

	// 配置首页蛋白质数量描述
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '配置首页蛋白质数量描述' })
	@Put('/protein')
	async createProtein(@Body() dto: IndexShowCountConfigDto) {
		let systemConfig = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.homeProteinCountDesc,
			},
		});

		if (systemConfig) {
			// 如果找到了对应的系统配置，则更新其值
			systemConfig.value = {
				proteinCount: dto.proteinCount,
				proteinCountZh: dto.proteinCountZh,
			};
			await systemConfig.save();
		} else {
			// 如果没有找到对应的系统配置，则创建一个新的配置项
			systemConfig = await SystemConfig.create({
				key: SystemConfigKey.homeProteinCountDesc,
				value: {
					proteinCount: dto.proteinCount,
					proteinCountZh: dto.proteinCountZh,
				},
			});
		}
		return systemConfig;
	}

	// 首页 LOGO 图文配置
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取 LOGO 图文配置' })
	@Get('/logo')
	async getLogo() {
		const result = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.homeLogo,
			},
		});
		return result;
	}

	// 配置首页 LOGO 图文
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '配置首页 LOGO 图文' })
	@Put('/logo')
	async createLogo(@Body() dto: IndexShowLogoImgConfigDto) {
		let systemConfig = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.homeLogo,
			},
		});

		if (systemConfig) {
			// 如果找到了对应的系统配置，则更新其值
			systemConfig.value = {
				proteinLogo: dto.logo,
				proteinText: dto.text,
				proteinTextZh: dto.textZh,
			};
			await systemConfig.save();
		} else {
			// 如果没有找到对应的系统配置，则创建一个新的配置项
			systemConfig = await SystemConfig.create({
				key: SystemConfigKey.homeLogo,
				value: {
					proteinLogo: dto.logo,
					proteinText: dto.text,
					proteinTextZh: dto.textZh,
				},
			});
		}
		return systemConfig;
	}

	// 建设中页面配置
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取建设中页面信息' })
	@Get('/building')
	async getBuilding() {
		const result = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.building,
			},
		});
		return result;
	}

	// 配置建设中页面
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '配置建设中页面' })
	@Put('/building')
	async createBuilding(@Body() dto: IndexShowBuildingDto) {
		let systemConfig = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.building,
			},
		});

		if (systemConfig) {
			// 如果找到了对应的系统配置，则更新其值
			systemConfig.value = {
				building: dto.buildingImg,
				text: dto.text,
				textZh: dto.textZh,
				desc: dto.desc,
				descZh: dto.descZh,
			};
			await systemConfig.save();
		} else {
			// 如果没有找到对应的系统配置，则创建一个新的配置项
			systemConfig = await SystemConfig.create({
				key: SystemConfigKey.building,
				value: {
					building: dto.buildingImg,
					text: dto.text,
					textZh: dto.textZh,
					desc: dto.desc,
					descZh: dto.descZh,
				},
			});
		}
		return systemConfig;
	}

	// // 配置底部信息
	// @HttpCode(HttpStatus.OK)
	// @ApiOperation({ summary: '配置底部信息' })
	// @Put('/footer')
	// async createFooter(@Body() dto: IndexFooterDto) {
	// 	let systemConfig = await SystemConfig.findOne({
	// 		where: {
	// 			key: SystemConfigKey.footer,
	// 		},
	// 	});

	// 	if (systemConfig) {
	// 		// 如果找到了对应的系统配置，则更新其值
	// 		systemConfig.value = {
	// 			img: dto.img,
	// 			link: dto.link,
	// 		};
	// 		await systemConfig.save();
	// 	} else {
	// 		// 如果没有找到对应的系统配置，则创建一个新的配置项
	// 		systemConfig = await SystemConfig.create({
	// 			key: SystemConfigKey.footer,
	// 			value: {
	// 				img: dto.img,
	// 				link: dto.link,
	// 			},
	// 		});
	// 	}
	// 	return systemConfig;
	// }

	// // 获取底部信息
	// @HttpCode(HttpStatus.OK)
	// @ApiOperation({ summary: '获取底部信息' })
	// @Get('/footer')
	// async getFooter() {
	// 	const result = await SystemConfig.findOne({
	// 		where: {
	// 			key: SystemConfigKey.footer,
	// 		},
	// 	});
	// 	return result;
	// }
}
