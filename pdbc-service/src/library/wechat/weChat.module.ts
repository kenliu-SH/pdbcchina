import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigProvider } from '@library/configs';
import { WeChatService } from './weChat.service';
import { RedisModule, RedisProvider } from '@library/redis';
import { SuperRedis } from '@sophons/redis';
import { Configs, defaults, WeChatSmallProgram } from '@library/configs/shared';
import axios from 'axios';
import { SequelizeModule } from '@nestjs/sequelize';
import { LogExternalAPIRequest } from '@model/logExternalAPIRequest.model';
import IORedis from 'ioredis';

@Module({
	imports: [ConfigModule, RedisModule, SequelizeModule.forFeature([LogExternalAPIRequest])], // 导入模块
	exports: [WeChatService], // 导出服务给其他模块注入使用
	providers: [WeChatService], // 把服务加入ioc容器
})
export class WeChatModule {
	constructor(
		private readonly configs: ConfigProvider,
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
	) {
		// FF.定时刷新各账号token到redis
		setTimeout(async () => {
			await this.updateWechatToken(this.configs.info.officialAccount);
		}, 0);
		setInterval(async () => {
			await this.updateWechatToken(this.configs.info.officialAccount);
		}, 1000 * 1000);
	}

	async updateWechatToken(config: WeChatSmallProgram) {
		let { appID, appSecret } = config;
		let { data } = await axios.get(
			`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`,
		);
		console.log("updateWechatToken->>>>", data);

		const redis = new IORedis(defaults.redis);
		await redis.set(`wx:token:lz2:${appID}`, data.access_token);
		redis.disconnect();
	}
}
