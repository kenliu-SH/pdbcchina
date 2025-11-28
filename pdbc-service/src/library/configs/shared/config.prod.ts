/*
 * @Author: your name
 * @Date: 2021-07-09 15:55:27
 * @LastEditTime: 2021-09-01 16:03:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\library\configs\shared\config.prod.ts
 */
import { Configs } from './config.interface'

export const prod: Configs = {
  // homeName: '10.202.108.5',
  Redisearch: {
    host: '127.0.0.1',
    port: 6379,
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
        host: '10.202.108.1',
        username: 'root',
        password: 'stgame@2021',
        database:'lz1',
        port:'3306'
      },
      read: [
        {
          host: '10.202.108.2',
          username: 'root',
          password: 'stgame@2021',
          database:'lz1',
          port:'3306'
        },
        {
          host: '10.202.108.1',
          username: 'root',
          password: 'stgame@2021',
          database:'lz1',
          port:'3306'
        },
      ],
    },
    database:'lz1',
    port: 3306,
    logging: false,
    dialect: 'mysql',
    timezone: '+08:00', //东八时区
    pool: { max: 30 },
    autoLoadModels: true,
    synchronize: true,
  },
  enableFileLoging: true,
  enableConsoleLoging: false,
}
