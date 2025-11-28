import { Module } from '@nestjs/common'
import { ConfigModule } from '@library/configs'

import { MeilisearchProvider } from './meilisearch.service'

@Module({
  imports: [ConfigModule],
  exports: MeilisearchProvider.getProviders(),
  providers: MeilisearchProvider.getProviders(),
})
export class MeilisearchModule {}
