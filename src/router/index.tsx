import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Design from '../views/Design'
import Error from '../components/Error'
import UserLogin from '@/components/login/userLogin'
import UserRegister from '@/components/login/userRegister'
function Router() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/login" element={<UserLogin/>}></Route>
        <Route path="/register" element={<UserRegister/>}></Route>
        <Route path="/" element={<Design />}></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
