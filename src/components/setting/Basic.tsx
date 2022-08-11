import { Select,Input,Button } from "antd";
import {useState} from 'react'
const { Option } = Select;
function Basic(props: any) {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [address, setAddress] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");

  function handleChange(){
      props.changeStyle("Basic", 'info',  {name,age,address,phone,email});
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
    <div className="w-full p-4">
      <div className="w-full h-5 flex-center">基本资料</div>
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
        <div>上传头像</div>
        <input type="file" onChange={upload} />
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

export default Basic;
