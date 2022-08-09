function Basic({info}: any) {
    
    return (
      <div className="w-full h-40 ">
        <div className="flex justify-around">
          <img src="src/assets/images/vx.jpg" className="w-30 h-30" alt="" />
          <div className="flex justify-center flex-col">
            <h4>{info.name}</h4>
            <div>
              <span>{info.age}</span>&nbsp;|&nbsp;
              <span>{info.address}</span>&nbsp;|&nbsp;<span>{info.work}</span>
              &nbsp;|&nbsp;
              <span>{info.phone}</span>&nbsp;|&nbsp;<span>{info.email}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Basic;