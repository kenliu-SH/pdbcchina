import ERR from '@common/ERR';
import { Pagination } from '@common/interface';
import { ConfigProvider } from '@library/configs';
import { RedisProvider } from '@library/redis';
import { Footer } from '@model/footer.model';
import { FooterItem } from '@model/footerItem.model';
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { Tag } from '@model/tag.model';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SuperRedis } from '@sophons/redis';
import _ from 'lodash';
import { footerCreateDto, footerFindDto, itemCreateDto } from './footer.dto';

@Injectable()
export class FooterService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(Footer)
		private footerModel: typeof Footer,
		@InjectModel(FooterItem)
		private footerItemModel: typeof FooterItem,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	public async create(dto: footerCreateDto) {
		const result = await this.footerModel.create(dto);
		return result;
	}

	public async addItem(dto: itemCreateDto, id: number) {
		let find = await this.footerModel.findOne({ where: { id: id } });
		if (!find) {
			throw ERR.RESTFUL_GET_ID;
		}
		const result = await this.footerItemModel.create(dto);
		return result;
	}

	public async edit(dto: footerCreateDto, id: number) {
		let tag = await this.footerModel.findOne({ where: { id } });
		if (!tag) {
			throw new HttpException(null, 500001);
		}
		await tag.update(dto);
		tag = await this.footerModel.findOne({ where: { id } });
		return tag;
	}

	public async editItem(dto: itemCreateDto, id: number) {
		let tag = await this.footerItemModel.findOne({ where: { id } });
		if (!tag) {
			throw new HttpException(null, 500001);
		}
		await tag.update(dto);
		tag = await this.footerItemModel.findOne({ where: { id } });
		return tag;
	}

	public async delete(id: number) {
		let result = await this.footerItemModel.destroy({
			where: { footerId: id },
		});
		if (result) throw new HttpException('子项存在数据不可删除', 500001);

		const del = await this.footerModel.destroy({
			where: { id: id },
		});
		return del;
	}

	public async deleteItem(id: number) {
		const result = await this.footerItemModel.destroy({
			where: { id: id },
		});
		return result;
	}

	public async find(dto: footerFindDto) {
		const options: FindOptions = {
			include: [{ model: FooterItem }],
			order: [['order', 'DESC']],
			where: {
				type: 0,
			},
		};

		if (dto.name) {
			options.where[Op.or] = [
				{
					name: {
						[Op.like]: `%${dto.name}`,
					},
				},
				{
					zhName: {
						[Op.like]: `%${dto.name}`,
					},
				},
			];
		}

		if (dto.nameItem) {
			options.include[0] = {
				model: FooterItem,
				where: {
					[Op.or]: [{ name: { [Op.like]: `%${dto.nameItem}` } }, { zhName: { [Op.like]: `%${dto.nameItem}` } }],
				},
				required: true,
			};
		}

		const result = await Footer.findAll<Footer>(options);
		return result;
	}
}
