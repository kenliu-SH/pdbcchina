import { ConfigModule, ConfigProvider } from '@library/configs';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { handleRetry, SequelizeModule } from '@nestjs/sequelize';
import { MailService } from './mail.service';

@Module({
	imports: [
		ConfigModule,
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configs: ConfigProvider) => {
				return {
					transport: {
						...configs.info.sendMail,
					},
					private: true,
					defaults: {
						from: '<13873916250@163.com>',
					},
					preview: true,
					template: {
						options: {
							strict: true,
						},
					},
				};
			},
			inject: [ConfigProvider],
		}),
	],
	providers: [MailService],
	exports: [MailService],
})
export class MailModule {}
