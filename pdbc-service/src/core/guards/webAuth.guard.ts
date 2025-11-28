import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { isEmpty } from 'lodash';
import { JwtService } from '@nestjs/jwt';
import { AUTHORIZE_KEY_METADATA } from '@common/constant';
import { JWT_CONSTANTS } from '@common/constant';
import { JwtPayload } from '@common/interface';
import { User } from '@model/user.model';

// 不强制登录
@Injectable()
export class WebAuthGuard implements CanActivate {
	constructor(private reflector: Reflector, private jwtService: JwtService) {}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		// 检测是否是开放类型的，例如登录接口不需要校验，可以加入@OpenAuthorize可自动放过
		const authorize = this.reflector.get<boolean>(AUTHORIZE_KEY_METADATA, context.getHandler());
		if (authorize) {
			return true;
		}
		const request = context.switchToHttp().getRequest<Request>();
		let token = request.headers['authorization'] as string;
		if (isEmpty(token)) {
			throw new HttpException('未登录', 400004);
		}
		if (token) {
			try {
				// 挂载对象到当前请求上
				token = token.replace('Bearer ', '');
				const jwtPayload: JwtPayload = this.jwtService.verify(token, {
					secret: JWT_CONSTANTS.secret,
				});
				//查找对应用户
				const user: User = await User.findOne({
					where: { id: jwtPayload.userID },
				});
				console.log(3333, user);

				request['user'] = user;
			} catch (e) {
				console.log(4444, e);

				// 无法通过token校验
				throw new HttpException(null, 401);
			}
		} else {
			throw new HttpException(null, 401);
		}
		return true;
	}
}
