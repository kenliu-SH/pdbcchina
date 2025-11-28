import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@model/user.model';
import { StringDecoder } from 'string_decoder';

export class CreateAccountDto {
	@ApiProperty({ type: String, required: true, description: '账户名称', default: '某某' })
	accountName: string;

	@ApiProperty({ type: Number, required: true, description: '关联角色id', default: 2 })
	roleID: number;

	// isSwitch: number;

	creatorId: number;

	@ApiProperty({ type: String, required: true, description: '密码', default: '77777777' })
	password: string;
}

export class LoginAccountDto {
	@ApiProperty({ type: String, required: true, description: '账户名称', default: 'admin' })
	accountName: string;

	@ApiProperty({ type: String, required: true, description: '密码', default: 'admin21' })
	password: string;
}

export class FindAccountDto {
	role: string;
}
export class FindUserPaginationDto extends FindAccountDto {
	@ApiProperty({ type: String, required: false, description: '账户名称', default: '某某' })
	accountName: string;

	@ApiProperty({ type: String, required: false, description: '是否管理员 0 用户/1 管理', default: '1' })
	isAdmin: number;

	@ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
	order?: string;

	@ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
	page?: string;

	@ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
export class CreateManyUserDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ type: [User], required: true, description: '列表' })
	users: User[];
}
export class DeleteManyUserDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'ids', type: [Number], required: true, description: '列表' })
	ids: number[];
}

export class CreateUser {
	@ApiProperty({ default: 'feng', name: 'firstname', type: String, required: false, description: '名' })
	firstname: string;

	@ApiProperty({ default: 'xiong', name: 'lastname', type: String, required: false, description: '姓' })
	lastname: string;

	@ApiProperty({ default: '13873916250@163.com', name: 'email', type: String, required: true, description: '邮箱' })
	email: string;

	@Length(11, 11, { message: '手机号格式不正确' })
	@ApiProperty({ default: '13873916250', name: 'phone', type: String, required: true, description: '手机号' })
	phone: string;

	@ApiProperty({ default: '88888888', name: 'password', type: String, required: true, description: '密码' })
	password: string;
}

export class FileUploadDto {
	@ApiProperty({ type: 'string', description: '上传的文件', format: 'binary' })
	file: any;
}

export class hashDto {
	@ApiProperty({ type: String, required: true, description: '密码', default: 'admin21' })
	password: string;
}
