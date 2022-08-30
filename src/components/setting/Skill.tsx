import { DeleteOutlined, LeftOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Modules } from "../type";
const { TextArea } = Input;
function Skill(props: any) {
  const { style } = props.value.find((item: any) => {
    return item.component == "Skill";
  });
  let [info, setInfo] = useState(style.info);
  function handleChange(value: string, index: number) {
    setInfo((pre: any) => {
      let info = JSON.parse(JSON.stringify(pre));
      info[index] = value;
      return info;
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
          {info.map((item: any, index: number) => {
            return (
              <div className="mt4" key={index}>
                <div className="flex justify-between">
                  <div>技能{index + 1}</div>

                  <DeleteOutlined
                    onClick={() => {
                      setInfo((pre: unknown[]) => {
                        let info = JSON.parse(JSON.stringify(pre));
                        info.splice(index, 1);
                        return info;
                      });
                    }}
                  />
                </div>

                <TextArea
                  rows={4}
                  value={item}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
              </div>
            );
          })}
        </div>
        <div className="flex-center">
          <Button
            type="primary"
            shape="round"
            className="mt-4 mr-4"
            onClick={() => {
              setInfo([...info, ""]);
            }}
          >
            添加
          </Button>
          <Button
            type="primary"
            shape="round"
            className="mt-4"
            onClick={() => {
              props.changeStyle("Skill", "info", info);
            }}
          >
            保存
          </Button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
