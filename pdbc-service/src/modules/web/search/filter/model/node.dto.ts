import { ApiProperty } from '@nestjs/swagger';
export class NodeParameter {
	@ApiProperty({ description: '操作符', example: 'exact_match' })
	operator?: Operator;
	@ApiProperty({ description: '字段', example: 'exptl.method' })
	attribute?: string;
	@ApiProperty({ description: '值', example: 'X-RAY DIFFRACTION' })
	value: string | string[] | number | number[];
	@ApiProperty({ description: 'is not', example: false })
	negation?: boolean;
}
export class NodeDto {
	@ApiProperty({ description: '指令类型', enum: ['terminal'] })
	type: 'terminal';
	@ApiProperty({ description: '服务名称', enum: ['text'] })
	service: 'text';
	@ApiProperty({ description: '参数', type: NodeParameter })
	parameters: NodeParameter;
}

export enum Operator {
	// exact_match
	exact_match = 'exact_match',
	// exists
	exists = 'exists',
	// 不等于空
	not_null = 'not_null',
	// greater 大于
	greater = 'greater',
	// less 小于
	less = 'less',
	// greater_or_equal 大于等于
	greater_or_equal = 'greater_or_equal',
	// less_or_equal 小于等于
	less_or_equal = 'less_or_equal',
	// in
	in = 'in',
	// contains_words
	contains_words = 'contains_words',
	// contains_phrase
	contains_phrase = 'contains_phrase',

	// 范围(包括上)
	range_upper_incl = 'range_upper_incl',

	// 范围(不包括上)
	range_exclusive = 'range_upper_excl',

	// 翻译
	range = 'range',

	// equals
	equals = 'equals',
}

