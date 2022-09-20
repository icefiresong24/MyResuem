import ModelSetting from "@/hooks/ModelSetting";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import { Input, Button, DatePicker, DatePickerProps } from "antd";
import moment from "moment";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Modules } from "../../types/type";

function Education(props: any) {
  const { style,name } = props.value.find((item: any) => {
    return item.component == "Education";
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const monthFormat = "YYYY年MM月";
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
      <div className="w-full p-4">
        <ModelSetting
          handleOk={(newTitle: string) => {
            props.changeName("Education", newTitle);
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
            className='cursor-pointer'
          >
            <span>{name}</span>
            <EditOutlined />
          </div>
          <Button
            type="primary"
            shape="round"
            size="small"
            onClick={() => {
              props.changeStyle("Education", "info", info);
            }}
          >
            保存
          </Button>
        </div>
        <div className="w-full">
          {info.map((item: any, index: number) => {
            return (
              <div className="mt4" key={index}>
                <div className="flex-center">学历{index + 1}</div>
                <div>学院</div>
                <Input value={item.name} onChange={(e) => handleChange(e.target.value, e.target.name, index)} name="name" />
                <div>专业</div>
                <Input
                  value={item.profession}
                  onChange={(e) => {
                    handleChange(e.target.value, e.target.name, index);
                  }}
                  name="profession"
                />
                <div>学历</div>
                <Input
                  value={item.degree}
                  onChange={(e) => {
                    handleChange(e.target.value, e.target.name, index);
                  }}
                  name="degree"
                />
                <div>
                  <div>在读时间</div>
                  <div className="flex justify-between">
                    <DatePicker
                      className="w-60"
                      onChange={(date, dateString) => {
                        handleChange(dateString, "startTime", index);
                      }}
                      defaultValue={moment(item.startTime, monthFormat)} format={monthFormat}
                      picker="month"
                    />
                    <DatePicker
                      className="w-60"
                      onChange={(date, dateString) => {
                        handleChange(dateString, "endTime", index);
                      }}
                      defaultValue={moment(item.endTime, monthFormat)} format={monthFormat}
                      picker="month"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          type="primary"
          shape="round"
          className="mt-4 flex-center"
          onClick={() => {
            setInfo([...info, { name: "野鸡学城", profession: "计算机科学与技术", degree: "本科", startTime: "2022年1月", endTime: "2022年2月" }]);
          }}
        >
          添加
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
  changeName: (module: string, value: any) =>
    dispatch({
      type: "NAME",
      payload: {
        module,
        value,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);
