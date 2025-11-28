import { Module } from '@nestjs/common'
import { ConfigModule } from '@library/configs'
import { SequelizeModule } from '@nestjs/sequelize'
import { ParseService } from './parse.service'
import { _Entry } from '@model/entry.model'

@Module({
  imports: [ConfigModule, SequelizeModule.forFeature([_Entry])],
  exports: [ParseService],
  providers: [ParseService],
})
export class ParseModule {}
