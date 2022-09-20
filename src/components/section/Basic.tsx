function Basic({ style, global, onSelect }: any) {
  return (
    <div className="w-full h-35 flex justify-between items-center hover:bg-[#efeff0]" onClick={ () => {
    onSelect('Basic')
    }}>
      <div className="flex justify-center flex-col">
        <h4 className="font-bold">{style.info.name}</h4>
        <div className="flex flex-wrap">
          {style.info.phone && (
            <span className="w-1/2">
              <i className="iconfont icon-dianhua" style={{ color: global.theme }} />
              {style.info.phone}
            </span>
          )}
          {style.info.age && (
            <span className="w-1/2">
              <i className="iconfont icon-nianling" style={{ color: global.theme }}></i>
              年龄：
              {style.info.age}
            </span>
          )}
          {style.info.email && (
            <span className="w-1/2">
              <i className="iconfont icon-youxiang" style={{ color: global.theme }} />
              {style.info.email}
            </span>
          )}
          {style.info.job && (
            <span className="w-1/2">
              <i className="iconfont icon-ganxingquzhiwei" style={{ color: global.theme }} />
              {style.info.job}
            </span>
          )}
          {style.info.address && (
            <span className="w-1/2">
              <i className="iconfont icon-dizhi" style={{ color: global.theme }} />
              工作地:
              {style.info.address}
            </span>
          )}
          {style.info.work && (
            <span className="w-1/2">
              <i className="iconfont icon-icon-test" style={{ color: global.theme }} />
              工作经验:
              {style.info.work}
            </span>
          )}
          {style.info.github && (
            <span className="w-1/2">
              <i className="iconfont icon-github" style={{ color: global.theme }} />
              {style.info.github}
            </span>
          )}
        </div>
      </div>
      {style.img && <img src={style.img} className="w-30 h-30" alt="" />}
    </div>
  );
}

export default Basic;