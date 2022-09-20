
function Work({ style, global, onSelect }: any) {
  function editWork(index: number) {
    onSelect('Work',index);
  }
  
  return (
    <div className="w-full  ">
      <div className="font-bold " style={{ fontSize: global.title }}>
        <i className="iconfont icon-_xiangmujingyan" style={{ color: global.theme }}></i>
        项目经验
      </div>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      {style.info.map((item: any, index: number) => (
        <div
          key={index}
          className="hover:bg-[#efeff0]"
          style={{ fontSize: global.text }}
          onClick={() => {
            editWork(index);
          }}
        >
          <div className="flex justify-between">
            <span className="font-bold">
              {item.startTime}-{item.endTime}
            </span>
            <span className="font-bold">{item.projectName}</span>
          </div>

          <div className=" work-content" dangerouslySetInnerHTML={{ __html: item.description }}>
            {/* {item.description} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;