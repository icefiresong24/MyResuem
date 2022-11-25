import type { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userLogin.css'
import { User } from '@/api/api'
const UserLogin: FC<any> = () => {
  const navicate = useNavigate()
  const [userinfo, setUserinfo] = useState({
    username: '',
    password: '',
    captcha: '',
  })
  async function login() {
    const res = await User.login(userinfo)
    if (res.success)

      navicate('/')
  }
  return (
    <div className="container">
        <div className="login-wrapper">
            <p className="header">登录</p>
            <div className="form-wrapper">
          <input type="text" name="username" placeholder="username" className="input-item" value={userinfo.username} onChange={(e) => {
            setUserinfo({ ...userinfo, username: e.target.value })
          } } />
          <input type="password" name="password" value={userinfo.password} onChange={(e) => {
            setUserinfo({ ...userinfo, password: e.target.value })
          }} placeholder="password" className="input-item"/>
                <div className="btn cursor-pointer" onClick={login}>登录</div>
            </div>
            <div className="msg">
                <Link to="/register" >注册账号</Link>
            </div>
        </div>
    </div>
  )
}

export default UserLogin
