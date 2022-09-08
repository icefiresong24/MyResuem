import downloadPDF from "@/util/html2pdf";
import { Button, Select } from "antd";
import { connect } from "react-redux";
import { Modules } from "../type";
const { Option } = Select;
function Common(props: any) {
  function exportPDF() {
    const pdf = document.getElementById("pdf");
    downloadPDF(pdf!, "前端开发工程师", false, () => {});
  }
  function handleChange(element: string, property: string) {
    return (value: string) => {
      props.changeGlobalStyle(property, value);
    };
  }
  const fonts = [
    "16px",
    "18px",
    "20px",
    "22px",
    "24px",
    "26px",
    "28px",
    "30px",
  ];
  return (
    <div className="w-full">
      <h1 className="w-full h-5 flex-center font-bold font-size">主题设置</h1>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div>主题颜色</div>
          <div className="flex">
            <div
              onClick={() => {
                props.changeGlobalStyle("theme", "red");
              }}
              className="bg-red-400 rounded-1/2 w-5 h-5"
            ></div>
            <div
              onClick={() => {
                props.changeGlobalStyle("theme", "blue");
              }}
              className="bg-blue-400 rounded-1/2 w-5 h-5"
            ></div>
            <div
              onClick={() => {
                props.changeGlobalStyle("theme", "gray");
              }}
              className="bg-gray-400 rounded-1/2 w-5 h-5"
            ></div>
            <div
              onClick={() => {
                props.changeGlobalStyle("theme", "green");
              }}
              className="bg-green-400 rounded-1/2 w-5 h-5"
            ></div>
            <div
              onClick={() => {
                props.changeGlobalStyle("theme", "black");
              }}
              className="bg-dark-600 rounded-1/2 w-5 h-5"
            ></div>
          </div>
        </div>
        <div className="w-full flex">
          <div>模块间距</div>
          <Select
            defaultValue="18px"
            style={{ width: 120 }}
            onChange={(value) => {
              props.changeGlobalStyle("margin", value);
            }}
          >
            {fonts.map((item: string, index: number) => {
              return (
                <Option value={item} key={index}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="w-full flex">
          <div>模块标题字体大小</div>
          <Select
            defaultValue="10px"
            style={{ width: 120 }}
            onChange={(value) => {
              props.changeGlobalStyle("title", value);
            }}
          >
            {fonts.map((item: string, index: number) => {
              return (
                <Option value={item} key={index}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="w-full flex">
          <div>正文字体大小</div>
          <Select
            defaultValue="14px"
            style={{ width: 120 }}
            onChange={(value) => {
              props.changeGlobalStyle("text", value);
            }}
          >
            {fonts.map((item: string, index: number) => {
              return (
                <Option value={item} key={index}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="">
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
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
    global:state.global
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  changeGlobalStyle: (theme: string, color: any) =>
    dispatch({
      type: "GLOBAL",
      payload: {
        theme,
        color,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Common);
