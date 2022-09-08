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
  let [page, setPage] = useState(1);

  useEffect(() => {
    //ResizeObserver监听简历内容高度变化，改变简历对应生成PDF高度
    const dom = document.getElementById("pdf");
    let observer = new ResizeObserver((entries: ResizeObserverEntry[]) =>
      entries.forEach((item) => {
        let height = item.contentRect.height;
        console.log(height);
        setPage(Math.ceil(height / 841));

        dom!.style.height = Math.ceil(height / 841) * 841 + "px";
      })
    );
    observer.observe(dom!);
  });
  //点击改变当前设置模块名称
  let [select, setSelect] = useState<string>("");
  //跳转GitHub
  function goGithub() {
    window.open("https://github.com/icefiresong24/MyResuem");
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
      <div className=" bg flex justify-around bg-[#353944] text-light-100  w-full h-[calc(100%-2.5rem)]">
        <section className=" <sm:hidden mr-10">
          <div className="h-10">模块选择</div>
          <Module></Module>
        </section>
        <section className="bg-gray-400 h-full overflow-auto <sm:w-full <lg:w-149 ">
          <Resuem page={page} current={select} onSelect={setSelect}></Resuem>
        </section>
        <section className="w-140  <lg:hidden">
          <Setting current={select} onSelect={setSelect} />
        </section>
      </div>
    </>
  );
}

export default Design;
