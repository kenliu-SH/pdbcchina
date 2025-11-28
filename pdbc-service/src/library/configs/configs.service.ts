/*
 * @Author: your name
 * @Date: 2021-07-09 15:55:27
 * @LastEditTime: 2021-09-01 16:05:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\library\configs\configs.service.ts
 */
import { ENV } from '@common/type';
import { defaultsDeep } from 'lodash';
import { Injectable } from '@nestjs/common';
import { envConstant } from '@common/constant';
const os = require('os');
const path = require('path');
const fs = require('fs');
import { dev, test, prod, defaults, Configs } from './shared';

@Injectable()
export class ConfigProvider {
	public readonly info: Configs;

	constructor() {
		const port = process.env[envConstant.port] || '10608';
		const env = (process.env[envConstant.env] as ENV) || 'dev';
		const appName = process.env[envConstant.appName] || 'LZ1-Server';
		const role = process.env[envConstant.role] || 'slave'; // slave/master
		// const homeName = process.env[envConstant.homeName] || "0.0.0.0";
		this.info = {
			env,
			appName,
			role,

			port: Number(port),
			...defaultsDeep({ dev, test, prod }[env], defaults),
		};
		// this.info.DataPath = path.join(os.homedir(), 'lz2_data')
	}
}
