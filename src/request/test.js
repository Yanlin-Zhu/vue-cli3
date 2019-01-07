import { get } from '../http/http.base'

export const getRequest = (params = {}) => {
  return get('/api/', params)
}
