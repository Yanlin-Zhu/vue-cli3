let baseUrl = '' // 这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://localhost:8080/' // 这里是本地的请求url
    break
  case 'test':
    baseUrl = 'http://www.cnblogs.com/XHappyness/' // 这里是测试环境中的url
    break
  case 'production':
    baseUrl = 'https://www.cnblogs.com/XHappyness/p/7686267.html' // 生产环境url
    break
}

export default baseUrl
