import ERR from '@common/ERR';
import { ConfigProvider } from '@library/configs';
import { RedisProvider } from '@library/redis';
import { NavBar } from '@model/navBar.model';
import { NavBarItem } from '@model/navBarItem.model';
import { FindOptions, Op, Sequelize } from '@model/shared';
import { Tag } from '@model/tag.model';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SuperRedis } from '@sophons/redis';
import { NavBarCreateDto, NavBarFindDto, NavBarItemCreateDto, NavBarUpdateDto } from './navBar.dto';
import { Options } from '@model/options.model';
import { OPTIONS_TYPE } from '@common/constant';

@Injectable()
export class NavBarService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(NavBar)
		private navBarModel: typeof NavBar,
		@InjectModel(NavBarItem)
		private navBarItemModel: typeof NavBarItem,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	public async create(dto: NavBarCreateDto) {
		const type = await this.navBarModel.findOne({
			where: {
				// option: dto.option,
				optionId: dto.optionId,
			},
		});

		if (type) {
			const find = await this.navBarModel.findOne({
				where: {
					name: dto.name,
					optionId: dto.optionId,
				},
			});
			if (find) {
				throw await ERR.SQL_DUPLICATION;
			}
		}
		const result = await this.navBarModel.create(dto);
		return result;
	}

	public async addItem(dto: NavBarItemCreateDto, id: number) {
		let find = await this.navBarModel.findOne({
			where: {
				id,
			},
		});
		if (!find) {
			throw await ERR.RESTFUL_GET_ID;
		}

		const result = await this.navBarItemModel.create(dto);
		return result;
	}

	public async edit(dto: NavBarUpdateDto, id: number) {
		let tag = await this.navBarModel.findOne({
			where: {
				id,
			},
		});
		if (!tag) {
			throw await ERR.RESTFUL_GET_ID;
		}
		await tag.update(dto);
		tag = await this.navBarModel.findOne({ where: { id } });
		return tag;
	}

	public async editItem(dto: NavBarItemCreateDto, id: number) {
		let tag = await this.navBarItemModel.findOne({ where: { id } });
		if (!tag) {
			throw new HttpException(null, 500001);
		}
		await tag.update(dto);
		tag = await this.navBarItemModel.findOne({ where: { id } });
		return tag;
	}

	public async delete(id: number) {
		const result = await this.navBarItemModel.destroy({
			where: { navBarId: id },
		});
		if (result) {
			throw new HttpException('有子项存在，请先删除子项', 400);
		}

		const del = await this.navBarModel.destroy({
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
		const result = await this.navBarItemModel.destroy({
			where: { id: id },
		});
		return result;
	}

	public async find(dto: NavBarFindDto) {
		const options: FindOptions = {
			// where: {optionId: dto.optionId,},
			include: [
				{
					model: Options,
				},
				{
					model: NavBarItem,
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
				model: NavBarItem,
				where: {
					[Op.or]: [{ name: { [Op.like]: `%${dto.nameItem}` } }, { zhName: { [Op.like]: `%${dto.nameItem}` } }],
				},
			};
		}

		const result = await NavBar.findAll<NavBar>(options);
		return result;
	}

	// 预览列表
	public async getPreview() {
		const result = await this.navBarModel.findAll({
			where: { isShow: 1 },
			include: [
				{
					model: Options,
				},
				{
					model: NavBarItem,
				},
			],
			order: [['order', 'DESC']],
		});
		return result;
	}
}
