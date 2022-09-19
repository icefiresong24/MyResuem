import { Input, Button, DatePicker, Space } from "antd";
import { connect } from "react-redux";
import { Modules } from "../../types/type";
const { TextArea } = Input;

import moment from "moment";
import { LeftOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import ModelSetting from "@/hooks/ModelSetting";
import MyEditor from "../myEditor";
const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;
function Work(props: any) {
  const { style, name } = props.value.find((item: any) => {
    return item.component == "Work";
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  let [info, setInfo] = useState<Nobject>({});
  useEffect(() => {
    console.log(22);
    
    setInfo(style.info[props.selectModulesIndex]);
  }, []);
  function handledate(dateStrings: [string, string]) {
    let [startTime, endTime] = dateStrings;
    handleChange(startTime, "startTime");
    handleChange(endTime, "endTime");
  }
  //BUG SETINFO
  function handleChange(value: string, property: string) {
    let res = { ...info };
    res[property] = value;

    setInfo(res);

    let res2 = JSON.parse(JSON.stringify(style.info));
    res2[props.selectModulesIndex][property] = value;

    props.changeStyle("Work", "info", res2);
  }
  return (
    <Fragment>
      <div className="w-full p-4">
        <ModelSetting
          handleOk={(newTitle: string) => {
            props.changeName("Work", newTitle);
            setIsModalOpen(false);
          }}
          title="模块名称"
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
          </div>
          <button>保存</button>
        </div>
        <div className="w-full">
          <div className="mt4">
            <div>项目名称</div>
            <Input
              value={info.projectName}
              onChange={(e) => {
                handleChange(e.target.value, "projectName");
              }}
              name="projectName"
            />
            <div>时间</div>
            <Space direction="vertical" size={12}>
              <RangePicker
                defaultValue={[moment(info.startTime, dateFormat), moment(info.endTime, dateFormat)]}
                format={dateFormat}
                onChange={(_, dateStrings: [string, string]) => {
                  handledate(dateStrings);
                }}
              />
            </Space>

            <div>经历描述</div>
            <div className="w-full">
              <MyEditor
                content={info.description}
                onChange={(val: string) => {
                  handleChange(val, "description");
                }}
              ></MyEditor>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            type="primary"
            shape="round"
            onClick={() => {
              // setInfo((pre: unknown[]) => {
              //   let info = JSON.parse(JSON.stringify(pre));
              //   info.splice(index, 1);
              //   return info;
              // });
            }}
          >
            删除
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

export default connect(mapStateToProps, mapDispatchToProps)(Work);
