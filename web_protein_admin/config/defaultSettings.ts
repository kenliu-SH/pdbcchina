import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: true,
  title: '国家蛋白质科学中心|上海',
  pwa: false,
  logo: './logo.png',
  iconfontUrl: '',
};

export default Settings;
