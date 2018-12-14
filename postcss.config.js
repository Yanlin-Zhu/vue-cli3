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
        return new Promise((resolve, reject) => {
          if (!/img\/(\S+)\/\S+\.png$/.test(image.url)) {
            return reject(`The image ${image.url} is incorrect.`)
          }
          return resolve(true)
        })
      },
      groupBy: function (image) {
        return new Promise((resolve, reject) => {
          let reg = ['christmas']
          let groupName = ''
          reg.forEach(item => {
            groupName = item
            if (groupName) {
              return resolve(groupName)
            }
          })
          return reject(`The image ${image.url} is incorrect.`)
        })
      }
    },
    'postcss-px2rem': {
      'remUnit': 37.5
    }
  }
}
