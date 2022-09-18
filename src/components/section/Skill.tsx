import svg from '@/assets/bg.jpg'
function Skill({ style, global }: any) {
  useEffect(() => {
     document.getElementById("skill-content")!.innerHTML=style.info;
  })
  return (
    <div className="w-full  ">
      <div className="font-bold " style={{ fontSize: global.title }}>
        <i className="iconfont icon-skill" style={{ color: global.theme }}></i>
        技能特长
      </div>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      <div id='skill-content'></div>
    </div>
  );
}

export default Skill;
