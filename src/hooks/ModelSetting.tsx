import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
type Prop = {
  title: string;
  handleOk: Function;
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void;
  visible: boolean;
};
const ModelSetting: React.FC<Prop> = (props) => {
  const [value, setValue] = useState(props.title);

  return (
    <>
      <Modal title='模块名称' visible={props.visible} onOk={(e) => {
      props.handleOk(value)
      }} onCancel={props.handleCancel}>
        <Input defaultValue={props.title}  onChange={(e) => {
        setValue(e.target.value)
        
        }} placeholder="Basic usage" />
      </Modal>
    </>
  );
};

export default ModelSetting;
