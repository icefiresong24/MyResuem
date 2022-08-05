import Module from './Module'
import Resuem from './section/index'
import {useState} from 'react'
function Design(props:any) {
  function exportPDF() {
    
  }
  let [items, setItems] = useState([
    { name: "基本资料" },
    { name: "我的简历" },
    { name: "求职意向" },
    { name: "教育背景" },
    { name: "技能特长" },
    { name: "校园经历" },
    { name: "实习经验" },
    { name: "工作经验" },
  ]);
    return (
      <>
        <div className="flex items-center justify-between h-10">
          <div>化简</div>
          <div className="flex">
            <div>我的简历</div>
          </div>
          <div onClick={exportPDF}>导出</div>
        </div>
        <div className="flex justify-between w-full h-[calc(100%-2.5rem)]">
          <section className="w-76 <sm:hidden">
            <div className="h-10">模块选择</div>
            <Module value={items} ></Module>
          </section>
          <section className="p-4 w-[calc(100%-38rem)] <sm:w-full">
            <Resuem value={items}></Resuem>
          </section>
          <section className="w-76 bg-blue-500 <sm:hidden">nihao</section>
        </div>
      </>
    );
}

export default Design;