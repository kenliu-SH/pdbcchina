import { addAliases } from 'module-alias';
import axiosRetry from 'axios-retry';
/**
 * The initializer module references the alias
 */
import { pathConstant } from './common';

addAliases({
	'@core': pathConstant.core,
	'@common': pathConstant.common,
	'@library': pathConstant.library,
	'@modules': pathConstant.modules,
	'@model': pathConstant.model,
});

/**
 * After initializer module references alias, Creating a Server Application
 */
import { ServerManager } from './core';
import axios from 'axios';
/**
 * 请求重试
 */
axiosRetry(axios, {
	retries: 3,
	retryCondition: err => axiosRetry.isNetworkOrIdempotentRequestError(err) || err.response.status === 404,
	shouldResetTimeout: true,
	retryDelay: retryCount => {
		console.warn(`request retry count: ${retryCount}`);
		return retryCount * 1000;
	},
});
new ServerManager().create();
