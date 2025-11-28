const env = process.env.UMI_SERVER || 'dev';

//管理后台
const BASE_URL = {
  dev: 'http://www.pdbc.org.cn:10608/admin/v1/', //测试服为内网，目前只能用线上链接调试（不会修改数据）
  test: 'http://10.202.108.6:10608/admin/v1/', //测试服务器
  prod: 'http://www.pdbc.org.cn:10608/admin/v1/', //生产服务器
};

export default {
  SERVER_HOME: BASE_URL[env],
};
