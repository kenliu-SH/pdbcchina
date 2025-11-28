import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@library/configs";
import { FirmWxNoticeService } from "./firmWxNotice.service";
@Global()
@Module({
  imports: [ConfigModule],
  exports: [FirmWxNoticeService],
  providers: [FirmWxNoticeService],
})
export class FirmWxNoticeModule {}
