import { NODE_LABEL } from '@common/constant';
import { ApiProperty } from '@nestjs/swagger';
import { NodeDto } from './node.dto';
export class LabelNodeDto {
	@ApiProperty({ description: '查询类型', enum: ['group'], example: 'group' })
	type: string;

	@ApiProperty({ description: '子节点', type: [NodeDto] })
	nodes: NodeDto[];
	@ApiProperty({ description: '逻辑操作符', enum: ['and', 'or'], example: 'and' })
	logical_operator: 'and' | 'or';
}

export class NodeLinkDto{
	@ApiProperty({ description: '逻辑操作符', enum: ['and', 'or'], example: 'and' })
	logical_operator: 'and' | 'or';
	@ApiProperty({ description: '查询类型', enum: ['group'], example: 'group' })
	type: string;
	@ApiProperty({ description: '标签名称', enum: Object.values(NODE_LABEL), example: NODE_LABEL.text })
	label: NODE_LABEL;
	@ApiProperty({ description: '子节点', type: [LabelNodeDto] })
	nodes: LabelNodeDto[];
}
export class QueryDto {
	@ApiProperty({ description: '查询类型', enum: ['group'] })
	type: string;
	@ApiProperty({ description: '逻辑操作符', enum: ['and', 'or'] })
	logical_operator: 'and' | 'or';
	@ApiProperty({ description: '子节点', type: [NodeLinkDto] })
	nodes: NodeLinkDto[];
}
