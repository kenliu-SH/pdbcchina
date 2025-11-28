import ERR from '@common/ERR';
import { ConfigProvider } from '@library/configs';
import { RedisProvider } from '@library/redis';
import { FindOptions, Op, Sequelize } from '@model/shared';
import { Tag } from '@model/tag.model';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SuperRedis } from '@sophons/redis';
import { addAlias } from 'module-alias';
import { PutOrderDto } from './tag.dto';

@Injectable()
export class TagService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(Tag)
		private tagModel: typeof Tag,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) { }

	public async create(dto: Tag) {
		const find = await this.tagModel.findOne({
			where: {
				name: dto.name,
				zhName: dto.zhName || "",
			},
		});
		if (find) {
			throw await ERR.SQL_DUPLICATION;
		}
		const result = await this.tagModel.create(dto);
		return result;
	}

	public async findAll() {
		const options: FindOptions = {
			order: [['order', 'DESC']],
		};
		const result = await Tag.findAll<Tag>(options);
		return result;
	}

	public async edit(dto: Tag, id: number) {
		let tag = await this.tagModel.findOne({ where: { id } });
		if (!tag) {
			throw new HttpException(null, 500001);
		}
		await tag.update(dto);
		tag = await this.tagModel.findOne({ where: { id } });
		return tag;
	}

	public async delete(id: number) {
		const result = await this.tagModel.destroy({
			where: { id: id },
		});
		return result;
	}

	public async putOrder(dto: PutOrderDto, id: number) {
		const tags = await this.tagModel.findAll({
			where: {
				id: {
					[Op.in]: [id, dto.swopId],
				},
			},
		});
		let snum = Number(tags[0].order);
		tags[0].order = tags[1].order;
		tags[1].order = snum;
		await tags[0].save();
		await tags[1].save();

		const result = await this.tagModel.findAll();
		return result;
	}
}
