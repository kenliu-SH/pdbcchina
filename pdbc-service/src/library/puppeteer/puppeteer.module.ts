import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@library/configs';
import { PuppeteerService } from './puppeteer.service';
@Global()
@Module({
	imports: [ConfigModule],
	exports: [PuppeteerService],
	providers: [PuppeteerService],
})
export class PuppeteerModule {}
