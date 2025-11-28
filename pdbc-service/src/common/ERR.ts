const ERR = {
	/*------ 通用错误码 1000~9999 ------*/
	UNDEFINED: { error: 1000, message: '未定义异常' },
	INVALID_PARAMS: { error: 1001, message: '参数异常' },
	API_ERROR: { error: 1002, message: '接口异常' },
	AUTH_FAILED: { error: 1003, message: '无效验证' },
	USER_NOT_EXISTS: { error: 1004, message: '账号不存在' },
	USER_ROLE_NO_PRIVILEGE: { error: 1005, message: '操作权限不足' },
	TODO: { error: 1006, message: '功能开发中' },

	SQL_DUPLICATION: { error: 3004, message: '数据已经存在' },
	SQL_INCOMPLETE_PARAMS: { error: 3005, message: '错误，参数不全' },
	SQL_INSERT_FAILED: { error: 3006, message: '插入数据失败' },
	SQL_DUP_NAME_OR_PHONE: { error: 3007, message: '用户名或手机号重复' },
	SQL_DUP_NAME_OR_PASSWORD: { error: 3008, message: '用户名或密码错误' },

	USER_EXISTS: { error: 1005, message: '账号已经存在' },
	INVALID_PASSWORD: { error: 1006, message: '密码错误' },
	AUTH_LOGIN: { error: 1009, message: '请先授权登录' },
	EMAIL_ALREADY_EXISTS: { error: 1010, message: '邮箱已被注册' },
	EMAIL_NEEDS_VERIFICATION: { error: 1011, message: '邮箱未验证' },
	INVALID_AUTH_CODE: { error: 1012, message: '无效或过期的验证令牌' },

	// RESTFUL
	RESTFUL_GET_ID: { error: 2001, message: '查询数据不存在' },
	RESTFUL_DELETE_ID: { error: 2002, message: '删除数据不存在' },
	RESTFUL_UPDATE_ID: { error: 2003, message: '更新数据不存在' },
	RESTFUL_DUPLICATION: { error: 2004, message: '数据已经存在' },
	RESTFUL_TODO: { error: 2005, message: '该接口未实现' },
	RESTFUL_HAS_DELETED: { error: 2006, message: '该数据已被删除' },
	RESTFUL_GET_AUTH: { error: 2007, message: '该权限不存在' },
	RESTFUL_SUPER_ADMIN: { error: 2008, message: '超级管理员只能有一个' },
	/*------ 业务错误码 10000~19999 ------*/
	//入参错误
	SMS_INVALID: { error: 10001, message: '验证码不正确' },
	NO_MORE_TIMES: { error: 10002, message: '抽奖次数不足' },
};

export default ERR;
