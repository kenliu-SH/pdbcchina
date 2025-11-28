import { ConfigProvider } from '@library/configs';
import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Platform } from '@common/type';
import { WeChatSmallProgram, defaults } from '@library/configs/shared';
import axios from 'axios';
import * as crypto from 'crypto';
import { RedisProvider } from '@library/redis';
import { SuperRedis } from '@sophons/redis';
import _ = require('lodash');

import { InjectModel } from '@nestjs/sequelize';
import { LogExternalAPIRequest } from '@model/logExternalAPIRequest.model';
import IORedis from 'ioredis';
export class WeChatService implements OnApplicationBootstrap {
	constructor(
		private readonly configs: ConfigProvider,
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		@InjectModel(LogExternalAPIRequest)
		private logExternalAPIRequestModel: typeof LogExternalAPIRequest,
	) { }
	async onApplicationBootstrap() {
		// try {
		// 	setTimeout(async () => {
		// 		// 测试模版消息
		// 		const msgData = {
		// 			first: { value: '您有新的任务', color: '#173177' },
		// 			keyword1: {
		// 				value: '111',
		// 				color: '#173177',
		// 			},
		// 			keyword2: { value: '1111', color: '#173177' },
		// 			keyword3: { value: '', color: '#173177' },
		// 			keyword4: {
		// 				value: `11111`,
		// 				color: '#173177',
		// 			},
		// 			remark: { value: '11', color: '#173177' },
		// 		};
		// 		const res = await this.templateMessageSend(
		// 			'oxkDc6lMPsEaxMOVzZ_MlzTVuK08',
		// 			'L-6XfDr2EAx8XoCJL8ujbLG3T2SRWiZsGdR7c3Mk5xw',
		// 			'official',
		// 			msgData,
		// 		);
		// 		console.log(33333, res);
		// 	}, 10000);
		// } catch (error) {
		// 	console.error(error);
		// }
	}

	// FF.code换取openid，保存session和unionid等(必须使用）
	public async getOpenID(platform: Platform, code: string) {
		let { appID, appSecret } = this.getAppID(platform);
		let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
		let a = await axios.get(url);
		let { openid, session_key, unionid } = a.data;
		// 将用户信息添加到redis
		await this.redis.client.hmset(`wx:openid:${openid}`, {
			openid,
			session_key,
			unionid,
		});
		// 记录日志
		await this.logExternalAPIRequestModel.create({
			url,
			headers: null,
			request: null,
			response: a.data,
		});
		return { openid, session_key, unionid };
	}
	// FF.获取加密信息，如用户手机号和用户信息
	public async getEncryptedData(platform: Platform, openid: string, encryptedData1: string, iv1: string) {
		let { appID } = this.getAppID(platform);
		let { session_key } = await this.redis.client.hgetall(`wx:openid:${openid}`);
		console.log(appID, session_key, openid, encryptedData1, iv1);
		var sessionKey: Buffer = new Buffer(session_key, 'base64');
		var encryptedData: Buffer = new Buffer(encryptedData1, 'base64');
		var iv: Buffer = new Buffer(iv1, 'base64');
		try {
			var decipher: any = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
			decipher.setAutoPadding(true);
			var decoded: any = decipher.update(encryptedData, 'binary', 'utf8');
			decoded += decipher.final('utf8');
			decoded = JSON.parse(decoded);
		} catch (err) {
			console.error('微信解密失败', err);
			throw new Error('Illegal Buffer');
		}
		if (decoded.watermark.appid !== appID) {
			throw new Error('Illegal Buffer By ID');
		}

		return decoded;
	}
	// FF.生成公众号带参二维码地址
	public async qrcodeCreate(scene_str: string) {
		let token = await this.getToken('official');
		let url = `https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${token}`;
		let request = {
			action_name: 'QR_LIMIT_STR_SCENE',
			action_info: { scene: { scene_str } },
		};
		let a = await axios.post(url, request);
		// 记录日志
		await this.logExternalAPIRequestModel.create({
			url,
			headers: null,
			request,
			response: a.data,
		});
		console.log(2222, a.data);
		const { errcode } = a.data;
		if (errcode && errcode == 41001) {
			let { appID, appSecret } = this.configs.info.officialAccount;
			let { data } = await axios.get(
				`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`,
			);
			console.log('updateWechatToken->>>>', data);
			const redis = new IORedis(defaults.redis);
			await redis.set(`wx:token:lz2:${appID}`, data.access_token);
			redis.disconnect();
		}
		return a.data;
	}

	// FF.发送模板消息(公众号) 使用/message/wxopen/template/uniform_send 解决openid问题
	public async templateMessageSend(
		openid: string,
		templateID: string,
		platform: Platform = 'official', // openid 来源平台
		data: any,
		url?: string,
		miniprogram?: {
			appid: string;
			pagepath: string;
		},
	) {
		let token = await this.getToken(platform);
		let body = {
			touser: openid,
			appid: this.configs.info.officialAccount.appID,
			template_id: templateID,
			url,
			miniprogram,
			data,
		};

		console.log('公众号消息模板推送->', body);
		console.log(body);
		let urlTo = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`;
		console.log(333333, urlTo);

		let a = await axios.post(urlTo, body);
		// console.log(11111111, { urlTo, body });
		console.log(2222, { respData: a.data, token: token });

		// 记录日志
		await this.logExternalAPIRequestModel.create({
			url: urlTo,
			headers: null,
			request: body,
			response: a.data,
		});
		return a.data;
	}

	public async getAuthorizeUrl(platform: Platform, redirectUrl: string, state: string = 'STATE') {
		let { appID } = this.getAppID(platform);
		let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=${encodeURIComponent(
			redirectUrl,
		)}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`;
		return url;
	}

	/*--------------------- 辅助函数 ---------------------*/
	private getAppID(platform: Platform): WeChatSmallProgram {
		switch (platform) {
			case 'official':
				return this.configs.info.officialAccount;
		}
		return null;
	}

	public async getToken(platform: Platform): Promise<string> {
		let { appID } = this.getAppID(platform);
		const redis = new IORedis(defaults.redis);
		return await redis.get(`wx:token:lz2:${appID}`);
	}
}
