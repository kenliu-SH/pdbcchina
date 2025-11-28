import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@model/user.model';
import { StringDecoder } from 'string_decoder';

export class FindUserPaginationDto extends User {
	@ApiProperty({ type: String, required: false, description: 'order' })
	order?: string;

	@ApiProperty({ type: String, required: false, description: 'page' })
	page?: string;

	@ApiProperty({ type: String, required: false, description: 'pageSize' })
	pageSize?: string;
}
export class CreateManyUserDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ type: [User], required: true, description: '列表' })
	users: User[];
}
export class DeleteManyUserDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ type: [Number], required: true, description: '列表' })
	ids: number[];
}

export class CreateUserDto {
	@ApiProperty({ type: String, required: true, description: '名', default: null })
	firstname: string;

	@ApiProperty({ type: String, required: true, description: '姓', default: null })
	lastname: string;

	// 名称
	@ApiProperty({ type: String, required: true, description: '名称', default: null })
	nickname: string;

	// 姓氏
	@ApiProperty({ type: String, required: true, description: '姓氏', default: null })
	surname: string;

	@IsEmail()
	@ApiProperty({ type: String, required: true, description: '邮箱', default: null })
	email: string;

	@ApiProperty({ type: String, required: true, description: '密码', default: null })
	password: string;

	roleID: number;
}

export class updataUserDto {
	@ApiProperty({ type: String, required: true, description: '名', default: null })
	firstname: string;

	@ApiProperty({ type: String, required: true, description: '姓', default: null })
	lastname: string;

	// 名称
	@ApiProperty({ type: String, required: true, description: '名称', default: null })
	nickname: string;

	// 姓氏
	@ApiProperty({ type: String, required: true, description: '姓氏', default: null })
	surname: string;

	@IsEmail()
	@ApiProperty({ type: String, required: true, description: '邮箱', default: null })
	email: string;

	// @ApiProperty({ type: String, required: true, description: '密码', default: null })
	// password: string;

	@ApiProperty({ type: String, required: false, description: '头像', default: null })
	photoLink: string;
}

export class LoginUserDto {
	@IsEmail()
	@ApiProperty({ type: String, required: true, description: '邮箱', default: null })
	email: string;

	@ApiProperty({ type: String, required: true, description: '密码', default: null })
	password: string;
}
