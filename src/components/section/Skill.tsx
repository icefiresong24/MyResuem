function Skill({ style, global, data, onSelect }: any) {
  
  useEffect(() => {
     document.getElementById("skill-content")!.innerHTML=style.info;
  })
  return (
    <div className="w-full  hover:bg-[#efeff0]" onClick={() => {
         onSelect('Skill')
    }}>
      <div className="font-bold " style={{ fontSize: global.title }}>
        <i className="iconfont icon-skill" style={{ color: global.theme }}></i>
        {data.name}
      </div>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      <div id="skill-content"></div>
    </div>
  );
}

export default Skill;
