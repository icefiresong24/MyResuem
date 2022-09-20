function Education({style,global,data,onSelect}:any) {
    return (
      <div
        className="w-full hover:bg-[#efeff0] "
        onClick={() => {
          onSelect("Education");
        }}
      >
        <div className="font-bold " style={{ fontSize: global.title }}>
          <i className="iconfont icon-education" style={{ color: global.theme }}></i>
          {data.name}
        </div>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
        {style.info.map((item: any, index: number) => (
          <div key={index} style={{ fontSize: global.text }}>
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.startTime}-{ item.endTime}</span>
            </div>
            <div className="flex justify-between">
              <span>{item.profession}</span>
              <span>{item.degree}</span>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Education;