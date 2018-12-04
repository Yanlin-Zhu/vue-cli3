module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/'
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'dist'
  // webpack-dev-server 相关配置
  // devServer: {
  //   port: 8888
  // }
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //   } else if (process.env.NODE_ENV === 'test') {
  //     // 为测试环境修改配置...
  //     return {
  //       baseUrl: '/'
  //     }
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // }
}
