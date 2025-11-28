/*
 * @Author: your name
 * @Date: 2021-07-09 15:55:27
 * @LastEditTime: 2021-09-01 16:05:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lz1_web_protein_20210607\server\src\common\constant.ts
 */
import { resolve } from 'path';

import { HttpStatusConstant } from './interface';

const srcPath = resolve(__dirname, '../');
const rootPath = resolve(__dirname, '../../');

export const pathConstant = {
	// root
	// ----------------------------
	root: rootPath,
	temp: `${rootPath}/temp`,
	logs: `${rootPath}/logs`,
	// src
	// ----------------------------
	src: srcPath,
	core: `${srcPath}/core`,
	common: `${srcPath}/common`,
	library: `${srcPath}/library`,
	modules: `${srcPath}/modules`,
	model: `${srcPath}/model`,
};

export const envConstant = {
	env: 'NODE_ENV',
	port: 'NODE_PORT',
	appName: 'NODE_APP_NAME',
	homeName: 'HOME_NAME',
	role: 'SERVER_ROLE',
};

export const secretConstant = {
	jwt: 'NODE_USER_CENTER_JWT',
	sha256: 'NODE_USER_CENTER_SHA256',
};

export const headersConstant = {
	requestId: 'x-request-id',
	requestToken: 'x-request-token',
	requestUserId: 'x-request-user-id',
};

export const httpStatusConstant: HttpStatusConstant = {
	language: 'zh',
	status: new Map([
		// The http base status
		// ----------------------------------------------------------------------------------------
		[200, { code: 0, errorCode: 200, zh: '请求成功', en: 'Success' }],
		[400, { code: 400, errorCode: 400, zh: '请求有误', en: 'BadRequest' }],
		[401, { code: 401, errorCode: 401, zh: '验证失败', en: 'Forbidden' }],
		[403, { code: 403, errorCode: 403, zh: '无权限访问', en: 'Unauthorized' }],
		[404, { code: 404, errorCode: 404, zh: '未找到访问资源', en: 'NotFound' }],
		[408, { code: 408, errorCode: 408, zh: '请求超时', en: 'Timeout' }],
		[
			500,
			{
				code: 500,
				errorCode: 500,
				zh: '服务端异常',
				en: 'InternalServerError',
			},
		],
		[501, { code: 501, errorCode: 501, zh: '服务端执行失败', en: 'NotImplemented' }],
		[502, { code: 502, errorCode: 502, zh: '服务端网关访问异常', en: 'BadGateway' }],
		[
			503,
			{
				code: 503,
				errorCode: 503,
				zh: '服务端更新中，暂不可用',
				en: 'Service Unavailable',
			},
		],
		// The custom status
		// ----------------------------------------------------------------------------------------
		[
			400001,
			{
				code: 400,
				errorCode: 400001,
				zh: '参数有误',
				en: 'Parameter is wrong',
			},
		],
		[400002, { code: 400, errorCode: 400002, zh: '密码有误', en: 'Password is wrong' }],
		[
			400003,
			{
				code: 400,
				errorCode: 400003,
				zh: '账户不存在',
				en: 'Account does not exist',
			},
		],
		[
			400004,
			{
				code: 401,
				errorCode: 400004,
				zh: 'token 为空',
				en: 'Token cannot be empty',
			},
		],
		[
			400005,
			{
				code: 401,
				errorCode: 400005,
				zh: '平台不一致',
				en: 'Platform inconsistency',
			},
		],
		[
			400006,
			{
				code: 401,
				errorCode: 400006,
				zh: '用户不存在',
				en: 'User does not exist',
			},
		],
		[
			400007,
			{
				code: 400,
				errorCode: 400007,
				zh: '条目不存在',
				en: 'User does not exist',
			},
		],
		[
			400008,
			{
				code: 400,
				errorCode: 400008,
				zh: '找不到对应资源',
				en: '找不到对应资源',
			},
		],
		[
			400009,
			{
				code: 400,
				errorCode: 400009,
				zh: '查询数据不存在',
				en: '找不到对应资源',
			},
		],
	]),
};

export const WEB_PREFIX = 'web/v1';
export const ADMIN_PREFIX = 'admin/v1';
export const OPEN_PREFIX = 'open/v1';

export const JWT_CONSTANTS = {
	secret: 'opqwooqoedjfjaxncnalsmcaadsadxaccvadwax',
	platform: {
		web: 'web',
		admin: 'admin',
	},
	accessTokenExpiresIn: '233 days',
};

export const AUTHORIZE_KEY_METADATA = 'aaaa';

// 实验方法列表
export const ExperimentalMethod = [
	'ELECTRON CRYSTALLOGRAPHY',
	'ELECTRON MICROSCOPY',
	'FIBER DIFFRACTION',
	'NEUTRON DIFFRACTION',
	'POWDER DIFFRACTION',
	'SOLID-STATE NMR',
	'SOLUTION NMR',
	'SOLUTION SCATTERING',
	'X-RAY DIFFRACTION',
	'EPR',
	'FLUORESCENCE TRANSFER',
	'INFRARED SPECTROSCOPY',
	'THEORETICAL MODEL',
];

// 角色权限管理
export enum POWER_CONTNET {
	theme = '主题管理',
	account = '账号管理',
	user = '用户管理',
	role = '角色管理',
}

// 链接类型
export enum LINK_TYPE {
	interior = '内部链接',
	external = '外部链接',
}

export enum STATUS_TYPE {
	showAll = '全部显示',
	showTitel = '仅标题',
	showImg = '仅图片',
}

export enum THEME {
	'红' = 'red_theme',
	'绿' = 'green_theme',
	'蓝' = 'blue_theme',
	'黄' = 'yellow_theme',
	'黑白' = 'black_theme',
}

export enum OPTIONS_TYPE {
	navBar = 'navBar',
	menuBar = 'menuBar',
}

export enum MENU_TYPE {
	desposit = 'desposit',
	search = 'search',
	visualize = 'visualize',
	download = 'download',
	documentation = 'documentation',
}

export enum NODE_LABEL {
	fullText = 'full_text',
	text = 'text',
	// text_chem
	textChem = 'text_chem',
}

// 订阅规则条件类型
export enum SUBSCRIBE_RULE_CONDITION_TYPE {
	query = 'query',
}
// 订阅规则发送渠道
export enum SUBSCRIBE_RULE_SEND_CHANNEL {
	email = 'email',
	// 微信公众号
	wechat = 'wechat',
	// rss
	rss = 'rss',
	// 站内信
	message = 'message',
}
// 公众号消息模版id
export enum WECHAT_TEMPLATE_ID {
	// 查询规则PDB更新
	queryRulePdbUpdate = 'L-6XfDr2EAx8XoCJL8ujbLG3T2SRWiZsGdR7c3Mk5xw',
}

// 通知类型
export enum NOTIFICATION_TYPE {
	// 订阅规则PDB更新
	subscribeRulePdbUpdate = 'subscribeRulePdbUpdate',
}

// 文件动作
export enum FILE_ACTION {
	// 下载
	down = 'down',
	// 显示
	show = 'show',
}

export enum SystemConfigKey {
	// 首页蛋白质数量描述
	homeProteinCountDesc = 'homeProteinCountDesc',

	homeLogo = 'homeLogo',

	building = 'building',

	footer = 'footer',
}

// WechatScanLog 状态
export enum WechatScanLogStatus {
	// 待扫码
	waitScan = 'waitScan',
	// 已扫码
	scanned = 'scanned',
	// 已过期
	expired = 'expired',
}

// PDB文件格式
export enum PDB_FILE_FORMAT {
	'PDB' = 'PDB',
	'PDBx/mmCIF' = 'PDBx/mmCIF',
	'PDBML' = 'PDBML',
	'PDBML/XML' = 'PDBML/XML',
	'PDBML/XML (Header only)' = 'PDBML/XML (Header only)',
	'Biological Assemblies in PDB' = 'Biological Assemblies in PDB',
	'Biological Assemblies in PDBx/mmCIF' = 'Biological Assemblies in PDBx/mmCIF',
	'Structure Factors' = 'Structure Factors',
	'NMR Restraints' = 'NMR Restraints',
	'Chemical Shifts' = 'Chemical Shifts',
	'NMR Restraints v2' = 'NMR Restraints v2',
}

export const PDB_FILE_TYPE_MAP = {
	FASTA_SEQUENCE: {
		value: 'FASTA Sequence',
		description: 'FASTA sequence',
		path: '/pdb/derived_data',
		suffix: '.txt',
		keywords: ['pdb_seqres'],
		isClick: true,
		display: true,
	},
	COMBINED_NMR_DATA_NEF: {
		value: 'Combined NMR Data (NEF)',
		description: 'Combined NMR data(NEF)',
		path: '/pdb/data/structures/all/nmr_data',
		suffix: '.nef',
	},
	COMBINED_NMR_DATA_NMR_STAR: {
		value: 'Combined NMR Data (NMR-STAR)',
		description: 'Combined NMR data(NMR-STAR)',
		path: '/pdb/data/structures/all/nmr_data',
		suffix: '.str',
	},
	NMR_CHEMICAL_SHIFTS: {
		value: 'NMR Chemical Shifts',
		description: 'NMR chemical shifts',
		path: '/pdb/data/structures/all/nmr_chemical_shifts',
		suffix: '.str',
	},
	NMR_RESTRAINTS_V1: {
		value: 'NMR Restraints V1',
		description: 'NMR restraints V1',
		path: '/pdb/data/structures/all/nmr_restraints',
		suffix: '.mr',
	},
	NMR_RESTRAINTS_V2: {
		value: 'NMR Restraints V2',
		description: 'NMR restraints V2',
		path: '/pdb/data/structures/all/nmr_restraints_v2',
		suffix: '.str',
	},
	BIOLOGICAL_ASSEMBLY_PDB: {
		value: 'Biological assembly PDB',
		description: 'Biological assembly PDB',
		path: '/pdb/data/biounit/coordinates/all',
		suffix: '.pdb',
	},
	BIOLOGICAL_ASSEMBLY_MMCIF: {
		value: 'Biological assembly mmCIF',
		description: 'Biological assembly mmCIF',
		path: '/pdb/data/assemblies/mmCIF/all',
		suffix: '.cif',
	},
	ENTRY_PDB: {
		value: 'Entry PDB',
		description: 'entry PDB',
		path: '/pdb/data/structures/all/pdb',
		suffix: '.ent',
		display: true,
	},
	ENTRY_PDB_BUNDLE: {
		value: 'Entry PDB Bundle',
		description: 'entry PDB bundle',
		path: '/pdb/compatible/pdb_bundle',
		suffix: '.pdb',
	},
	// entry PDBML(all)
	ENTRY_PDBML: {
		value: 'Entry PDBML(all)',
		description: 'entry PDBML(all)',
		path: '/pdb/data/structures/all/XML',
		suffix: '.xml',
	},
	// entry PDBML(no-atom,header only)
	ENTRY_PDBML_NO_ATOM: {
		value: 'Entry PDBML(no-atom,header only)',
		description: 'entry PDBML(no-atom,header only)',
		path: '/pdb/data/structures/all/XML-noatom',
		suffix: '.xml',
	},
	// entry PDBML(ext-atom)
	ENTRY_PDBML_EXT_ATOM: {
		value: 'Entry PDBML(ext-atom)',
		description: 'entry PDBML(ext-atom)',
		path: '/pdb/data/structures/all/XML-extatom',
		suffix: '.xml',
	},
	// entry mmCIF
	ENTRY_MMCIF: {
		value: 'Entry mmCIF',
		description: 'entry mmCIF',
		path: '/pdb/data/structures/divided/mmCIF',
		suffix: '.cif',
		display: true,
	},
	// structure factors
	ENTRY_STRUCTURE_FACTORS: {
		value: 'entry Structure Factors',
		description: 'entry structure factors',
		path: '/pdb/data/structures/all/structure_factors',
		suffix: '.str',
	},
	// validation data mmCIF
	ENTRY_VALIDATION_DATA_MMCIF: {
		value: 'entry Validation Data mmCIF',
		description: 'entry validation data mmCIF',
		path: '/pdb/validation_reports',
		suffix: '.cif',
	},
	// validation report
	ENTRY_VALIDATION_REPORT: {
		value: 'entry Validation Report',
		description: 'entry validation report',
		path: '/pdb/validation_reports',
		suffix: '.pdf',
	},
	// validation report (full)
	ENTRY_VALIDATION_REPORT_FULL: {
		value: 'entry validation report (full)',
		description: 'entry validation report (full)',
		path: '/pdb/validation_reports',
		suffix: '.pdf',
		keywords: ['full'],
	},
	// validation report XML
	ENTRY_VALIDATION_REPORT_XML: {
		value: 'entry validation report XML',
		description: 'entry validation report XML',
		path: '/pdb/validation_reports',
		suffix: '.xml',
	},
	// validation slider image
	ENTRY_VALIDATION_SLIDER_IMAGE: {
		value: 'entry Validation Slider Image',
		description: 'entry validation slider image',
		path: '/pdb/validation_reports',
		suffix: '.png',
	},
	//EM Map
	EM_MAP: {
		isEmdb: true,
		value: 'EM Map',
		description: 'EM Map',
		path: '/structures',
		// 子目录
		subDir: 'map',
		suffix: '.gz',
	},
	// EM Half Maps
	EM_HALF_MAPS: {
		isEmdb: true,
		value: 'EM Half Maps',
		description: 'EM Half Maps',
		path: '/structures',
		// 子目录
		subDir: 'other',
		suffix: '.gz',
		keywords: ['half'],
	},
	// EM Additional Maps
	EM_ADDITIONAL_MAPS: {
		isEmdb: true,
		value: 'EM Additional Maps',
		description: 'EM Additional Maps',
		path: '/structures',
		// 子目录
		subDir: 'other',
		suffix: '.gz',
		keywords: ['additional'],
	},
	// EM Masks
	EM_MASKS: {
		isEmdb: true,
		value: 'EM Masks',
		description: 'EM Masks',
		path: '/structures',
		// 子目录
		subDir: 'masks',
		suffix: '.gz',
		keywords: ['mask'],
	},

	//EM FSC
	EM_FSC: {
		isEmdb: true,
		value: 'EM FSC',
		description: 'EM FSC',
		path: '/structures',
		// 子目录
		subDir: 'fsc',
		suffix: '.gz',
		keywords: ['fsc'],
	},
	// EM Figure
	EM_FIGURE: {
		isEmdb: true,
		value: 'EM Figure',
		description: 'EM Figure',
		path: '/structures',
		// 子目录
		subDir: 'images',
		suffix: '.png',
		keywords: ['emd'],
	},
	// EM Headers
	EM_HEADERS: {
		isEmdb: true,
		value: 'EM Headers',
		description: 'EM Headers',
		path: '/structures',
		// 子目录
		subDir: 'header',
		suffix: '.xml',
		keywords: ['emd'],
	},
};

// PDB文件类型
export enum PDB_FILE_TYPE {
	FASTA_SEQUENCE = 'FASTA Sequence',
	COMBINED_NMR_DATA_NEF = 'Combined NMR Data (NEF)',
	COMBINED_NMR_DATA_NMR_STAR = 'Combined NMR Data (NMR-STAR)',
	NMR_CHEMICAL_SHIFTS = 'NMR Chemical Shifts',
	NMR_RESTRAINTS_V1 = 'NMR Restraints V1',
	NMR_RESTRAINTS_V2 = 'NMR Restraints V2',
	BIOLOGICAL_ASSEMBLY_PDB = 'Biological assembly PDB',
	BIOLOGICAL_ASSEMBLY_MMCIF = 'Biological assembly mmCIF',
	ENTRY_PDB = 'Entry PDB',
	ENTRY_PDB_BUNDLE = 'Entry PDB Bundle',
	ENTRY_PDBML = 'Entry PDBML(all)',
	ENTRY_PDBML_NO_ATOM = 'Entry PDBML(no-atom,header only)',
	ENTRY_PDBML_EXT_ATOM = 'Entry PDBML(ext-atom)',
	ENTRY_MMCIF = 'Entry mmCIF',
	ENTRY_STRUCTURE_FACTORS = 'entry Structure Factors',
	ENTRY_VALIDATION_DATA_MMCIF = 'entry Validation Data mmCIF',
	ENTRY_VALIDATION_REPORT = 'entry Validation Report',
	ENTRY_VALIDATION_REPORT_FULL = 'entry validation report (full)',
	ENTRY_VALIDATION_REPORT_XML = 'entry validation report XML',
	ENTRY_VALIDATION_SLIDER_IMAGE = 'entry Validation Slider Image',
}

// PDB 状态
export enum PDB_STATUS {
	// 已发布
	RELEASED = 'released',
	// unreleased
	UNRELEASED = 'unreleased',
	// 已删除
	DELETED = 'deleted',
	// 待发布
	TO_BE_RELEASED = 'to_be_released',
}
