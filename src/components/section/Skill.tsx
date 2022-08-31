import svg from '@/assets/bg.jpg'
function Skill({ style,global }: any) {
  return (
    <div className="w-full  ">
      <div className="font-bold " style={{ fontSize: global.title }}>
        <i className="iconfont icon-skill" style={{ color: global.theme }}></i>
        技能特长
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

export default Skill;
