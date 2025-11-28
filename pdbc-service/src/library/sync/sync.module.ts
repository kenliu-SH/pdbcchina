import { Module } from '@nestjs/common'
import { ConfigModule } from '@library/configs'

import { PDBService } from './pdb.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { _Entry } from '@model/entry.model'
import { IndexService } from './index.service'
import { MeilisearchModule } from '@library/meilisearch'
import { IndexSyncConsumer } from './index.consumer'
import { BullModule } from '@nestjs/bull'

@Module({
  imports: [
    ConfigModule,
    MeilisearchModule,
    SequelizeModule.forFeature([_Entry]),
    /**
     * bull queue
     */
    BullModule.registerQueue({
      name: 'index-sync-consumer',
    }),
  ],
  exports: [PDBService, IndexService, IndexSyncConsumer],
  providers: [PDBService, IndexService, IndexSyncConsumer],
})
export class SyncModule {}
