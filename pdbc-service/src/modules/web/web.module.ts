import { DynamicModule, Module } from '@nestjs/common'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { FormatInterceptor } from '@core/interceptor/format'
import { WebAuthGuard } from '@core/guards/webAuth.guard'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { SmsModule } from './sms/sms.module'
import * as WebModuleMain from './index'
import { NewsModule } from './news/news.module'

@Module({})
export class WebModule {
  static register(): DynamicModule {
    return {
      module: WebModule,
      imports: [
        ...Object.values(WebModuleMain),
        JwtModule.register({
          secret: JWT_CONSTANTS.secret,
          signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
        }),
        // ...Object.values(UserModule),
      ],
      providers: [
        // {
        //   provide: APP_GUARD,
        //   useClass: WebAuthGuard,
        // },
        // {
        //   provide: APP_INTERCEPTOR,
        //   useClass: FormatInterceptor,
        // },
      ],
    }
  }
}
