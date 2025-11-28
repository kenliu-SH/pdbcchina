import { ConfigModule } from '@library/configs';
import { MeilisearchModule } from '@library/meilisearch';
import { SyncModule } from '@library/sync';
import { IndexService } from '@library/sync/index.service';
import { WeChatModule } from '@library/wechat';
import { _Entry } from '@model/entry.model';
import { SearchModule } from '@modules/web';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksService } from './tasks.service';
import { MailModule } from '@library/mail';

@Module({
	imports: [
		SyncModule,
		ConfigModule,
		MeilisearchModule,
		SyncModule,
		SearchModule,
		WeChatModule,
		MailModule,
		/**
		 * bull queue
		 */ BullModule.registerQueue({
			name: 'index-sync-consumer',
		}),
	],
	providers: [TasksService],
})
export class TasksModule {}
