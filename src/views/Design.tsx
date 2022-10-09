import Module from "./Module";
import Resuem from "./Resuem";
import { useState, useRef } from "react";
import Setting from "./Setting";
import "./desing.scss";
import Common from "../components/setting/Common";
import Header from "./Header";
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
  //如果选中工作模块等要循环遍历，设置选中内容index
  const [selectModulesIndex, setSelectModulesIndex] = useState<number|undefined>(undefined);
  function handleSelect(component: string, index?: number) {
    setSelectModulesIndex(index)
    setSelect(component)
  }
  return (
    <>
      <Header></Header>
      <div className=" bg  flex justify-center bg-[#353944]   w-full h-[calc(100%-2.5rem)]">
        <section className="w-75 <sm:hidden mr-10 bg-light-400 rounded-xl mt-5 " style={{ display: select ? "none" : "" }}>
          <Module></Module>
        </section>
        <section className={["w-140", "<lg:hidden", "mt-5", "mr-5", " rounded-xl", select ? "" : "hidden"].join(" ")}>
          <Setting current={select} onSelect={setSelect} selectModulesIndex={selectModulesIndex} />
        </section>
        <section className=" [calc(100%-2.5rem)]  mt-5 <sm:w-full <lg:w-149 content">
          <Common></Common>
          <div className="overflow-auto h-[calc(100%-3.5rem)]">
            <Resuem page={page} current={select} onSelect={handleSelect}></Resuem>
          </div>
        </section>
      </div>
    </>
  );
}

export default Design;
