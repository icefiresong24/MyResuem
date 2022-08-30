import { LeftOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Modules } from "../type";

function Education(props: any) {
  const { style } = props.value.find((item: any) => {
    return item.component == "Education";
  });
  let [info, setInfo] = useState(style.info);
  function handleChange(value:string,name:string,index:number) {
    setInfo((pre:any) => {
      let info = JSON.parse(JSON.stringify(pre))
      info[index][name] = value
      return info
    });
  }
  return (
    <Fragment>
      <LeftOutlined />
      <span
        className="cursor-pointer"
        onClick={() => {
          props.onSelect("");
        }}
      >
        返回
      </span>
    <div className="w-full p-4">
      <div className="w-full h-5 flex-center">教育背景</div>
      <div className="w-full">
        {info.map((item: any,index:number) => {
          return (
            <div className="mt4" key={index}>
              <div>学院</div>
              <Input
                value={item.name}
                onChange={(e) => handleChange(e.target.value,e.target.name,index)}
                name="name"
              />
              <div>专业</div>
              <Input
                value={item.profession}
                onChange={(e) => {
                  handleChange(e.target.value,e.target.name,index);
                }}
                name="profession"
              />
              <div>学历</div>
              <Input
                value={item.degree}
                onChange={(e) => {
                  handleChange(e.target.value,e.target.name,index);
                }}
                name="degree"
              />
            </div>
          );
        })}
        
      </div>
      <Button
        type="primary"
        shape="round"
        className="mt-4"
        onClick={() => {
        setInfo([
          ...info,
          { name: "野鸡学城", profession: "计算机科学与技术", degree: "本科" },
        ]);
        }}
      >
        添加
      </Button>
      <Button
        type="primary"
        shape="round"
        className="mt-4"
        onClick={() => {
        props.changeStyle("Education", "info", info);
        }}
      >
        保存
      </Button>
      </div>
      </Fragment>
  );
}

const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  changeStyle: (module: string, property: string, value: any) =>
    dispatch({
      type: "STYLE",
      payload: {
        module,
        property,
        value,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);
