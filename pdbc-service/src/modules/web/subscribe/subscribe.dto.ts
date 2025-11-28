import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SUBSCRIBE_RULE_CONDITION_TYPE } from '@common/constant';
import { Channel } from '@model/subscribeRule.model';
import { QueryDto } from '../search/filter/model/query.dto';

export class SubscribeDto {}

export class CreateSubscribeRuleDto {
	@IsNotEmpty()
	@ApiProperty({ description: '订阅规则条件类型', enum: Object.values(SUBSCRIBE_RULE_CONDITION_TYPE) })
	conditionType: SUBSCRIBE_RULE_CONDITION_TYPE;
	@IsNotEmpty()
	@ApiProperty({ description: '订阅规则' })
	rule: QueryDto;
	@IsNotEmpty()
	@ApiProperty({ description: '发送渠道', type: [Channel] })
	channels: Channel[];
}


export class GetSubscribeRuleListDto   {
    @ApiProperty({
        name: 'order',
        type: String,
        required: false,
        description: 'order',
      })
      order?: string;
      @ApiProperty({
        name: 'page',
        type: String,
        required: false,
        description: 'page',
        example: 1,
      })
      page?: string;
      @ApiProperty({
        name: 'pageSize',
        type: String,
        required: false,
        description: 'pageSize',
        example: 10,
      })
      pageSize?: string;
}

