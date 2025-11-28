import { NODE_LABEL } from '@common/constant';
import { Operator } from './model/node.dto';
import dayjs from 'dayjs';

/**
 * 过滤条件构造器
 */
export class FilterGenerate {
	attribute: string;
	tableName: string;
	OPERATOR: string = '=' || '!=' || '>' || '>=' || '<' || '<=' || 'LIKE' || 'IN';
	value: any;
	joinSql: string = '';
	label: NODE_LABEL;
	constructor(tableName: string, attribute: string, label: NODE_LABEL = NODE_LABEL.text) {
		console.log('创建FilterGenerate->>', tableName, attribute, label);
		this.attribute = attribute;
		this.tableName = tableName;
		this.label = label;
	}

	// 新方法：创建子查询SQL片段
	buildSubQuery(): string {
		let subQuery = `SELECT Structure_ID FROM ${this.tableName} WHERE `;
		if (this.tableName == 'pdbc_structs_flag') {
			subQuery = `SELECT entityId FROM ${this.tableName} WHERE `;
		}
		if (this.tableName == 'pdbx_reference_molecule') {
			subQuery = `SELECT representative_PDB_id_code FROM ${this.tableName} WHERE `;
		}
		let whereSql = '';
		if (this.label == NODE_LABEL.fullText) {
			whereSql = `${this.tableName}.${this.attribute} LIKE '%${this.value}%'`;
		} else if (this.label == NODE_LABEL.text) {
			let tableNameAndAttribute = `${this.tableName}.${this.attribute}`;
			if (tableNameAndAttribute.includes('Date') || tableNameAndAttribute.includes('date')) {
				tableNameAndAttribute = `DATE(${tableNameAndAttribute})`;
			}

			switch (this.OPERATOR) {
				case 'LIKE':
					if (this.value instanceof Array) {
						this.value = this.value[0];
					}
					this.value = `'%${this.value}%'`;
					whereSql = `${tableNameAndAttribute} ${this.OPERATOR} ${this.value}`;
					break;
				case 'BETWEEN':
				case '>':
				case '<':
				case '>=':
				case '<=':
					if (isFloatString(this.value)) {
						// 是浮点类型 四舍五入
						whereSql = `ROUND(${tableNameAndAttribute},3) ${this.OPERATOR} '${this.value}'`;
					} else {
						whereSql = `${tableNameAndAttribute} ${this.OPERATOR} '${this.value}'`;
					}
					break;
				case 'IN':
					whereSql = `${tableNameAndAttribute} ${this.OPERATOR} ${this.value}`;
					break;
				case 'NOT IN':
					whereSql = `${tableNameAndAttribute} ${this.OPERATOR} ${this.value}`;
					break;
				case 'IS NOT NULL':
					whereSql = `${tableNameAndAttribute} ${this.OPERATOR}`;
					break;
				default:
					if (isFloatString(this.value)) {
						// 是浮点类型 四舍五入
						whereSql = `ROUND(${tableNameAndAttribute},3) ${this.OPERATOR} '${this.value}'`;
					} else {
						whereSql = `${tableNameAndAttribute} ${this.OPERATOR} '${this.value}'`;
					}
					break;
			}
		}

		subQuery += whereSql;
		return subQuery;
	}

	/**
	 * 等于
	 * @returns
	 */
	eq(value: string, negation: boolean = false) {
		if (negation) {
			this.OPERATOR = '!=';
		} else {
			this.OPERATOR = '=';
		}
		this.value = value;
		return this;
	}
	/**
	 * 不为空
	 */
	notNull() {
		this.OPERATOR = 'IS NOT NULL';
		return this;
	}

	/**
	 * 不等于
	 */
	neq(value: string) {
		this.OPERATOR = '!=';
		this.value = value;
		return this;
	}

	/**
	 * 大于
	 */
	gt(value: string) {
		this.OPERATOR = '>';
		this.value = value;
		return this;
	}

	/**
	 * 大于等于
	 */
	gte(value: string) {
		this.OPERATOR = '>=';
		this.value = value;
		return this;
	}

	/**
	 * 小于
	 */
	lt(value: string) {
		this.OPERATOR = '<';
		this.value = value;
		return this;
	}

	/**
	 * 小于等于
	 */
	lte(value: string) {
		this.OPERATOR = '<=';
		this.value = value;
		return this;
	}

	/**
	 * fullText
	 */
	fullText(value: any) {
		this.OPERATOR = 'LIKE';
		this.value = value;
		return this;
	}

	/**
	 * like
	 */
	like(value: string, negation: boolean = false) {
		if (negation) {
			this.OPERATOR = 'NOT LIKE';
		} else {
			this.OPERATOR = 'LIKE';
		}
		this.value = value;
		return this;
	}

	/**
	 * in
	 */
	in(value: any, negation: boolean = false) {
		if (negation) {
			this.OPERATOR = 'NOT IN';
		} else {
			this.OPERATOR = 'IN';
		}
		this.value = `('${value.join("','")}')`;
		return this;
	}

	/**
	 * 范围
	 */
	between(start: any, end: any) {
		this.OPERATOR = 'BETWEEN';
		[start, end].map(value => {
			switch (value) {
				case 'now':
					value = dayjs().format('YYYY-MM-DD HH:mm:ss');
					break;
				case 'now-1M':
					value = dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss');
					break;
			}
		});
		if (typeof start === 'number') {
			console.log('start: ', start);
			console.log('end: ', end);

			this.value = `${start} AND ${end}`;
		} else {
			console.log('start: ', start);
			console.log('end: ', end);

			this.value = `'${start}' AND '${end}'`;
		}
		return this;
	}

	/**
	 * range_upper_incl 闭区间
	 */
	rangeUpperIncl(start: any, end: any) {
		this.OPERATOR = '';
		if (typeof start === 'number') {
			this.value = `>=${start} AND ${this.tableName}.${this.attribute} <=${end}`;
		} else {
			this.value = `>= '${start}' AND ${this.tableName}.${this.attribute} <= '${end}'`;
		}
		return this;
	}

	/**
	 * range_upper_excl 开区间
	 */
	rangeUpperExcl(start: any, end: any) {
		this.OPERATOR = '';
		if (typeof start === 'number') {
			this.value = `>${start} AND ${this.tableName}.${this.attribute} <${end}`;
		} else {
			this.value = `> '${start}' AND ${this.tableName}.${this.attribute} < '${end}'`;
		}
		return this;
	}

	/**
	 * build
	 * @returns
	 */
	build() {
		console.log(9999, this.OPERATOR);

		let whereSql = '';
		if (this.label == NODE_LABEL.fullText) {
			this.joinSql = ` LEFT JOIN ${this.tableName} ON ${this.tableName}.Structure_ID = pdbc_structs_flag.entityId`;
			// return `MATCH(${this.tableName}.${this.attribute}) AGAINST('${this.value}' IN NATURAL LANGUAGE MODE )`;
			whereSql = `${this.tableName}.${this.attribute} LIKE '%${this.value}%'`;
		} else if (this.label == NODE_LABEL.text) {
			this.joinSql = ` LEFT JOIN ${this.tableName} ON ${this.tableName}.Structure_ID = pdbc_structs_flag.entityId`;
			if (this.OPERATOR == 'IN') {
				whereSql = `${this.tableName}.${this.attribute} ${this.OPERATOR}  ${this.value}`;
			} else {
				if (this.value) {
					let tableNameAndAttribute = `${this.tableName}.${this.attribute}`;
					if (tableNameAndAttribute.includes('Date') || tableNameAndAttribute.includes('date')) {
						tableNameAndAttribute = `DATE(${tableNameAndAttribute})`;
					}
					switch (this.OPERATOR) {
						case 'LIKE':
							// 判断是非为数组
							if (this.value instanceof Array) {
								this.value = this.value[0];
							}
							this.value = `'%${this.value}%'`;
							whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  ${this.value}`;
							break;
						case 'BETWEEN':
							this.value = `${this.value}`;
							whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  ${this.value}`;
							break;
						case '':
							whereSql = `${tableNameAndAttribute}  ${this.value}`;
							break;
						case 'IN':
							whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  ${this.value}`;
							break;
						case 'NOT IN':
							whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  ${this.value}`;
							break;
						case '>':
						case '<':
						case '>=':
						case '<=':
							// 日期要加上单引号
							if (typeof this.value === 'number') {
								whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  ${this.value}`;
							} else {
								whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  '${this.value}'`;
							}
							whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  ${this.value}`;
							break;
						default:
							whereSql = `${tableNameAndAttribute} ${this.OPERATOR}  '${this.value}'`;
							break;
					}
				} else {
					whereSql = `${this.tableName}.${this.attribute} ${this.OPERATOR}`;
				}
			}
		}
		return whereSql;
	}

	/**
	 * rcsb 运算符转换
	 */
	operator(operator: Operator, value: any, negation: boolean = false) {
		switch (operator) {
			case Operator.exact_match:
				this.eq(value, negation);
				break;
			case Operator.equals:
				this.eq(value, negation);
				break;
			case Operator.exists:
				if (!negation) {
					this.notNull();
				} else {
					this.eq(value, negation);
				}
				break;
			case Operator.greater:
				this.gt(value);
				break;
			case Operator.less:
				this.lt(value);
				break;
			case Operator.greater_or_equal:
				this.gte(value);
				break;
			case Operator.less_or_equal:
				this.lte(value);
				break;
			case Operator.in:
				this.in(value, negation);
				break;
			case Operator.contains_words:
				this.like(value, negation);
				break;
			case Operator.contains_phrase:
				this.like(value, negation);
				break;
			case Operator.range_exclusive:
				this.rangeUpperExcl(value[0], value[1]);
				break;
			case Operator.range_upper_incl:
				this.rangeUpperIncl(value[0], value[1]);
				break;
			case Operator.range:
				const { from, to } = value;
				this.between(from, to);
			case Operator.not_null:
				this.notNull();
				break;
			default:
				break;
		}
		return this;
	}
}

function isFloatString(str) {
	if (!str) {
		return false;
	}
	// 首先检查是否为数字
	if (!isNaN(str) && str.trim() !== '') {
		// 将字符串转换为数字
		const num = Number(str);

		// 检查数字是否为浮点数（非整数）
		return num % 1 !== 0;
	}

	// 如果不是数字或者是空字符串，返回 false
	return false;
}
