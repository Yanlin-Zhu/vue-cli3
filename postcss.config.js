module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px2rem': {
      'remUnit': 37.5
    },
    'postcss-sprites': {
      stylesheetPath: './src/style/',
      // 生成雪碧图的相对路径
      spritePath: './dist/sprite/sprite.png'
      // spritePath: './src/assets/img/bankcard/'

      // 视网膜图
      // retina: true
    }
  }
}
