import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@library/configs';
import { ConvertService } from './convert.service';
import { PDBService } from '@library/sync';
import { SequelizeModule } from '@nestjs/sequelize';
import { _Entry } from '@model/entry.model';
import { BullModule } from '@nestjs/bull';
import { CommonFunctionsService } from './functions/common.functions';
@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([_Entry]),
  ],
  exports: [ConvertService, CommonFunctionsService],
  providers: [ConvertService, CommonFunctionsService],
})
export class ConvertModule { }
