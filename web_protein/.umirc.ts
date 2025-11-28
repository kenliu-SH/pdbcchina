import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  title: '国家蛋白质科学中心|上海',
  publicPath: './',
  history: { type: 'hash' },
  routes,
  antd: false,
  dva: {
    hmr: true,
  },
  locale: {
    default: 'en-US',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  fastRefresh: {},
  define: {
    'process.env': {
      UMI_SERVER: process.env.UMI_SERVER,
    }, // 修改process.env对象数据
  },
  favicon: './favicon.ico',
  theme: {
    'root-entry-name': 'variable',
  },
  headScripts: [
    { src: './js/molstar.js', type: 'text/javascript' },
    { src: './js/ngl.js', type: 'text/javascript' },
    { src: './js/rcsb-saguaro.js', type: 'text/javascript' },
    // { src: './js/initwb.js', type: 'text/javascript' },
    {
      src: 'https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js',
      // src: './js/RDKit_minimal.js',
      type: 'text/javascript',
    },
    {
      src: '//rf.revolvermaps.com/0/0/8.js?i=54rphwy0qcm&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33&amp;bv=5',
      type: 'text/javascript',
    },
  ],
});
