import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import * as OpenModuleMain from './index';

@Module({})
export class OpenModule {
	static register(): DynamicModule {
		return {
			module: OpenModule,
			imports: [
				...Object.values(OpenModuleMain),
				JwtModule.register({
					secret: JWT_CONSTANTS.secret,
					signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
				}),
			],
		};
	}
}
