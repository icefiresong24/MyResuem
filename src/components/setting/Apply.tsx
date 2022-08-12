import { Input,Button } from "antd";
import { useEffect, useRef, useState } from "react";
import {connect} from 'react-redux'
import { Modules } from "../type";


function Apply(props: any) {
  let [duty, setDuty] = useState("");
  let [salary,setSalary]=useState('')
  let [status, setStatus] = useState("");
  function handleChange() {
    props.changeStyle("Apply", "info",  {
      duty,
      salary,
      status,
    });
  }
  useEffect(() => {
  console.log(duty);
  
  })
  return (
    <div className="w-full p-4">
      <div className="w-full h-5 flex-center">求职意向</div>
      <div className="w-full">
        <div>职位</div>
        <Input
          value={duty}
          onChange={(e) => {
            setDuty(e.target.value);
          }}
          name="duty"
        />
        <div>
          <div>薪资</div>
          <Input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            name="salary"
          />
          <div>在职状态</div>
          <Input
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            name="status"
          />
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="mt-4"
        onClick={handleChange}
      >
        保存
      </Button>
    </div>
  );
}

const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  changeStyle: (module: string, property: string, value: any) =>
    dispatch({
      type: "STYLE",
      payload: {
        module,
        property,
        value,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apply);

