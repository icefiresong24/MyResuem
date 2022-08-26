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
  function exportPDF() {
    const pdf = document.getElementById("pdf");
    downloadPDF(pdf!, "jianli", false, () => {});
  }
  let [select, setSelect] = useState<string>("");
  return (
    <>
      <div className="flex items-center bg-[#202329] text-white justify-between h-10">
        <div>化简</div>
        <div className="flex">
          <div>我的简历</div>
        </div>
        <div>登录</div>
      </div>
      <div className=" bg flex justify-center bg-[#353944] text-light-100  w-full h-[calc(100%-2.5rem)]">
        {/* <section className=" <sm:hidden">
          <div className="h-10">模块选择</div>
          <Module
          // value={items.value}
          // onChange={updateArray}
          // onHidden={hiddenModule}
          ></Module>
        </section> */}
        <section className="mr-10 p-4 w-158 <sm:w-full <lg:w-149 bg-gray-400">
          <Resuem onSelect={setSelect}></Resuem>
        </section>
        <section className="w-140 bg-gray-500 p-4 <lg:hidden">
          <Setting current={select} />
        </section>
        <section className="">
          <Button type="primary" shape="default" className="mt-4 block">
            跟换模板
          </Button>
          <Button
            type="primary"
            shape="default"
            className="mt-4 block"
            onClick={exportPDF}
          >
            PDF下载
          </Button>
        </section>
      </div>
    </>
  );
}

export default Design;
