import ERR from '@common/ERR';
import { ConfigProvider } from '@library/configs';
import { RedisProvider } from '@library/redis';
// import { Deposit } from '@model/deposit.model';
// import { DepositItem } from '@model/depositItem.model';
import { MenuBar } from '@model/menuBar.model';
import { MenuBarItem } from '@model/menuBarItem.model';
import { FindOptions, Op, Sequelize } from '@model/shared';
import { Tag } from '@model/tag.model';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SuperRedis } from '@sophons/redis';
import { DepositCreateDto, DepositFindDto, DepositItemCreateDto, DepositUpdateDto, menuBarDto, menuBarUpdateDto } from './menuBar.dto';
import { Options } from '@model/options.model';

@Injectable()
export class MenuBarService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		// @InjectModel(Deposit)
		// private depositModel: typeof Deposit,
		// @InjectModel(DepositItem)
		// private depositItemModel: typeof DepositItem,
		@InjectModel(MenuBar)
		private depositModel: typeof MenuBar,
		@InjectModel(MenuBarItem)
		private menuBarItemModel: typeof MenuBarItem,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	public async create(dto: DepositCreateDto) {
		const type = await this.depositModel.findOne({
			where: {
				optionId: dto.optionId,
			},
		});

		if (type) {
			const find = await this.depositModel.findOne({
				where: {
					name: dto.name,
					optionId: dto.optionId,
				},
			});
			if (find) {
				throw await ERR.SQL_DUPLICATION;
			}
		}
		const result = await this.depositModel.create(dto);
		return result;
	}

	public async createMenu(dto: menuBarDto) {
		const type = await this.depositModel.findOne({
			where: {
				optionId: dto.optionId,
				// optionId: dto.optionId,
			},
		});

		if (type) {
			const find = await this.depositModel.findOne({
				where: {
					name: dto.name,
				},
			});
			if (find) {
				throw await ERR.SQL_DUPLICATION;
			}
		}
		const result = await this.depositModel.create(dto);
		return result;
	}

	public async addItem(dto: DepositItemCreateDto, id: number) {
		let find = await this.depositModel.findOne({
			where: {
				id,
				// option: 'desposit',
			},
		});
		if (!find) {
			throw await ERR.RESTFUL_GET_ID;
		}

		const result = await this.menuBarItemModel.create(dto);
		return result;
	}

	public async editMenu(dto: menuBarUpdateDto, id: number) {
		let tag = await this.depositModel.findOne({
			where: {
				id,
			},
		});
		if (!tag) {
			throw await ERR.RESTFUL_GET_ID;
		}
		await tag.update(dto);
		tag = await this.depositModel.findOne({ where: { id } });
		return tag;
	}

	public async edit(dto: DepositUpdateDto, id: number) {
		let tag = await this.depositModel.findOne({
			where: {
				id,
			},
		});
		if (!tag) {
			throw await ERR.RESTFUL_GET_ID;
		}
		await tag.update(dto);
		tag = await this.depositModel.findOne({ where: { id } });
		return tag;
	}

	public async editItem(dto: DepositItemCreateDto, id: number) {
		let tag = await this.menuBarItemModel.findOne({ where: { id } });
		if (!tag) {
			throw new HttpException(null, 500001);
		}
		await tag.update(dto);
		tag = await this.menuBarItemModel.findOne({ where: { id } });
		return tag;
	}

	public async delete(id: number) {
		const result = await this.menuBarItemModel.destroy({
			where: { menuBarId: id },
		});
		if (result) {
			throw new HttpException('有子项存在，请先删除子项', 400);
		}
		const del = await this.depositModel.destroy({
			where: {
				id: id,
			},
		});
		if (!del) {
			throw ERR.RESTFUL_DELETE_ID;
		}
		return del;
	}

	public async deleteItem(id: number) {
		const result = await this.menuBarItemModel.destroy({
			where: { id: id },
		});
		return result;
	}

	public async find(dto: DepositFindDto) {
		const options: FindOptions = {
			include: [
				{
					model: Options,
				},
				{
					model: MenuBarItem,
				},
			],
			order: [['order', 'DESC']],
		};
		if (dto.optionId) {
			options.where = {
				optionId: dto.optionId,
			};
		}

		if (dto.name) {
			options.where[Op.or] = [
				{
					name: { [Op.like]: `%${dto.name}` },
				},
				{
					zhName: { [Op.like]: `%${dto.name}` },
				},
			];
		}

		if (dto.nameItem) {
			options.include[0] = {
				model: MenuBarItem,
				where: {
					[Op.or]: [{ name: { [Op.like]: `%${dto.nameItem}` } }, { zhName: { [Op.like]: `%${dto.nameItem}` } }],
				},
			};
		}

		const result = await MenuBar.findAll<MenuBar>(options);
		return result;
	}
}
