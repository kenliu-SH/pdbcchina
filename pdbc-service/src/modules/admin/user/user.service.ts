import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { User } from '@model/user.model';
import { FindUserPaginationDto, CreateManyUserDto, DeleteManyUserDto, CreateAccountDto, FindAccountDto } from './user.dto';
import ERR from '@common/ERR';
import { Association } from 'sequelize';
import { Role } from '@model/role.model';
import { CryptoUtil } from '@library/utils';

@Injectable()
export class UserService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(User)
		private userModel: typeof User,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
	) {}

	private userCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:userLIST:${JSON.stringify(args)}`;
	}

	public async create(dto: CreateAccountDto, creatorId: number) {
		dto.creatorId = creatorId;
		let user = await this.userModel.findOne({
			where: {
				accountName: dto.accountName,
			},
		});
		if (user) {
			throw ERR.USER_EXISTS;
		}
		if (!this.passwordComplexity(dto.password)) {
			throw new HttpException('密码强度过低，必须8位并必须包含数字、字母、特殊字符', 400);
		}
		dto.password = CryptoUtil.hashing(dto.password);
		const result = await this.userModel.create({ ...dto, isAdmin: 1 });
		return result;
	}

	/**
	 * 密码复杂性验证：必须大于8位，必须包含数字、字母、特殊字符
	 * @param password
	 * @returns
	 */
	public passwordComplexity(password: string) {
		const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,}$/;
		return reg.test(password);
	}

	public async edit(dto: CreateAccountDto, id: number) {
		let user = await this.userModel.findOne({ where: { id } });
		if (!user) {
			throw new HttpException(null, 500001);
		}
		if (dto.password) {
			dto.password = CryptoUtil.hashing(dto.password);
		}
		await user.update(dto);
		user = await this.userModel.findOne({
			where: { id },
			attributes: ['id', 'accountName', 'creatorId', 'isSwitch', 'roleID', 'updatedAt'],
		});
		return user;
	}

	public async delete(id: number) {
		const result = await this.userModel.destroy({
			where: {
				id: id,
			},
		});
		return result;
	}

	public async deleteMany(dto: DeleteManyUserDto) {
		let successCount = 0;
		let result = true;
		try {
			for (let index = 0; index < dto.ids.length; index++) {
				const user = await this.userModel.destroy({
					where: { id: dto.ids[index] },
				});
			}
		} catch (err) {
			throw new HttpException(null, 400037);
		}
		if (successCount < dto.ids.length) {
			throw new HttpException(null, 400037);
		}
		return result;
	}

	public async find(id: number) {
		const options: FindOptions = {
			where: { id },
			include: [{ model: Role }],
			attributes: ['id', 'accountName', 'creatorId', 'isSwitch', 'roleID', 'updatedAt'],
		};
		const account = await this.userModel.findOne(options);
		return account;
	}

	public async findPagination(dto: FindUserPaginationDto, pagination: Pagination) {
		const result = await this.findPaginationDao(dto, pagination);
		for (let index = 0; index < result.rows.length; index++) {
			const row = result.rows[index];
			if (row.creatorId) {
				const user = await this.userModel.findOne({
					where: {
						id: row.creatorId,
					},
				});
				row.setDataValue('creator', user);
			}
		}
		return result;
	}

	public async findPaginationDao(dto: FindUserPaginationDto, pagination: Pagination) {
		const options: FindPaginationOptions = {
			where: {},
			include: [{ model: Role }],
			attributes: ['id', 'accountName', 'creatorId', 'isSwitch', 'roleID', 'updatedAt', 'createdAt'],
			pagination,
		};
		if (dto.accountName) {
			// 模糊查询
			options.where['accountName'] = {
				[Op.like]: `%${dto.accountName}%`,
			};
		}

		if (dto.isAdmin) {
			options.where['isAdmin'] = dto.isAdmin;
			if (dto.isAdmin == 1) {
				options.attributes = ['id', 'accountName', 'creatorId', 'isSwitch', 'roleID', 'updatedAt', 'createdAt'];
			} else {
				options.attributes = ['id', 'firstname', 'lastname', 'nickname', 'surname', 'email', 'createdAt'];
			}
		}

		const result = await User.findPagination<User>(options);
		return result;
	}
}
