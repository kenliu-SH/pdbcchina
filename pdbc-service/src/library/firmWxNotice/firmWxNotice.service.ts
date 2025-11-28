import { ConfigProvider } from "@library/configs";
import { Injectable, Logger } from "@nestjs/common";
import axios from "axios";
@Injectable()
export class FirmWxNoticeService {
  private readonly logger = new Logger(FirmWxNoticeService.name);
  private webhookUrl =
    "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=78f7f921-11b8-47af-8d16-d4b59fab3b3b";
  constructor(private readonly configs: ConfigProvider) {}

  public async sendWarning(msg: string, error: Error, outData: Object) {
    try {
      await axios.post(this.webhookUrl, {
        msgtype: "text",
        text: {
          content: `
  内容：${msg}
  异常信息：${error ? error.message : "空"}
  其他信息：${JSON.stringify(outData)}
              `,
          mentioned_list: ["@all"],
          mentioned_mobile_list: ["@all"],
        },
      });
    } catch (error) {}
  }
}
