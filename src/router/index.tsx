import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../components/Drag'
import Design from '../components/Design'
import Error from '../components/Error'
function Router(props:any) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Design />}></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;