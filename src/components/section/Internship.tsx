function Internship({style,global}:any) {
    return (
      <div className="w-full ">
        <div className="font-bold " style={{ fontSize: global.title }}>
          <i
            className="iconfont icon-work "
            style={{ color: global.theme }}
          ></i>
          工作经验
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
              <span className="font-bold">{item.company}</span>
            </div>
            <div>{item.role}</div>
            <div className="whitespace-pre">{item.duty}</div>
          </div>
        ))}
      </div>
    );
}

export default Internship;