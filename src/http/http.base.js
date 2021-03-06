import fetch from './axios.config'

const DEFAULT_CONFIG = {
  isAutoMsg: true,
  // 自动loading
  isLoading: true,
  hasUid: true,
  // isApiHost  是否添加前缀 默认是true
  isApiHost: true,
  // 如果参数是空值是不传
  isRemoveField: false,
  // 和 isRemoveField 一起使用
  removeField: []
}

// const TOKEN = '6qvlkh6khz'

const POST_HEADER = {
  headers: {
    'content-type': 'application/json'
  }
}

/**
 * get 提交
 * @param {String} url 请求的url
 * @param {any} params  请求的参数
 * @param {Boolean} isApiHost  是否添加前缀 默认是true
 * @param {Obejct} config  请求配置
 * @returns Promise
 */
export function get (url, params = {}, config = {}) {
  let opts = { ...DEFAULT_CONFIG, ...config }
  opts.params = getParams(params, opts)
  console.log(fetch.get(getUrl(url, opts.isApiHost), opts))
  return fetch.get(getUrl(url, opts.isApiHost), opts)
}

/**
 *
 * post 提交
 * @param {String} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {Boolean} isApiHost 是否添加前缀 默认是true
 * @param {any} isApiHost 请求配置
 * @returns Promise
 *
 * @memberOf HttpBase
 */
export function post (url, params = {}, config = {}) {
  let opts = { ...DEFAULT_CONFIG, ...POST_HEADER, ...config }
  return fetch.post(getUrl(url, opts.isApiHost), getParams(params, opts), opts)
}

/**
 *
 * put 提交
 * @param {String} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {Boolean} isApiHost 是否添加前缀 默认是true
 * @param {any} isApiHost 请求配置
 * @returns Promise
 *
 * @memberOf HttpBase
 */
export function put (url, params = {}, config = {}) {
  let opts = { ...DEFAULT_CONFIG, ...POST_HEADER, ...config }
  return fetch.put(getUrl(url, opts.isApiHost), getParams(params, opts), opts)
}

/**
 *
 * delete 提交
 * @param {String} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {Boolean} isApiHost 是否添加前缀 默认是true
 * @param {any} isApiHost 请求配置
 * @returns Promise
 *
 * @memberOf HttpBase
 */
export function Delete (url, params = {}, config = {}) {
  let opts = { ...DEFAULT_CONFIG, ...POST_HEADER, ...config }
  return fetch.delete(getUrl(url, opts.isApiHost), getParams(params, opts), opts)
}

/**
 *
 * 上传
 * @export
 * @param {any} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} [config={}] 配置
 * @returns Promise
 */
export function upload (url, params = {}, config = {}) {
  let opts = { ...DEFAULT_CONFIG, ...POST_HEADER, ...config }
  let form = new FormData()
  Object.keys(params).forEach(key => {
    form.append(key, params[key])
  })
  return fetch.post(getUrl(url, opts.isApiHost), form, opts)
}

/**
 *
 * @param {any} url
 * @returns
 *
 */
function getUrl (url) {
  let arr = []

  if (!url.startsWith('/')) {
    arr.push('/')
  }

  arr.push(url)
  return arr.join('')
}

/**
 *
 * 处理参数 移除值是 空的 和加上一些用户信息等操作
 * @param {any} params 传入参数
 * @param {any} config 配置
 * @returns 返回新的参数
 */
function getParams (params, config) {
  // 用户相关
  if (!config.isRemoveField) {
    return params
  }
  return removeEmptyField(params, config.removeField)
}

/**
 *
 * 移除提交请求中 列为空 null undefined 的值
 * @param {any} [params={}] 传入的参数
 * @param {any} [removeField=[]] 需要移除的列
 */
function removeEmptyField (params = {}, removeField = []) {
  let copyParams = JSON.parse(JSON.stringify(params))
  let arrField = removeField
  if (removeField.length === 0) {
    arrField = Object.keys(params)
  }
  arrField.forEach(key => {
    let val = copyParams[key]
    if (val === '' || val === undefined || val === null) {
      delete copyParams[key]
    }
  })
  return copyParams
}

export const removeField = removeEmptyField
