import { Select,Input,Button } from "antd";
import { Fragment, useState } from 'react'
import { Modules } from "../../types/type";
import { connect } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import ModelSetting from "@/hooks/ModelSetting";
function Basic(props: any) {
  const {style}=props.value.find((item:any) => {
  return item.component=='Basic'
  })
    let [name, setName] = useState(style.info.name);
    let [age, setAge] = useState(style.info.age);
    let [address, setAddress] = useState(style.info.address);
    let [phone, setPhone] = useState(style.info.phone);
    let [email, setEmail] = useState(style.info.email);
    let [work, setWork] = useState(style.info.work);
    let [job, setJob] = useState(style.info.job);
    let [github, setGithub] = useState(style.info.github);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChange(){
      props.changeStyle("Basic", 'info',  {name,age,work,job,address,phone,email,github});
    };
  
  function upload(e: any) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e: any) => {
      var url = reader.result;
      props.changeStyle("Basic", "img",  url);
    };
  }
  return (
    <Fragment>
      <div className="w-full p-4">
        <div className="w-full h-5 mb-4  flex justify-between">
          <div
            onClick={() => {
              props.onSelect("");
            }}
          >
            <LeftOutlined />
            <span className="cursor-pointer">返回</span>
          </div>
          <div>
            <span>基本资料</span>
          </div>
          <Button type="primary" shape="round" size="small" onClick={handleChange}>
            保存
          </Button>
        </div>
        <div className="w-full">
          <div>姓名</div>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
          <div>
            <div>电话</div>
            <Input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              name="phone"
            />
            <div>邮箱</div>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
            />
          </div>
          <div>年龄</div>
          <Input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            name="age"
          />
          <div>地址</div>
          <Input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="address"
          />
          <div>github</div>
          <Input
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            name="github"
          />
          <div>上传头像</div>
          <input type="file" onChange={upload} />
        </div>
      </div>
    </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
