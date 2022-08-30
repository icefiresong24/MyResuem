function Apply({ style }: any) {
  return (
    <div className="w-full  ">
      <h4 className="font-bold ">求职意向</h4>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      <div className="flex justify-between">
        <span>{style.info.duty}</span>
        <span>{style.info.salary}</span>
        <span>{style.info.status}</span>
      </div>
    </div>
  );
}

export default Apply;
