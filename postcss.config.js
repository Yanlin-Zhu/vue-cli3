const path = require('path')
console.log(path.resolve(__dirname, './src/'), '>>>>>>>>>>>>>>>>>')
module.exports = {
  'plugins': {
    autoprefixer: {},
    'postcss-sprites': {
    // stylesheetPath: './src/style/',
    // 生成雪碧图的相对路径
      spritePath: './src/assets/sprites/',

      // 视网膜图支持retina，可以实现合并不同比例图片
      retina: true,
      // Prints the plugin output to the console.
      verbose: true,
      // 非 img 子目录下面的 png 不合
      filterBy: function (image) {
        // Allow only png files
        if (!/\.png$/.test(image.url)) {
          return Promise.reject()
        }

        return Promise.resolve()
      }
    },
    'postcss-px2rem': {
      'remUnit': 37.5
    }
  }
}
