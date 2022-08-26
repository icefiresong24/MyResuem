import img from '@/assets/images/vx.jpg'
function Basic({style}: any) {

    
    return (
      <div className="w-full h-40 flex justify-between items-center">
          <div
            className="flex justify-center flex-col"
            style={{ fontSize: style.context.fontSize }}
          >
            <h4>{style.info.name}</h4>
            <div>
              <span>{style.info.age}</span>&nbsp;|&nbsp;
              <span>{style.info.address}</span>&nbsp;|&nbsp;<span>{style.info.work}</span>
              &nbsp;|&nbsp;
              <span>{style.work}</span>&nbsp;&nbsp;<span>{style.info.email}</span>
            </div>
          </div>
          <img src={style.img} className="w-30 h-30" alt="" />
      </div>
    );
}

export default Basic;