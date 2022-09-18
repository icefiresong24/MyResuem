import Module from "./Module";
import { Button } from "antd";
import Resuem from "./section/Resuem";
import { useState, useRef } from "react";
import data from "../store/data";
import { Section, Modules } from "./type";
import { connect } from "react-redux";
import downloadPDF from "../util/html2pdf";
import Setting from "./setting/Setting";
import "./desing.scss";
function Design(props: any) {
  
  let [select, setSelect] = useState<string>("");
  function goGithub() {
    window.open ("https://github.com/icefiresong24/MyResuem");
  }
  return (
    <>
      <div className="flex items-center bg-[#202329] text-white justify-between h-10">
        <div className="cursor-pointer" onClick={goGithub}>
          github
        </div>
        <div className="flex">
          <div>前端开发工程师</div>
        </div>
        <div>登录</div>
      </div>
      <div className=" bg flex justify-center bg-[#353944] text-light-100  w-full h-[calc(100%-2.5rem)]">
        <section className=" <sm:hidden mr-10">
          <div className="h-10">模块选择</div>
          <Module
            
          // value={items.value}
          // onChange={updateArray}
          // onHidden={hiddenModule}
          ></Module>
        </section>
        <section className="mr-10  w-158 <sm:w-full <lg:w-149 bg-gray-400">
          <Resuem current={select} onSelect={setSelect}></Resuem>
        </section>
        <section className="w-140 bg-gray-500 p-4 <lg:hidden">
          <Setting current={select} onSelect={setSelect} />
        </section>
      </div>
    </>
  );
}

export default Design;