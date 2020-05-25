
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  outputPath: 'docs',
  targets: {
    ie: 11,
  },
  history: 'hash',
  hash: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'fh-helper',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  publicPath:'./'
}
