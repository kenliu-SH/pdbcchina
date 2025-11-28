import { DynamicModule, Module } from '@nestjs/common'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { FormatInterceptor } from '@core/interceptor/format'
import { WebAuthGuard } from '@core/guards/webAuth.guard'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { SmsModule } from './sms/sms.module'
import { UserModule } from './user/user.module'
import { NewsModule } from './news/news.module'
import { VisitorModule } from './visitor/visitor.module';
import * as AdminModuleMain from './index'

@Module({
  imports: [VisitorModule]
})
export class AdminModule {
  static register(): DynamicModule {
    return {
      module: AdminModule,
      imports: [
        JwtModule.register({
          secret: JWT_CONSTANTS.secret,
          signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
        }),
        ...Object.values(AdminModuleMain),
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
