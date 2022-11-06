import api from './index'
interface Login {
  username: string
  password: string
  captcha: string
}
interface captcha {
  code: string
  data: string
}
export class User {
  static login(data: Login) {
    return api.request.post('/user/login', data)
  }

  static getCaptcha() {
    return api.request.get<captcha>('user/getCaptcha')
  }
}
