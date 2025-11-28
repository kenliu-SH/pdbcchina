import { ConfigProvider } from '@library/configs'
import MeiliSearch from 'meilisearch'
export class MeilisearchProvider {
  public static local = 'localMeilisearch'

  public static getProviders() {
    return [
      {
        provide: this.local,
        inject: [ConfigProvider],
        useFactory: async (configs: ConfigProvider) => {
          const client = new MeiliSearch(configs.info.meilisearch)
          return client
        },
      },
    ]
  }
}
