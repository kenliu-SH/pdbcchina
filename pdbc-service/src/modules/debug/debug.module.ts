import { ConfigModule } from '@library/configs'
import { MeilisearchModule } from '@library/meilisearch'
import { ParseModule } from '@library/parse'
import { RedisModule } from '@library/redis'
import { PDBService } from '@library/sync'
import { IndexService } from '@library/sync/index.service'
import { _Entry } from '@model/entry.model'
import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { DebugController } from './debug.controller'

@Module({
  imports: [
    ConfigModule,
    ParseModule,
    RedisModule,
    MeilisearchModule,
    SequelizeModule.forFeature([_Entry])
    /**
     * bull queue
     */,
    BullModule.registerQueue({
      name: 'index-sync-consumer',
    }),
  ],
  controllers: [DebugController],
  providers: [PDBService, IndexService],
})
export class DebugModule {}
