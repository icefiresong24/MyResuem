import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'
interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}

// 自定义传入的参数
// interface RequestConfig extends AxiosRequestConfig {
//   interceptors?: RequestInterceptors
// }
interface ResponceData {
  data: any
  success: boolean
  message: string
}
interface restype<T> {
  data: T
  success: boolean
  message: string
}
class Request {
  instance: AxiosInstance

  constructor(
    config: AxiosRequestConfig,
    intercetorsObj?: RequestInterceptors,
  ) {
    this.instance = axios.create(config)
    // 设置请求携带cookie
    axios.defaults.withCredentials = true
    this.instance.interceptors.request.use(
      (res) => {
        return res
      },
      error => error,
    )
    this.instance.interceptors.response.use(
      intercetorsObj?.responseInterceptors,
      intercetorsObj?.responseInterceptorsCatch,
    )
    this.instance.interceptors.request.use(
      intercetorsObj?.requestInterceptors,
      intercetorsObj?.requestInterceptorsCatch,
    )
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get<T = ResponceData>(url: string, config?: AxiosRequestConfig): Promise<restype<T>> {
    return this.instance.get(url, config)
  }

  post<T = ResponceData>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.post(url, data, config)
  }

  delete<T = ResponceData>(
    url: string,
    config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config)
  }
}

const interceptors_response = {
  responseInterceptors: (response: AxiosResponse) => {
    const { success, message: msg, data } = response.data
    if (!success) {
      message.warn(
        msg,
      )
    }
    // if (code == 401) {
    //   localStorage.clear()
    //   console.log('clear')

    //   return
    // }
    // if (code == 500) {
    //   message.error(msg)
    //   return data
    // }
    return data
  },
  responseInterceptorsCatch: (error: AxiosError) => {
    console.log(error.response!.request.responseURL, '网络错误')
  },
  requestInterceptors: (request: AxiosRequestConfig) => {
    if (localStorage.getItem('Authorization')) {
      request.headers!.Authorization = localStorage.getItem(
        'Authorization',
      ) as any
    }
    return request
  },
}
const { VITE_APP_BASE_URL } = import.meta.env
console.log('VITE_APP_BASE_URL: ', VITE_APP_BASE_URL)

const request = new Request(
  {
    baseURL: VITE_APP_BASE_URL,
    timeout: 100000,
  },
  interceptors_response,
)

export default { request }
