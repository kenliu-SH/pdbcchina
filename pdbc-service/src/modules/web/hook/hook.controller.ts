import {
	All,
	Body,
	Controller,
	Get,
	Headers,
	HttpCode,
	HttpException,
	HttpStatus,
	Inject,
	Param,
	Post,
	Query,
	Req,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WeChatService } from '@library/wechat';
import _ = require('lodash');
import { LogExternalAPIRequest } from '@model/logExternalAPIRequest.model';
import { buildXML } from '@library/utils';
import { ConfigProvider } from '@library/configs';
import { RedisProvider } from '@library/redis';
import { SuperRedis } from '@sophons/redis';
import dayjs = require('dayjs');
import { User } from '@model/user.model';
import { WechatScanLog } from '@model/wechatScanLog.model';
import { WechatScanLogStatus } from '@common/constant';

@Controller('hook')
export class HookController {
	constructor(
		private readonly configs: ConfigProvider,
		private readonly wechatService: WeChatService,
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		@InjectModel(LogExternalAPIRequest)
		private logExternalAPIRequestModel: typeof LogExternalAPIRequest,
	) { }

	@Get('ping')
	async pong() {
		return 'pong';
	}

	@All('wechat/message')
	async wechatMessage(@Param() params, @Headers() headers, @Req() req: any, @Body() body, @Query() query) {
		console.log('[wechat/message]', headers, query, body);
		let log = await this.logExternalAPIRequestModel.create({
			url: 'wechat/message',
			headers: headers,
			request: { ...query, ...body },
			response: null,
		});
		let { echostr } = query;
		if (echostr) {
			return { __raw__: echostr };
		} else {
			let { MsgType, Event, ToUserName, Ticket, FromUserName, EventKey, Content } = _.mapValues(body['xml'], v =>
				_.trim(v[0]),
			);
			let qrcode = null;
			switch (MsgType) {
				case 'text':
					return buildXML({
						xml: {
							ToUserName: FromUserName,
							FromUserName: ToUserName,
							CreateTime: dayjs().unix(),
							MsgType: 'text',
							Content: '感谢您关注',
						},
					});
					break;
				case 'event':
					switch (Event) {
						case 'SCAN':
							qrcode = EventKey;
							break;
						case 'subscribe':
							qrcode = EventKey.replace('qrscene_', '');
							break;
					}
					if (qrcode) {
						if (qrcode.includes('ACTION:BIND#')) {
							// 绑定
							let [action, userId] = qrcode.split('#');
							const user = await User.findOne({
								where: {
									id: userId,
								},
							});
							if (!user) {
								return buildXML({
									xml: {
										ToUserName: FromUserName,
										FromUserName: ToUserName,
										CreateTime: dayjs().unix(),
										MsgType: 'text',
										Content: `用户不存在`,
									},
								});
							}
							user.openid = FromUserName;
							await user.save();
							// 更新状态
							const wechatScanLog = await WechatScanLog.findOne({
								where: {
									ticket: Ticket,
								},
							});
							if (wechatScanLog) {
								wechatScanLog.status = WechatScanLogStatus.scanned;
								await wechatScanLog.save();
							}
							return buildXML({
								xml: {
									ToUserName: FromUserName,
									FromUserName: ToUserName,
									CreateTime: dayjs().unix(),
									MsgType: 'text',
									Content: `绑定成功`,
								},
							});
						} else if (qrcode.includes('ACTION:LOGIN#')) {
							const user = await User.findOne({
								where: {
									openid: FromUserName,
								},
							});
							if (!user) {
								return buildXML({
									xml: {
										ToUserName: FromUserName,
										FromUserName: ToUserName,
										CreateTime: dayjs().unix(),
										MsgType: 'text',
										Content: `请先注册`,
									},
								});
							}
							// 更新状态
							const wechatScanLog = await WechatScanLog.findOne({
								where: {
									ticket: Ticket,
								},
							});
							if (wechatScanLog) {
								wechatScanLog.status = WechatScanLogStatus.scanned;
								wechatScanLog.userId = user.id;
								await wechatScanLog.save();
							}
							return buildXML({
								xml: {
									ToUserName: FromUserName,
									FromUserName: ToUserName,
									CreateTime: dayjs().unix(),
									MsgType: 'text',
									Content: `登录成功`,
								},
							});
						}
						return buildXML({
							xml: {
								ToUserName: FromUserName,
								FromUserName: ToUserName,
								CreateTime: dayjs().unix(),
								MsgType: 'text',
								Content: `扫描二维码：${qrcode}`,
							},
						});
					}
					return buildXML({
						xml: {
							ToUserName: FromUserName,
							FromUserName: ToUserName,
							CreateTime: dayjs().unix(),
							MsgType: 'text',
							Content: `事件：${Event}`,
						},
					});
					break;
			}
			return buildXML({
				xml: {
					ToUserName: FromUserName,
					FromUserName: ToUserName,
					CreateTime: dayjs().unix(),
					MsgType: 'transfer_customer_service',
				},
			});
		}
	}
}
