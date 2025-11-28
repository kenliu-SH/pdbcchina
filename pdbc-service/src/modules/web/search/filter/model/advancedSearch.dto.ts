import { ApiProperty } from '@nestjs/swagger';
import { QueryDto } from './query.dto';

export class AdvancedSearchDto {
	@ApiProperty({ description: '高级搜索查询条件', type: QueryDto, required: false })
	query: QueryDto;
	@ApiProperty({ type: String, required: false, description: '实验方法 多选用逗号隔开  如 1,2' })
	exptlMethod: string;
	@ApiProperty({ type: String, required: false, description: '关键字' })
	keyword: string;
	@ApiProperty({ type: String, required: false, description: 'order' })
	order?: string;
	@ApiProperty({ type: String, required: false, description: 'page', example: 1 })
	page?: string;
	@ApiProperty({ type: Number, required: false, description: 'pageSize', example: 10 })
	pageSize?: number;
	// 排除 structureSummaryVO
	@ApiProperty({ type: Boolean, required: false, description: '是否排除 structureSummaryVO', example: false })
	isExcludeStructureSummaryVO?: boolean;
}
