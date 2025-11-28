/*
 * @Author: your name
 * @Date: 2021-07-09 15:55:27
 * @LastEditTime: 2021-09-01 14:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\library\tasks\tasks.service.ts
 */
import { NOTIFICATION_TYPE, SUBSCRIBE_RULE_CONDITION_TYPE, SUBSCRIBE_RULE_SEND_CHANNEL } from '@common/constant';
import { ConfigProvider } from '@library/configs';
import { FirmWxNoticeService } from '@library/firmWxNotice/firmWxNotice.service';
import { MailService } from '@library/mail';
import { PDBService } from '@library/sync';
import { IndexSyncConsumer } from '@library/sync/index.consumer';
import { WeChatService } from '@library/wechat';
import { _Entry } from '@model/entry.model';
import { Notice } from '@model/notice.model';
import { Sequelize } from '@model/shared';
import { SubscribeRule } from '@model/subscribeRule.model';
import { SearchService } from '@modules/web/search/search.service';
import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { Queue } from 'bull';
import dayjs = require('dayjs');

global['indexSyncState'] = false;
global['syncPDBBasis'] = false;
global['infoSupplementTask'] = false;
global['dbSync'] = false;
global['updateDetailsTask'] = false;
@Injectable()
export class TasksService {
	constructor(
		private readonly firmWxNotice: FirmWxNoticeService,
		private readonly configs: ConfigProvider,
		private readonly _PDBService: PDBService,
		private sequelize: Sequelize,
		private readonly searchService: SearchService,
		private readonly weChatService: WeChatService,
		private readonly mailService: MailService,
	) {}
	private readonly logger = new Logger(TasksService.name);

	/**
	 * 每周三获取新的PDBID列表，匹配符合的订阅规则，发送订阅消息
	 */
	@Cron('0 0 0 * * 3', {
		name: 'handleQuerySubscribe',
	})
	// @Interval(1000 * 50 * 1)
	async handleQuerySubscribe() {
		console.log(1111111);
		try {
			const getRecentUpdatePDBIds = await this._PDBService.getRecentUpdatePDB();
			// DEBUG
			getRecentUpdatePDBIds.push('103D');
			// 获取规则列表
			const findSubscribeRuleList = await SubscribeRule.findAll({
				where: {
					conditionType: SUBSCRIBE_RULE_CONDITION_TYPE.query,
				},
				raw: true,
			});
			for (let index = 0; index < findSubscribeRuleList.length; index++) {
				const { rule, userId, title, channels } = findSubscribeRuleList[index];
				// 插入in操作
				rule['nodes'].push({
					type: 'group',
					label: 'text',
					nodes: [
						{
							type: 'group',
							nodes: [
								{
									type: 'terminal',
									service: 'text',
									parameters: {
										attribute: 'struct.entry_id',
										operator: 'in',
										negation: false,
										value: getRecentUpdatePDBIds,
									},
								},
							],
							logical_operator: 'and',
						},
					],
					logical_operator: 'and',
				});
				// TODO 最长1000条
				const searchResults = await this.searchService.advancedSearch(
					{
						query: rule,
					} as any,
					{
						page: 1,
						pageSize: 1000,
						order: 'desc',
					},
				);
				for (let index = 0; index < searchResults.rows.length; index++) {
					const result = searchResults.rows[index];
					// @ts-ignore
					const { id, structureSummaryVO } = result;
					console.log('result', result['id']);
					// 如果符合规则的PDBID在最近更新的PDBID列表中，则发送订阅消息
					if (getRecentUpdatePDBIds.includes(result['id'])) {
						console.log('符合规则的PDBID在最近更新的PDBID列表中', result['id'], channels);
						// 暂时支持单个渠道
						let channelConfig = channels as any;
						console.log('channelConfig.channel', channelConfig.channel);
						switch (channelConfig.channel) {
							case SUBSCRIBE_RULE_SEND_CHANNEL.email: {
								console.log('发送邮件');
								const toMailAddress = channelConfig.config['mailAddress'];
								const mailContent = `
									<h2>新发布的 PDB 结构：${result['id']}</h3>
									<p>标题：${structureSummaryVO['title']}</p>
									<p>发布日期：${dayjs(structureSummaryVO['released']).format('YYYY年MM月DD日')}</p>
									<p>规则描述：${title}</p>
								`;

								let mailSend = await this.mailService.sendMail(
									toMailAddress,
									'本周新发布的 PDB 结构匹配您的订阅规则',
									mailContent,
								);
								console.log('mailSend->>', mailSend);

								break;
							}
							case SUBSCRIBE_RULE_SEND_CHANNEL.wechat: {
								const openId = channelConfig.config['openId'];
								const msgData = {
									first: { value: 'PDB查询规则有条目更新', color: '#173177' },
									keyword1: {
										value: result['id'],
										color: '#173177',
									},
									keyword2: { value: '1111', color: '#173177' },
									keyword3: { value: '', color: '#173177' },
									keyword4: {
										value: `11111`,
										color: '#173177',
									},
									remark: { value: '11', color: '#173177' },
								};
								// TODO 暂时写死
								const res = await this.weChatService.templateMessageSend(
									openId,
									'L-6XfDr2EAx8XoCJL8ujbLG3T2SRWiZsGdR7c3Mk5xw',
									'official',
									msgData,
								);
								break;
							}
							case SUBSCRIBE_RULE_SEND_CHANNEL.message: {
								await Notice.create({
									userId,
									title: `PDB查询规则：${title}有条目更新`,
									content: `PDBID为${result['id']}的条目有更新`,
									type: NOTIFICATION_TYPE.subscribeRulePdbUpdate,
									isRead: 0,
									data: rule,
								});
								break;
							}
							default: {
								// TODO 发站内信
								await Notice.create({
									userId,
									title: `PDB查询规则：${title}有条目更新`,
									content: `PDBID为${result['id']}的条目有更新`,
									type: NOTIFICATION_TYPE.subscribeRulePdbUpdate,
									isRead: 0,
									data: rule,
								});
								break;
							}
						}
					}
				}
			}
		} catch (error) {
			console.error('error', error);
		}
	}
}
