import { Configs } from './config.interface';

export const test: Configs = {
	PDBFileUnpackPath: '~/lz_data/structures/divided/pdb_unpack',
	enableFileLoging: true,
	DataPath: '/home/data/pdbcdata/latest_data/pub',
	enableConsoleLoging: false,
	homeName: '10.202.108.6',
	homeUrl: 'http://www.pdbc.org.cn/index.html#/',
	database: {
		replication: {
			write: {
				host: '127.0.0.1',
				username: 'admin',
				password: 'admin@2023',
			},
			read: [
				{
					host: '127.0.0.1',
					username: 'admin',
					password: 'admin@2023',
				},
			],
		},
		database: 'lz2',
		port: 3306,
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
				host: '127.0.0.1',
				username: 'admin',
				password: 'admin@2023',
			},
			read: [
				{
					host: '127.0.0.1',
					username: 'admin',
					password: 'admin@2023',
				},
			],
		},
		database: 'protein_test',
		port: 3306,
		logging: false,
		dialect: 'mysql',
		timezone: '+08:00', //东八时区
		pool: { max: 5 },
		autoLoadModels: false,
		synchronize: true,
	},
	// Redisearch: {
	//   host: '10.202.108.5',
	//   port: 6379,
	//   name: 'PDB',
	//   password: 'stgame@2021',
	// },
	// Index: {
	//   name: 'PDB_idx',
	//   sugKey: 'PDBId',
	// },
	// database: {
	// 	replication: {
	// 		write: {
	// 			host: '127.0.0.1',
	// 			username: 'root',
	// 			password: '926458',
	// 		},
	// 		read: [
	// 			{
	// 				host: '127.0.0.1',
	// 				username: 'root',
	// 				password: '926458',
	// 			},
	// 		],
	// 	},
	// 	database: 'protein_test',
	// 	port: 3306,
	// 	logging: true,
	// 	dialect: 'mysql',
	// 	timezone: '+08:00', //东八时区
	// 	pool: { max: 5 },
	// 	autoLoadModels: true,
	// 	synchronize: false,
	// },
};
