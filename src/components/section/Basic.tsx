import img from '@/assets/images/vx.jpg'
import {
  PhoneFilled,
  MailFilled,
  GithubFilled,
  ZhihuCircleFilled,
  CheckCircleFilled,
  ScheduleFilled,
  EnvironmentFilled,
  HeartFilled,
  CrownFilled,
} from "@ant-design/icons";
function Basic({style}: any) {

    
    return (
      <div className="w-full h-35 flex justify-between items-center">
        <div className="flex justify-center flex-col">
          <h4 className='font-bold'>{style.info.name}</h4>
          <div className="flex flex-wrap">
            {style.info.phone && (
              <span className="w-1/2">
                <PhoneFilled />
                {style.info.phone}
              </span>
            )}
            {style.info.email && (
              <span className="w-1/2">
                <MailFilled />
                {style.info.email}
              </span>
            )}
            {style.info.job && (
              <span className="w-1/2">
                <HeartFilled />
                {style.info.job}
              </span>
            )}
            {style.info.address && (
              <span className="w-1/2">
                <EnvironmentFilled />
                工作地:
                {style.info.address}
              </span>
            )}
            {style.info.work && (
              <span className="w-1/2">
                <ScheduleFilled />
                工作经验:
                {style.info.work}
              </span>
            )}
            {style.info.github && (
              <span className="w-1/2">
                <GithubFilled />
                {style.info.github}
              </span>
            )}
          </div>
        </div>
        {style.img&&<img src={style.img} className="w-30 h-30" alt="" />}
      </div>
    );
}

export default Basic;