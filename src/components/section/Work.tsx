import { text2textarea } from "@/util/saveTextarea";

function Work({style,global}:any) {
    return (
      <div className="w-full  ">
        <div className="font-bold " style={{ fontSize: global.title }}>
          <i
            className="iconfont icon-_xiangmujingyan"
            style={{ color: global.theme }}
          ></i>
          项目经验
        </div>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
        {style.info.map((item: any, index: number) => (
          <div key={index} style={{ fontSize: global.text }}>
            <div className="flex justify-between">
              <span className="font-bold">
                {item.startTime}-{item.endTime}
              </span>
              <span className="font-bold">{item.projectName}</span>
            </div>
            <div>项目描述：{item.role}</div>
            <div>项目职责:</div>
            <div className="whitespace-pre">{item.description}</div>
          </div>
        ))}
      </div>
    );
}

export default Work;