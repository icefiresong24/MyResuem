import type { FC } from 'react'
import { Link } from 'react-router-dom'
import './userLogin.css'
import { User } from '@/api/api'
const UserLogin: FC<any> = () => {
  const [userinfo, setUserinfo] = useState({
    username: '',
    password: '',
    captcha: '',
  })
  async function login() {
    const res = await User.login(userinfo)
  }
  return (
    <div className="container">
        <div className="login-wrapper">
            <p className="header">登录</p>
            <div className="form-wrapper">
          <input type="text" name="username" placeholder="username" className="input-item" value={userinfo.username} onChange={(e) => {
            setUserinfo({ ...userinfo, username: e.target.value })
          } } />
                <input type="password" name="password" placeholder="password" className="input-item"/>
                <div className="btn" onClick={login}>登录</div>
            </div>
            <div className="msg">
                <Link to="/register" >注册账号</Link>
            </div>
        </div>
    </div>
  )
}

export default UserLogin
