import { applyDecorators, Controller, UseGuards } from '@nestjs/common';
import { ADMIN_PREFIX, OPEN_PREFIX, WEB_PREFIX } from '@common/constant';
import { WebAuthGuard } from '@core/guards/webAuth.guard';
import { OpenAuthGuard } from '@core/guards/openAuth.guard';
import { AdminAuthGuard } from '@core/guards/adminAuth.guard';

/**
 * 自动加入web/前缀路由的Controller注解守卫 UseGuards(WebAuthGuard)
 */
export function WebController(prefix: string) {
	return applyDecorators(Controller(`${WEB_PREFIX}/${prefix}`), UseGuards(WebAuthGuard));
}

export function AdminController(prefix: string) {
	return applyDecorators(Controller(`${ADMIN_PREFIX}/${prefix}`), UseGuards(AdminAuthGuard));
}

export function OpenController(prefix: string) {
	return applyDecorators(Controller(`${OPEN_PREFIX}/${prefix}`), UseGuards(OpenAuthGuard));
}
