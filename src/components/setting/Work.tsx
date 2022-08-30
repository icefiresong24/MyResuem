import { Input, Button, DatePicker, Space } from "antd";
import { connect } from "react-redux";
import { Modules } from "../type";
const { TextArea } = Input;

import moment from "moment";
import { text2textarea } from "@/util/saveTextarea";
import { LeftOutlined } from "@ant-design/icons";
import { Fragment } from "react";
const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;
function Work(props: any) {
  const { style } = props.value.find((item: any) => {
    return item.component == "Work";
  });
  let [info, setInfo] = useState(style.info);
  function handledate(index: number, dateStrings: [string, string]) {
    let [startTime, endTime] = dateStrings;
    setInfo((pre: any) => {
      let info = JSON.parse(JSON.stringify(pre));
      info[index].startTime = startTime;
      info[index].endTime = endTime;
      return info;
    });
  }
  function handleChange(value: any, name: string, index: number) {
    console.log(value);

    setInfo((pre: any) => {
      let info = JSON.parse(JSON.stringify(pre));
      info[index][name] = value;
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
      <div className="w-full h-5 flex-center">项目经验</div>
      <div className="w-full">
        {info.map((item: any, index: number) => {
          return (
            <div className="mt4" key={index}>
              <div>时间</div>
              <Space direction="vertical" size={12}>
                <RangePicker
                  defaultValue={[
                    moment(item.startTime, dateFormat),
                    moment(item.endTime, dateFormat),
                  ]}
                  format={dateFormat}
                  onChange={(_, dateStrings: [string, string]) => {
                    handledate(index, dateStrings);
                  }}
                />
              </Space>
              <div>项目名称</div>
              <Input
                value={item.projectName}
                onChange={(e) => {
                  handleChange(e.target.value, e.target.name, index);
                }}
                name="projectName"
              />
              <div>负责内容</div>
              <Input
                value={item.role}
                onChange={(e) => {
                  handleChange(e.target.value, e.target.name, index);
                }}
                name="role"
              />
              <div>项目描述</div>
              <TextArea
                rows={4}
                value={item.description}
                onChange={(e) =>
                  handleChange(e.target.value, "description", index)
                }
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
            {
              startTime: "2022-1-1",
              endTime: "2022-1-1",
              company: "****公司",
              role: "前端负责人",
              duty: "负责项目的核心模块前端设计和研发工作；",
            },
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
          props.changeStyle("Work", "info", info);
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

export default connect(mapStateToProps, mapDispatchToProps)(Work);
