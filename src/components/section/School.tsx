function School({ style, global, data, onSelect }: any) {
  useEffect(() => {
    document.getElementById("School-content")!.innerHTML = style.info;
  });
  return (
    <div
      className="w-full  hover:bg-[#efeff0]"
      onClick={() => {
        onSelect("School");
      }}
    >
      <div className="font-bold " style={{ fontSize: global.title }}>
        <i className="iconfont icon-xiaoyuan" style={{ color: global.theme }}></i>
        {data.name}
      </div>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      <div id="School-content"></div>
    </div>
  );
}

export default School;
