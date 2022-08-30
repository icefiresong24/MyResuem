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
function Internship(props: any) {
  const { style } = props.value.find((item: any) => {
    return item.component == "Internship";
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
    setInfo((pre: any) => {
      let info = JSON.parse(JSON.stringify(pre));
      info[index][name] = text2textarea(value);
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
        <div className="w-full h-5 flex-center">工作经验</div>
        <div className="w-full">
          {info.map((item: any, index: number) => {
            return (
              <div className="mt4" key={index}>
                <div className="flex justify-between">
                  <div>项目{index + 1}</div>
                  <Button
                    type="primary"
                    shape="round"
                    onClick={() => {
                      setInfo((pre: unknown[]) => {
                        let info = JSON.parse(JSON.stringify(pre));
                        info.splice(index, 1);
                        return info;
                      });
                    }}
                  >
                    删除
                  </Button>
                </div>

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
                <div>公司</div>
                <Input
                  value={item.company}
                  onChange={(e) => {
                    handleChange(e.target.value, e.target.name, index);
                  }}
                  name="company"
                />
                <div>岗位</div>
                <Input
                  value={item.role}
                  onChange={(e) => {
                    handleChange(e.target.value, e.target.name, index);
                  }}
                  name="role"
                />
                <div>负责内容</div>
                <TextArea
                  rows={4}
                  value={item.duty}
                  onChange={(e) => handleChange(e.target.value, "duty", index)}
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
            props.changeStyle("Internship", "info", info);
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

export default connect(mapStateToProps, mapDispatchToProps)(Internship);
