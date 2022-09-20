function Apply({ style, global, onSelect, info,data }: any) {
  
  return (
    <div
      className="w-full hover:bg-[#efeff0] "
      onClick={() => {
        onSelect('Apply');
      }}
    >
      <div className="font-bold border-b " style={{ fontSize: global.title }}>
        <i className="iconfont icon-qiuzhi" style={{ color: global.theme }}></i>
        {data.name}
      </div>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      <div className="flex justify-between" style={{ fontSize: global.text }}>
        <span>{style.info.duty}</span>
        <span>{style.info.salary}</span>
        <span>{style.info.status}</span>
      </div>
    </div>
  );
}

export default Apply;
