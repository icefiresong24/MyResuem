function Education({style,global}:any) {
    return (
      <div className="w-full  ">
        <div className="font-bold " style={{ fontSize: global.title }}>
          <i
            className="iconfont icon-education"
            style={{ color: global.theme }}
          ></i>
          教育背景
        </div>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
        {style.info.map((item: any, index: number) => (
          <div
            className="flex justify-between"
            key={index}
            style={{ fontSize: global.text }}
          >
            <span>{item.name}</span>
            <span>{item.profession}</span>
            <span>{item.degree}</span>
          </div>
        ))}
      </div>
    );
}

export default Education;