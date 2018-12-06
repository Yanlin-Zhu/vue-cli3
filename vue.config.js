'use strict'
// import px2rem from 'postcss-plugin-px2rem'
const path = require('path')

module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '$style': path.join(__dirname, 'src/style')
  //     }
  //   }
  // }
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@style', path.join(__dirname, 'src/style'))
    // config.postcss.push(px2rem({
    //   // The root element font size. Default is 100.
    //   rootValue: 75
    // }))
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/'
  // 基本路径
  // 输出文件目录
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
