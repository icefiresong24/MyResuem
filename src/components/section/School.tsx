function School({style,global}:any) {
    return (
      <div className="w-full ">
        <div className="font-bold " style={{ fontSize: global.title }}>
          <i
            className="iconfont icon-xiaoyuan"
            style={{ color: global.theme }}
          ></i>
          校园经历
        </div>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
        <ul>
          {style.info.map((item: any, index: number) => (
            <li
              className="flex justify-between"
              key={index}
              style={{ fontSize: global.text }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default School;