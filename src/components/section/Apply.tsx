function Apply({ style }: any) {
  return (
    <div className="w-full h-20 ">
      <h4 className="font-bold ">求职意向</h4>
      <div >你好</div>
      <div className="flex justify-between">
        <span>{style.info.duty}</span>
        <span>{style.info.salary}</span>
        <span>{style.info.status}</span>
      </div>
    </div>
  );
}

export default Apply;
