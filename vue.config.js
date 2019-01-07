'use strict'

module.exports = {
  baseUrl: '/',
  outputDir: process.env.outputDir,
  devServer: {
    port: 8801,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo': {
        target: 'http://10.31.153.170:8080/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else if (process.env.NODE_ENV === 'test') {
      // 为开发环境修改配置...
    } else {

    }
  }
}
