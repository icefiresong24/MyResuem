import Module from "./Module";
import Resuem from "./section/Resuem";
import { useState, useRef } from "react";
import { arrayMoveImmutable } from "array-move";
import data from "../store/data";
import { Section, Modules } from "./type";
import { connect } from "react-redux";
import downloadPDF from "../util/html2pdf";
import Setting from "./setting/Setting";
function Design(props: any) {
  function exportPDF() {
    const pdf = document.getElementById("pdf");
    downloadPDF(pdf!, "jianli", false, () => {});
  }
  let [items, setItems] = useState<Modules>(data);
  let [select, setSelect] = useState<string>("");
  const test = (val: string) => {
    console.log("nihao", val);
  };
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
          <Module
          // value={items.value}
          // onChange={updateArray}
          // onHidden={hiddenModule}
          ></Module>
        </section>
        <section className="p-4 w-[calc(100%-38rem)] <sm:w-full <lg:w-[calc(100%-19rem)] bg-gray-400">
          <Resuem onSelect={setSelect}></Resuem>
        </section>
        <section className="w-76 bg-gray-500 <lg:hidden">
          <Setting current={select} changeStyle={props.changeStyle} />
        </section>
      </div>
    </>
  );
}

const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  changeStyle: (
    module: string,
    element: string,
    property: string,
    value: any
  ) =>
    dispatch({
      type: "STYLE",
      payload: {
        module,
        element,
        property,
        value,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Design);
