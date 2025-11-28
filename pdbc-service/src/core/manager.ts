/*
 * @Author: your name
 * @Date: 2021-07-09 15:55:27
 * @LastEditTime: 2021-09-01 16:15:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\core\manager.ts
 */
import * as helmet from 'helmet';

import { DtoPipe } from '@core/pipe';
import { CoreModule } from '@core/module';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { ExceptionCatchFilter } from '@core/filter';
import { LoggerProvider, LoggerModule } from '@library/logger';
import { ConfigModule, ConfigProvider } from '@library/configs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LogInterceptor, FormatInterceptor } from '@core/interceptor';
import * as WebModules from '@modules/web';
import * as AdminModules from '@modules/admin';
import * as OpenModules from '@modules/open';

import express = require('express');
import { join } from 'path';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
const bodyParser = require("body-parser");
require("body-parser-xml")(bodyParser);

export class ServerManager {
	private app: INestApplication;

	public async create() {
		this.app = await NestFactory.create(CoreModule, { cors: true });
		const configs = this.app.select(ConfigModule).get(ConfigProvider);
		const logger = this.app.select(LoggerModule).get(LoggerProvider);
		const iocContext = this.app.select(CoreModule);

		// 配置 public 文件夹为静态目录，以达到可直接访问下面文件的目的
		const rootDir = join(__dirname, '../..');
		this.app.use('/', express.static(join(rootDir, 'public')));
		this.app.use(bodyParser.xml());
		this.app.use(bodyParser.json({ limit: "100mb" }));
		this.app.use(express.json({ limit: '50mb' }));
		this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
		// this.app.use(helmet());
		this.app.useLogger(logger);
		this.app.useGlobalPipes(iocContext.get(DtoPipe));
		this.app.useGlobalFilters(iocContext.get(ExceptionCatchFilter));
		this.app.useGlobalInterceptors(iocContext.get(LogInterceptor), iocContext.get(FormatInterceptor));
		//if (configs.info.env !== 'prod')
		await this.buildDoc();
		const homeName = configs.info.homeName ? configs.info.homeName : '0.0.0.0';
		await this.app.listen(configs.info.port);
		logger.info(`${configs.info.appName} START WITH PORT: http://${homeName}:${configs.info.port} 🚀 `);
		logger.info(`${configs.info.appName} API DOC: http://127.0.0.1:${configs.info.port}/doc/web/ 🚀 `);
	}

	public async buildDoc() {
		const documentWeb = new DocumentBuilder()
			.addBearerAuth()
			.setTitle('WEB-SERVER')
			.setDescription(
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjQ2LCJpYXQiOjE2ODE5NzU2ODgsImV4cCI6MTcwMjEwNjg4OH0.CkkcGfkE5G2brO_bgYnIoEhwKihMc_-RmY5WtDaav9E',
			)
			.build();
		const documentWebServer = SwaggerModule.createDocument(this.app, documentWeb, {
			include: [...Object.values(WebModules)],
		});
		SwaggerModule.setup('/doc/web/', this.app, documentWebServer,{
			customCss: `.swagger-ui .model-box-control, .swagger-ui .models-control, .swagger-ui .opblock-summary-control {
			  all: inherit;
			  border-bottom: 0;
			  cursor: pointer;
			  flex: 1;
			  padding: 0;
			  user-select: text;
			 }`,
		  });

		const documentAdmin = new DocumentBuilder()
			.setDescription(
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYyOTk2ODk0MiwiZXhwIjoxNjUwMTAwMTQyfQ.ZdLgoSoX5gqqaQjob9XoOO1At2LAk8oJl7TCqC3cn84',
			)
			.setBasePath('http://sh1.stgame.cn/lz1')
			.addBearerAuth()
			.setTitle('ADMIN-SERVER')
			.build();
		const documentAdminServer = SwaggerModule.createDocument(this.app, documentAdmin, {
			include: [...Object.values(AdminModules)],
		});
		SwaggerModule.setup('/doc/admin/', this.app, documentAdminServer,{
			customCss: `.swagger-ui .model-box-control, .swagger-ui .models-control, .swagger-ui .opblock-summary-control {
			  all: inherit;
			  border-bottom: 0;
			  cursor: pointer;
			  flex: 1;
			  padding: 0;
			  user-select: text;
			 }`,
		  });

		// OPEN API
		const documentOpen = new DocumentBuilder()
			.setTitle('OPEN-SERVER')
			.setDescription('The open API description')
			.build();
		const documentOpenServer = SwaggerModule.createDocument(this.app, documentOpen, {
			include: [...Object.values(OpenModules)],
		});
		const redocOptions: RedocOptions = {
			title: 'OPEN-SERVER',
			logo: {
				url: 'https://redocly.github.io/redoc/petstore-logo.png',
				backgroundColor: '#F0F0F0',
				altText: 'PetStore logo',
			},
			sortPropsAlphabetically: true,
			hideDownloadButton: false,
			hideHostname: false,
			// tagGroups: [
			// 	{
			// 		name: 'Core resources',
			// 		tags: ['cats'],
			// 	},
			// ],
		};
		// Instead of using SwaggerModule.setup() you call this module
		await RedocModule.setup('/doc/open', this.app as any, documentOpenServer as any, redocOptions);
	}
}

// import { IConfig, ModelBuilder, DialectMySQL } from 'sequelize-typescript-generator';

// (async () => {
//     const config: IConfig = {
//         connection: {
//             dialect: 'mysql',
//             database: 'protein_test',
//             username: 'root',
//             password: '926458'
//         },
//         metadata: {
//             indices: true,
//             case: 'CAMEL',
//         },
//         output: {
//             clean: true,
//             outDir: 'models'
//         },
//         strict: false,
//     };

//     const dialect = new DialectMySQL();

//     const builder = new ModelBuilder(config, dialect);

//     try {
//         await builder.build();
//     }
//     catch(err) {
//         console.error(err);
//         process.exit(1);
//     }
// })();
