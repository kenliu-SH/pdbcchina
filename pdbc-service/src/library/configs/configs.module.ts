import { Module } from '@nestjs/common';

import { ConfigProvider } from './configs.service';

@Module({
	exports: [ConfigProvider],
	providers: [ConfigProvider],
})
export class ConfigModule {}
