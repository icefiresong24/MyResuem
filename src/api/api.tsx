import api from './index'
interface Login {
  username: string
  password: string
  captcha?: string
}
interface captcha {
  code: string
  data: string
}
export class User {
  /** 登录
   * @param username 用户名
   * @parma password 密码
   * @param captcha 验证码
  */
  static login(data: Login) {
    return api.request.post('/user/login', data)
  }

  /** 注册用户
   * @param username 用户名
   * @parma password 密码
  */
  static register(data: Login) {
    return api.request.post('/user/register', data)
  }

  static getCaptcha() {
    return api.request.get<captcha>('user/getCaptcha')
  }
}
