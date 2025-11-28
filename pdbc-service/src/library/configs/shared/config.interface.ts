/*
 * @Author: your name
 * @Date: 2021-07-09 15:55:27
 * @LastEditTime: 2021-09-01 16:03:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\library\configs\shared\config.interface.ts
 */
import { ENV } from '@common/type';
import * as Redis from 'ioredis';
import { SequelizeOptions } from 'sequelize-typescript';
import { ReplicationOptions } from 'sequelize/types';

export interface Configs {
	env?: ENV;
	role?: string;
	appName?: string;
	homeUrl?: string;
	port?: string | number;
	homeName?: string;
	enableFileLoging?: boolean;
	enableConsoleLoging?: boolean;
	PDBFileUnpackPath?: string;
	DataPath?: string;
	pdbVersionedPath?: string;
	emdbDataPath?: string;
	redis?: IoRedisOptions;
	Redisearch?: Redis.RedisOptions;
	database?: SequlizeOptions;
	pdbcDatabase?: SequlizeOptions
	Index?: Index;
	meilisearch?: Meilisearch;
	sendMail?: SendMail;
	officialAccount?: WeChatSmallProgram;
}

export interface SequlizeOptions {
	username?: string;
	password?: string;
	database?: string;
	host?: string;
	replication?: ReplicationOptions;
	port?: number;
	homeName?: string;
	logging?: boolean;
	timezone?: string;
	dialect?: 'postgres' | 'mysql';
	pool?: { max: number };
	autoLoadModels?: boolean;
	synchronize?: boolean;
}

export interface IoRedisOptions {
	host?: string;
	port?: number;
	password?: string;
	expiredTime?: number;
}
export interface Index {
	name: string;
	sugKey: string;
}

export interface Meilisearch {
	host: string;
	apiKey: string;
}

export interface SendMail {
	host?: string;
	port?: number;
	auth?: {
		user?: string;
		pass?: string;
	};
}
export interface WeChatSmallProgram {
	appID: string;
	appSecret: string;
}
