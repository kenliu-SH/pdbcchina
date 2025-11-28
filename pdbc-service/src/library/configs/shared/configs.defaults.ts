import { Configs } from './config.interface';

export const defaults: Configs = {
	DataPath: '/root/lz_data',
	emdbDataPath: '/home/data/pdbcdata/latest_data/pub/emdb',
	pdbVersionedPath: '/home/data/pdbcdata/latest_data/pdb_versioned',
	redis: {
		host: '42.192.50.25',
		port: 6379,
		expiredTime: 1500,
		password: '926458',
	},
	Redisearch: {
		host: '42.192.50.25',
		port: 10625,
		name: 'PDB',
		password: 'stgame@2021',
	},
	Index: {
		name: 'PDB_idx',
		sugKey: 'PDBId',
	},
	database: {
		replication: {
			write: {
				host: '101.133.158.0',
				username: 'root',
				password: '926458',
			},
			read: [
				{
					host: '101.133.158.0',
					username: 'root',
					password: '926458',
				},
			],
		},
		database: 'lz2',
		port: 53306,
		logging: true,
		dialect: 'mysql',
		timezone: '+08:00', //东八时区
		pool: { max: 5 },
		autoLoadModels: false,
		synchronize: false,
	},
	pdbcDatabase: {
		replication: {
			write: {
				host: '101.133.158.0',
				username: 'root',
				password: '926458',
			},
			read: [
				{
					host: '101.133.158.0',
					username: 'root',
					password: '926458',
				},
			],
		},
		database: 'protein_test',
		port: 40447,
		logging: false,
		dialect: 'mysql',
		timezone: '+08:00', //东八时区
		pool: { max: 5 },
		autoLoadModels: false,
		synchronize: true,
	},
	meilisearch: {
		host: 'http://42.192.50.25:7700',
		apiKey: 'stgame@2021',
	},
	sendMail: {
		host: 'smtp.163.com',
		port: 465,
		auth: {
			user: '13873916250@163.com',
			pass: 'QFLUUPLVKEHXAGJW',
		},
	},
	officialAccount: {
		appID: 'wx837b6c0f6d10d98e',
		appSecret: 'be0f48e659550d4a4ec5943351200217',
	},
};
