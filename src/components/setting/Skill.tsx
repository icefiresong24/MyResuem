import { DeleteOutlined, LeftOutlined } from "@ant-design/icons";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import MyEditor from "../myEditor";
import { Modules } from "../../types/type";
function Skill(props: any) {
  const { style } = props.value.find((item: any) => {
    return item.component == "Skill";
  });
  let [info, setInfo] = useState(style.info);
  function handleChange(value: string) {
    props.changeStyle("Skill", "info", value);
  }
  return (
    <Fragment>
      <div className="w-full p-4 ">
        <div className="w-full h-5 mb-4  flex justify-between">
          <div
            onClick={() => {
              props.onSelect("");
            }}
          >
            <LeftOutlined />
            <span className="cursor-pointer">返回</span>
            
          </div>
          <div>专业技能</div>
          <button>保存</button>
        </div>
        <div className="w-full">
          <MyEditor content={info} onChange={handleChange}></MyEditor>
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
