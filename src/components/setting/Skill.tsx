import { DeleteOutlined, EditOutlined, LeftOutlined } from "@ant-design/icons";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import MyEditor from "../myEditor";
import { Modules } from "../../types/type";
import ModelSetting from "@/hooks/ModelSetting";
function Skill(props: any) {
  const { style, name } = props.value.find((item: any) => {
    return item.component == "Skill";
  });

  let [info, setInfo] = useState(style.info);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleChange(value: string) {
    props.changeStyle("Skill", "info", value);
  }
  return (
    <Fragment>
      <div className="w-full p-4 ">
        <ModelSetting
          handleOk={(newTitle: string) => {
            props.changeName("Skill", newTitle);
            setIsModalOpen(false);
          }}
          title={name}
          visible={isModalOpen}
          handleCancel={() => {
            setIsModalOpen(false);
          }}
        ></ModelSetting>
        <div className="w-full h-5 mb-4  flex justify-between">
          <div
            onClick={() => {
              props.onSelect("");
            }}
          >
            <LeftOutlined />
            <span className="cursor-pointer">返回</span>
          </div>
          <div
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {name}
            <EditOutlined />
          </div>
          <div>&nbsp;</div>
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
  changeName: (module: string, value: any) =>
    dispatch({
      type: "NAME",
      payload: {
        module,
        value,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
