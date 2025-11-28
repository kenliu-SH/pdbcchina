import { Module } from '@nestjs/common';
import { ConfigModule } from '@library/configs';

import { RedisProvider } from './redis.service';

@Module({
  imports: [ConfigModule],
  exports: RedisProvider.getProviders(),
  providers: RedisProvider.getProviders(),
})
export class RedisModule {}
