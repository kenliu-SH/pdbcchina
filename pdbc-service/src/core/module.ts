import { DtoPipe } from '@core/pipe';
import { Module } from '@nestjs/common';
import { WebModule } from '@modules/web/web.module';
import { OpenModule } from '@modules/open/open.module';
import { RedisModule } from '@library/redis';
import { LoggerModule } from '@library/logger';
import { ConfigModule, ConfigProvider } from '@library/configs';
import { ExceptionCatchFilter } from '@core/filter';
import { MysqlModule } from '@library/mysql';
import { LogInterceptor, FormatInterceptor } from '@core/interceptor';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from '@library/tasks';
import { AdminModule } from '@modules/admin/admin.module';
import { SyncModule } from '@library/sync';
import { DebugModule } from '@modules/debug/debug.module';
import { ParseModule } from '@library/parse';
import { FirmWxNoticeModule } from '@library/firmWxNotice/firmWxNotice.module';
import { BullModule } from '@nestjs/bull';
import { MeilisearchModule } from '@library/meilisearch';
import { FeedModule } from '@library/feed/feed.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailModule } from '@library/mail/mail.module';
import { WeChatModule } from '@library/wechat';
import { PuppeteerModule } from '@library/puppeteer';
import { ConvertModule } from '@library/convert';
// import { MeilisearchModule } from '@library/meilisearch'
@Module({
	imports: [
		/**
		 * The common modules
		 */
		ConfigModule,
		LoggerModule,
		RedisModule,
		// PuppeteerModule,
		FirmWxNoticeModule,
		MeilisearchModule,
		ParseModule,
		SyncModule,
		ScheduleModule.forRoot(),
		TasksModule,
		MysqlModule,
		FeedModule,
		MailModule,
		WeChatModule,
		ConvertModule,
		BullModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configs: ConfigProvider) => {
				return {
					redis: {
						...configs.info.redis,
						tls: null,
						lazyConnect: false,
						showFriendlyErrorStack: true,
						maxRetriesPerRequest: null,
						enableReadyCheck: false,
					},
				};
			},
			inject: [ConfigProvider],
		}),
		/**
		 * The server logic modules
		 */
		WebModule.register(),
		AdminModule.register(),
		OpenModule.register(),
		DebugModule,

	],
	exports: [
		/**
		 * export provider
		 */
		DtoPipe,
		LogInterceptor,
		FormatInterceptor,
		ExceptionCatchFilter,
	],
	providers: [
		/**
		 * context provider
		 */
		DtoPipe,
		LogInterceptor,
		FormatInterceptor,
		ExceptionCatchFilter,
	],
})
export class CoreModule { }
