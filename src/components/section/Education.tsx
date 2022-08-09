function Education({info}:any) {
    return (
      <div className="w-full h-20 ">
        <h4 className="font-bold ">教育背景</h4>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
          {info.map((item: any, index: number) => (
            <div className="flex justify-between" key={index}>
              <span>{item.name}</span>
              <span>{item.profession}</span>
              <span>{item.degree}</span>
            </div>
          ))}
      </div>
    );
}

export default Education;