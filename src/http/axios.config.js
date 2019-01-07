import Vue from 'vue'
import axios from 'axios'
// import casConfig from '@/config/cas.config.js'

/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */

const service = axios.create({
  timeout: 20000, // 请求超时时间
  withCredentials: true // 跨域
})

// loading 组
let ARR_LOADING = []
let IS_LOADING = false
let LOADING_INSTANCE = null

service.interceptors.request.use(
  config => {
    if (config.isLoading) {
      ARR_LOADING.push(config.url)
      if (!IS_LOADING && !LOADING_INSTANCE) {
        IS_LOADING = true
        LOADING_INSTANCE = Vue.$loading({
          text: '努力加载中...'
        })
      }
    }

    config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    console.log(response)
    let { data, config } = response
    // const errorMsg = response.data.errMsg || response.data.err_msg
    if (config.isLoading) {
      let index = ARR_LOADING.indexOf(config.url)
      ARR_LOADING.splice(index, 1)
      if (ARR_LOADING.length === 0 && LOADING_INSTANCE) {
        LOADING_INSTANCE.close()
        IS_LOADING = false
        LOADING_INSTANCE = null
      }
    }
    // 如果不是status 返回值
    // if (Vue.Utils.isUndefined(status)) {
    return data
    // }

    // if (Number(status) !== 0) {
    //   if (config.isAutoMsg) {
    // Vue.$notify.error({
    //   title: '提示',
    //   message: errorMsg,
    //   duration: 5000
    // })
    //   }
    //   return Promise.reject(response.data)
    // } else {
    //   return response.data
    // }
  },
  error => {
    ARR_LOADING = []
    if (LOADING_INSTANCE) {
      LOADING_INSTANCE.close()
      LOADING_INSTANCE = null
    }
    IS_LOADING = false
    let response = error.response
    if (response === undefined) {
      // Vue.$notify({
      //   title: '提示',
      //   message: '网络异常, 请稍后重试',
      //   duration: 5000
      // })
      return
    }

    let { status, data } = response
    const errMsg = data.err_msg || data.errMsg || data.error_msg

    if (status === 401) {
      // const urlPrefix = `${casConfig[process.env.TYPE].login}?authn_method=captcha&service=`
      // let current = `${window.location.protocol}//${window.location.hostname}`
      // if (process.env.NODE_TYPE !== 'production' && window.location.port !== '') {
      //   current = `${current}:${window.location.port}`
      // }

      // current += '/'
      // window.location = urlPrefix + encodeURIComponent(current)
    }

    if (errMsg !== undefined) {
      // Vue.$notify.error({
      //   title: '操作结果',
      //   message: errMsg
      // })
    }
    return Promise.reject(error)
  }
)

export default service
