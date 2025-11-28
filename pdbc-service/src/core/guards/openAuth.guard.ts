import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { isEmpty } from "lodash";
import { JwtService } from "@nestjs/jwt";
import { AUTHORIZE_KEY_METADATA } from "@common/constant";
import { JWT_CONSTANTS } from "@common/constant";
import { JwtPayload } from "@common/interface";
import { User } from "@model/user.model";

@Injectable()
export class OpenAuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 检测是否是开放类型的，例如登录接口不需要校验，可以加入@OpenAuthorize可自动放过
    const authorize = this.reflector.get<boolean>(
      AUTHORIZE_KEY_METADATA,
      context.getHandler()
    );
    // 暂时不需要校验
    return true;
    const request = context.switchToHttp().getRequest<Request>();
    let token = request.headers["authorization"] as string;
    if (isEmpty(token) || token == "undefined") {
      throw new HttpException("请先登录", 400004);
    }
    // try {
    //   // 挂载对象到当前请求上
    //   token = token.replace("Bearer ", "");
    //   const jwtPayload: JwtPayload = this.jwtService.verify(token, {
    //     secret: JWT_CONSTANTS.secret,
    //   });
    //   if (jwtPayload.platform != JWT_CONSTANTS.platform.openApi) {
    //     throw new HttpException(null, 400005);
    //   }
    //   //查找对应用户
    //   const user = await OpenAccount.findOne({
    //     where: {
    //       appID: jwtPayload.sub,
    //     },
    //   });
    //   if (!user) {
    //     throw new HttpException(null, 400006);
    //   }
    //   request["user"] = user;
    // } catch (e) {
    //   // 无法通过token校验
    //   throw new HttpException(e, 401);
    // }
    // return true;
  }
}
