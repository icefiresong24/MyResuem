function Apply({style}:any) {
    return (
      <div className="w-full h-20 ">

        <h4 className="font-bold " style={style.title}>
          求职意向
        </h4>
        <div className="w-full h-1 bg-gray-400 relative" style={style.context}>
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
          <div className="flex justify-between">
            <span>{style.info.duty}</span>
            <span>{style.info.salary}</span>
            <span>{style.info.status}</span>
          </div>
        </div>
      </div>
    );
}

export default Apply;