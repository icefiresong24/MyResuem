import downloadPDF from "@/util/html2pdf";
import { Button, Select } from "antd";
import { FC } from "react";
import { connect } from "react-redux";
import { Modules } from "../../types/type";
const { Option } = Select;
function Common(props: any) {
  let [flag,setFlag]=useState(false)
 
  
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
  const colors = [
    'red',
    'blue',
    'black',
    'gray',
    'green'
  ]
  return (
      <div className="w-full h-12 bg-light-100 flex justify-center items-center">
        <div className="w-full ">
          <Select
            defaultValue="black"
            style={{ width: 120 }}
            onChange={(value) => {
              props.changeGlobalStyle("theme", value);
            }}
          >
            {colors.map((item: string, index: number) => {
              return (
                <Option value={item} key={index}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="w-full flex">
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
