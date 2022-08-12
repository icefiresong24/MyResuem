function School({style}:any) {
    return (
      <div className="w-full ">
        <h4 className="font-bold ">校园经历</h4>
        <div className="w-full h-1 bg-gray-400 relative">
          <div className="w-1/4 h-full bg-blue-400 absolute"></div>
        </div>
        <ul>
          {style.info.map((item: any, index: number) => (
            <li className="flex justify-between" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default School;