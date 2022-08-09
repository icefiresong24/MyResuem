import { Select } from "antd";
const { Option } = Select;
function Common(props: any) {
  function handleChange(element: string, property: string) {
    return (value: string) => {
      props.changeStyle("Apply", element, property, value);
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
      <div className="w-full h-5 flex-center">主题设置</div>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div>主题颜色</div>
          <div className="flex">
            <div className="bg-red-400 rounded-1/2 w-5 h-5"></div>
            <div className="bg-blue-400 rounded-1/2 w-5 h-5"></div>
            <div className="bg-gray-400 rounded-1/2 w-5 h-5"></div>
            <div className="bg-green-400 rounded-1/2 w-5 h-5"></div>
            <div className="bg-dark-600 rounded-1/2 w-5 h-5"></div>
          </div>
        </div>
        <div className="w-full flex">
          <div>模块标题字体大小</div>
          <Select
            defaultValue="24px"
            style={{ width: 120 }}
            onChange={handleChange("title", "fontSize")}
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
            defaultValue="18px"
            style={{ width: 120 }}
            onChange={handleChange("context", "fontSize")}
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
    </div>
  );
}

export default Common;
