const env = process.env.UMI_SERVER || 'test';

//网页端
const BASE_URL: any = {
  dev: 'https://www.pdbc.org.cn/api/web/v1/', //测试服为内网，目前只能用线上链接调试（不会修改数据）
  test: 'http://10.202.108.6:10608/web/v1/', //测试服务器
  prod: 'https://www.pdbc.org.cn/api/web/v1/', //生产服务器
};

export default {
  SERVER_HOME: BASE_URL[env],
  TOKEN: 'protein-token',
};
