function Work({info}:any) {
    return (
      <div className="w-full  ">
        <h4 className="font-bold ">项目经验</h4>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
        {info.map((item: any, index: number) => (
          <div key={index}>
            <div className="flex justify-between">
              <span>
                {item.startTime}-{item.endTime}
              </span>
              <span>{item.projectName}</span>
            </div>
            <div>{item.role}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    );
}

export default Work;