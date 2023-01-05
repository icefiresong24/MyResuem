import type { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userLogin.css'
import { Input } from 'antd'
import { User } from '@/api/api'
const UserLogin: FC = () => {
  const [codeUrl, setCodeUrl] = useState('')
  async function getCaptcha() {
    const res = await User.getCaptcha()
    setCodeUrl(res.data.data)
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState('')
  const navicate = useNavigate()
  async function registerUser() {
    const res = await User.register({
      username,
      password,
      captcha,
    })
    if (res.success)
      navicate('/login')
  }
  useEffect(() => {
    getCaptcha()
  }, [])
  return (

    <div className="login">
      <div className="login-wrapper">
        <p className="header">注册</p>
        <div className="form-wrapper">
          <input type="text" name="username" placeholder="username" value={username} onChange={(e) => {
            setUsername(e.target.value)
          }} className="input-item" />
          <input type="password" name="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder="password" className="input-item" />

          <div><Input placeholder="请输入验证码" onChange={(e) => {
            setCaptcha(e.target.value)
          }}/>
            <div onClick={getCaptcha} dangerouslySetInnerHTML={{ __html: codeUrl }}></div>
          </div>
          <div className="btn" onClick={registerUser}>注册</div>
        </div>
        <div className="msg">
          <Link to="/login" >已有账号，去登录</Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
