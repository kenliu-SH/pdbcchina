import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { Home } from "@model/home.model";
import { HttpException, Inject, Injectable, Req } from '@nestjs/common';
import { BiologicalCount, DepositFindDto, FindHighlightPaginationDto, footerFindDto, menuBarFindDto, RespBase } from './home.dto';
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { Highlight } from '@model/highlight.model';
import { _Entry } from '@model/entry.model';
import { Banner } from '@model/banner.model';
import { InjectModel } from '@nestjs/sequelize';
import { Footer } from '@model/footer.model';
import { FooterItem } from '@model/footerItem.model';
import { Theme } from '@model/theme.model';
import { MenuBar } from '@model/menuBar.model';
import { MenuBarItem } from '@model/menuBarItem.model';
import { NavBar } from '@model/navBar.model';
import { NavBarItem } from '@model/navBarItem.model';
import { entry, pdbxAuditRevisionHistory, pdbxDatabaseRelated, pdbxDatabaseStatus, struct } from '@model/mmcif';
import { _EntryService } from '../entry/entry.service';
import { StructureSummaryVO } from '../entry/entry.vo';
import { MailService } from '@library/mail/mail.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Options } from '@model/options.model';
import { Visitor } from '@model/visitor.model';
import dayjs = require('dayjs');
import { PdbcEntry, PdbcStructsFlag } from '@model/expansion';
import { PDB_STATUS } from '@common/constant';

@Injectable()
export class HomeService {
	constructor(
		@InjectModel(Banner)
		private bannerModel: typeof Banner,
		@InjectModel(Footer)
		private footerModel: typeof Footer,
		@InjectModel(Theme)
		private themeModel: typeof Theme,
		private readonly configs: ConfigProvider,
		private readonly _entryService: _EntryService,
		private readonly mailService: MailService,
		private readonly mailerService: MailerService,
	) {}

	public async base(): Promise<RespBase> {
		const respBase = new RespBase();
		const biologicalCount = await this.getbiologicalCount();
		let newPDBList = await entry.findAll({
			limit: 10,
			logging: true,
			attributes: {
				include: [[Sequelize.col('pdbcEntry.releasedDate'), 'releasedDate']],
			},
			order: [
				['releasedDate', 'DESC'],
				['ID', 'DESC'],
			],
			include: [
				{
					model: PdbcEntry,
					attributes: ['releasedDate'],
					as: 'pdbcEntry',
					required: true,
				},
				{ model: struct, required: true },
			],
		});
		console.log('biologicalCount: ', biologicalCount);
		const banners = await this.bannerModel.findAll({
			where: {
				isShow: 1,
			},
			order: [['id', 'DESC']],
		});
		respBase.biologicalCount = biologicalCount;
		respBase.banners = banners;
		//最近更新时间;
		// let lastUpdateTime = await pdbxDatabaseStatus.findOne({
		// 	attributes: ['recvdInitialDepositionDate'],
		// 	order: [['recvdInitialDepositionDate', 'DESC']],
		// });
		// let lastUpdateDate = dayjs(lastUpdateTime.recvdInitialDepositionDate).format('YYYY-MM-DD HH:mm:ss');
		// respBase.lastUpdate = lastUpdateDate;
		// let lastUpdateTime = await pdbxAuditRevisionHistory.findOne({
		// 	logging: true,
		// 	attributes: ['revisionDate'],
		// 	order: [['revisionDate', 'DESC']],
		// });
		// let lastUpdateDate = dayjs(lastUpdateTime.revisionDate).format('YYYY-MM-DD HH:mm:ss');
		// respBase.lastUpdate = lastUpdateDate;

		const revisionDateFromQuery = newPDBList.length > 0 ? newPDBList[0].getDataValue('releasedDate') : null;
		// 检查是否成功获取了 revisionDate
		if (revisionDateFromQuery !== null) {
			// 将 revisionDate 格式化为 'YYYY-MM-DD HH:mm:ss'
			const lastUpdateDate = dayjs(revisionDateFromQuery).format('YYYY-MM-DD');
			// 设置 respBase 中的 lastUpdate
			respBase.lastUpdate = lastUpdateDate;
		}

		// 设置结构摘要信息
		let tasks = newPDBList.map(async newPDB => {
			newPDB = newPDB.toJSON();
			const structureSummaryVO = await this._entryService.structureSummaryV2(newPDB.id, false, true);
			return { ...newPDB, structureSummaryVO };
		});

		newPDBList = (await Promise.all(tasks)) as any;

		respBase.newPDBList = newPDBList;

		return respBase;
	}

	// 获取 蛋白质数量
	public async getbiologicalCount(): Promise<BiologicalCount> {
		const biologicalCount = new BiologicalCount();
		// const html = await axios.get('https://www.rcsb.org/', {
		//   responseType: 'text',
		// })
		// const $ = cheerio.load(html.data)
		// biologicalCount.global = Number($('#CurrentStructureCount').text())
		biologicalCount.global = await PdbcStructsFlag.count({
			distinct: true,
			where: {
				status: PDB_STATUS.RELEASED,
				entityId: Sequelize.literal(`LENGTH(entityId) = 4`),
			},
		});
		biologicalCount.china = 78723;
		return biologicalCount;
	}

	public async findPaginationHighlights(dto: FindHighlightPaginationDto, pagination: Pagination) {
		const options: FindPaginationOptions = {
			where: {
				isHomePage: 1,
				isShow: 1,
			},
			include: [{ all: true }],
			order: [
				['weight', 'DESC'],
				['isTop', 'DESC'],
				['id', 'DESC'],
			],
			pagination,
		};
		if (dto.releaseTime) {
			options.where['releaseTime'] = {
				[Op.like]: `%${dto.releaseTime}%`,
			};
		}
		if (dto.isChinese) {
			options.where = {
				isChinese: dto.isChinese,
			};
		}

		const result = await Highlight.findPagination<Highlight>(options);
		return result;
	}

	public async findFooters(dto: footerFindDto) {
		const options: FindOptions = {
			where: { isShow: 1 },
			include: [{ model: FooterItem, where: { isShow: 1 } }],
			order: [['order', 'DESC']],
		};
		if (dto.type) {
			options.where['type'] = dto.type;
		}

		const result = await Footer.findAll<Footer>(options);

		return result;
	}

	public async findTheme() {
		const result = await Theme.findAll({
			where: {
				[Op.or]: [
					{
						isDefault: 1,
					},
					{
						isLock: 1,
					},
				],
			},
		});
		return result;
	}

	public async findMenuBar() {
		const option: FindOptions = {
			where: { isShow: 1 },
			include: [
				{
					model: Options,
				},
				{
					model: MenuBarItem,
					where: { isShow: 1 },
					required: false,
				},
			],
			order: [['order', 'DESC']],
		};
		const result = await MenuBar.findAll<MenuBar>(option);
		return result;
	}

	public async findNavBar() {
		const option: FindOptions = {
			where: { isShow: 1 },
			include: [
				{
					model: Options,
				},
				{
					model: NavBarItem,
					where: { isShow: 1 },
					required: false,
				},
			],
			order: [['order', 'DESC']],
		};
		const result = await NavBar.findAll<NavBar>(option);
		return result;

		// const result = await NavBar.findAll();
		// return result;
	}

	// 验证访问码
	public async verifyCode(accessCode: string) {
		const visitor = await Visitor.findOne({ where: { accessCode } });
		if (!visitor) {
			throw new HttpException('访问码不存在', 400008);
		}

		const isExpires = await Visitor.findOne({ where: { accessCode, isExpires: 1 } });
		if (isExpires) {
			throw new HttpException('访问码已过期', 400009);
		}

		return true;
	}
}
