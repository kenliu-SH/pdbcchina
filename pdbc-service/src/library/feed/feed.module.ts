import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@library/configs';
import { FeedService } from './feed.service';
import { PDBService } from '@library/sync';
import { SequelizeModule } from '@nestjs/sequelize';
import { _Entry } from '@model/entry.model';
import { BullModule } from '@nestjs/bull';
@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([_Entry]),
    BullModule.registerQueue({
      name: 'index-sync-consumer',
    }),
  ],
  exports: [FeedService, PDBService],
  providers: [FeedService, PDBService],
})
export class FeedModule {}
