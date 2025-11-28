import { FilterGenerate } from './filter.generate';

/**
 * 过滤条件构造器
 */
export class SearchFilterBuild {
	querySql: string = `SELECT DISTINCT pdbc_structs_flag.* FROM pdbc_structs_flag `;
	whereSql: string = `WHERE  LENGTH(pdbc_structs_flag.entityId) = 4 AND pdbc_structs_flag.status = 'released'`;
	joinSql: string = '';
	/**
	 * and 连接
	 * @param filterGenerate 过滤条件生成器
	 */
	// 修改后的and方法，以使用子查询
	and(filterGenerate: FilterGenerate) {
		console.log("and filterGenerate: ", filterGenerate);

		if (filterGenerate.value == null && filterGenerate.OPERATOR != 'IS NOT NULL') {
			return this;
		}

		// 使用子查询来构建WHERE子句
		let subQuery = filterGenerate.buildSubQuery();
		if (this.whereSql.length > 0) {
			this.whereSql += ` AND pdbc_structs_flag.entityId IN (${subQuery})`;
		} else {
			this.whereSql = ` WHERE pdbc_structs_flag.entityId IN (${subQuery})`;
		}

		return this;
	}


	/**
	 * and 连接
	 * @param searchFilterBuild
	 */
	andFilter(searchFilterBuild: SearchFilterBuild) {
		if (this.whereSql === '') {
			this.whereSql += 'WHERE ';
		} else {
			this.whereSql += ' AND ';
		}

		// 合并子查询条件
		this.whereSql += `(${searchFilterBuild.whereSql.replace('WHERE', '')})`;

		return this;
	}

	/**
	 * or 连接
	 */
	or(filterGenerate: FilterGenerate) {
		if (filterGenerate.value == null && filterGenerate.OPERATOR != 'IS NOT NULL') {
			return this;
		}

		let subQuery = filterGenerate.buildSubQuery();
		if (this.whereSql.length > 0) {
			this.whereSql += ` OR pdbc_structs_flag.entityId IN (${subQuery})`;
		} else {
			this.whereSql = ` WHERE pdbc_structs_flag.entityId IN (${subQuery})`;
		}

		return this;
	}

	/**
	 * or 连接
	 */
	orFilter(searchFilterBuild: SearchFilterBuild) {
		if (this.whereSql === '') {
			this.whereSql += 'WHERE ';
		} else {
			this.whereSql += ' OR ';
		}

		// 合并子查询条件
		this.whereSql += `(${searchFilterBuild.whereSql.replace('WHERE', '')})`;

		return this;
	}

	/**
	 * build
	 */
	build() {
		// if (this.joinSql.indexOf('pdbx_audit_revision_history') == -1) {
		// 	this.joinSql += ` LEFT JOIN pdbx_audit_revision_history ON pdbx_audit_revision_history.Structure_ID = pdbc_structs_flag.entityId`;
		// }
		return `${this.querySql} ${this.joinSql} ${this.whereSql}`;
	}
	/**
	 * build count
	 */
	buildCount() {
		// if (this.joinSql.indexOf('pdbx_audit_revision_history') == -1) {
		// 	this.joinSql += ` LEFT JOIN pdbx_audit_revision_history ON pdbx_audit_revision_history.Structure_ID = pdbc_structs_flag.entityId`;
		// }
		return `SELECT COUNT(distinct pdbc_structs_flag.entityId) FROM pdbc_structs_flag ${this.joinSql} ${this.whereSql}`;
	}
	/**
	 * build Refinements Experimental Method count
	 */
	buildRefinementsExperimentalMethodCount() {
		if (this.joinSql.indexOf('exptl.Structure_ID') == -1) {
			this.joinSql += ` LEFT JOIN exptl ON exptl.Structure_ID = pdbc_structs_flag.entityId`;
		}
		let methods = `('X-RAY DIFFRACTION','ELECTRON MICROSCOPY','SOLID-STATE NMR','SOLUTION NMR','NEUTRON DIFFRACTION','ELECTRON CRYSTALLOGRAPHY','POWDER DIFFRACTION','FIBER DIFFRACTION','SOLUTION SCATTERING','EPR','FLUORESCENCE TRANSFER','INFRARED SPECTROSCOPY','THEORETICAL MODEL')`;
		return `SELECT COUNT(distinct pdbc_structs_flag.entityId) as count,exptl.method FROM pdbc_structs_flag ${this.joinSql} ${this.whereSql} ${this.whereSql == '' ? 'where' : 'AND'
			} exptl.method in ${methods}  GROUP BY exptl.method`;
	}

	/**
	 * build Refinements Scientific Name of Source Organism count
	 */
	buildRefinementsScientificNameOfSourceOrganismCount() {
		if (this.joinSql.indexOf('entity_src_gen.Structure_ID') == -1) {
			this.joinSql += ` LEFT JOIN entity_src_gen ON entity_src_gen.Structure_ID = pdbc_structs_flag.entityId`;
		}
		return `SELECT COUNT(distinct pdbc_structs_flag.entityId) as count,entity_src_gen.pdbx_gene_src_scientific_name FROM pdbc_structs_flag ${this.joinSql} ${this.whereSql} GROUP BY entity_src_gen.pdbx_gene_src_scientific_name`;
	}

	/**
	 * 将whereSql 应用到left join
	 */
	applyWhereSqlToJoinSql(operator: "AND" | "OR", whereSql: string) {
		let tableName = whereSql.split(' ')[0].split('.')[0];
		if (tableName == 'pdbc_structs_flag') {
			return;
		}

		const joinPattern = `LEFT JOIN ${tableName} ON ${tableName}.Structure_ID = pdbc_structs_flag.entityId`;
		const andPattern = `AND \\(([^)]*)\\)`;

		if (this.joinSql.includes(joinPattern) && new RegExp(`${joinPattern} ${andPattern}`).test(this.joinSql)) {
			const reg = new RegExp(`(${joinPattern} ${andPattern})`);
			this.joinSql = this.joinSql.replace(reg, (match, p1, p2) => {
				return `${p1} AND (${p2} ${operator} ${whereSql})`; // 添加 AND 以确保逻辑连接
			});
		} else if (this.joinSql.includes(joinPattern)) {
			this.joinSql = this.joinSql.replace(joinPattern, `${joinPattern} AND (${whereSql})`);
		}
	}
}

