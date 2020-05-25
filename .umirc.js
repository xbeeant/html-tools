
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  outputPath: 'docs',
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
      dll: true,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  publicPath:'./'
}
