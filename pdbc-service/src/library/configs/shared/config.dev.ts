import { Configs } from './config.interface';

export const dev: Configs = {
	enableFileLoging: false,
	enableConsoleLoging: true,
	// DataPath: '/Users/maoring/lz_data',
	DataPath: 'C:/Users/NINGMEI/lz_data',
	emdbDataPath: '/home/data/pdbcdata/latest_data/pub/emdb',
	homeUrl: 'https://o2-1307232071.cos.ap-shanghai.myqcloud.com/lz2/web/protein/v1/index.html#/',
	// database: {
	// 	replication: {
	// 		write: {
	// 			host: '193.32.150.14',
	// 			username: 'root',
	// 			password: '926458',
	// 		},
	// 		read: [
	// 			{
	// 				host: '193.32.150.14',
	// 				username: 'root',
	// 				password: '926458',
	// 			},
	// 		],
	// 	},
	// 	database: 'lz2',
	// 	port: 53306,
	// 	logging: true,
	// 	dialect: 'mysql',
	// 	timezone: '+08:00', //东八时区
	// 	pool: { max: 5 },
	// 	autoLoadModels: false,
	// 	synchronize: true,
	// },
};
