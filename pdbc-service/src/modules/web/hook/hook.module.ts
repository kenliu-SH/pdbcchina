import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { WeChatModule, WeChatService } from '@library/wechat';
import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HookController } from './hook.controller';
import { LogExternalAPIRequest } from '@model/logExternalAPIRequest.model';
import { User } from '@model/user.model';

@Module({
	imports: [ConfigModule, RedisModule, SequelizeModule.forFeature([LogExternalAPIRequest, User])],
	controllers: [HookController],
	providers: [WeChatService],
})
export class HookModule {}
