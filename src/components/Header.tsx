import  "./drag.css";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'
import template1 from "../assets/images/template1.png";
import template2 from "../assets/images/template2.png";
import template3 from "../assets/images/template3.png";
function Header(props:any) {
    const history=useNavigate()
    function editResum(props:any) {
        history('/design')
    }
  return (
    <>
      <div className="h-20 bg-white-400 fixed top-0 w-full flex justify-center items-center">
        化简
      </div>
      <div className="headbg h-full w-full flex justify-center items-center flex-col">
        <h1>一款开源的、免费的简历设计神器</h1>
        <p>快速设计、简历主题切换、支持一键导出PDF JSON数据等</p>
        <Button type="primary" shape="round" className="">
          免费制作
        </Button>
      </div>
      <div className=" h-full w-full flex justify-center items-center flex-col">
        <h1>免费模板+用心设计</h1>
        <p>用心设计每一套模板，适合各行各业从业者</p>
        <div className="flex">
          <img onClick={editResum} className="w-80  h40" src={template1} alt="" />
          <img onClick={editResum} className="w-80  h40" src={template2} alt="" />
          <img onClick={editResum} className="w-80  h40" src={template3} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
