import Common from "./Common";
import Apply from "./Apply";
import Skill from "./Skill";
import Work from "./Work";
import Education from "./Education";
import Basic from "./Basic";
import Internship from "./Internship";
import School from "./School";
import Info from "./Info";
import { useEffect } from "react";
function Setting(props: any) {
  useEffect(() => {});
  const Element: any = function switchComponent({ name, changeStyle }: any) {
    switch (name) {
      case "Basic":
        return <Basic changeStyle={changeStyle} />;
      case "Apply":
        return <Apply test={() => {
        console.log('click');
        
        }} changeStyle={changeStyle} />;
      case "Work":
        return <Work changeStyle={changeStyle} />;
      case "Education":
        return <Education changeStyle={changeStyle} />;
      case "Internship":
        return <Internship changeStyle={changeStyle} />;
      case "School":
        return <School changeStyle={changeStyle} />;
      case "Info":
        return <Info changeStyle={changeStyle} />;
      case "Skill":
        return <Skill changeStyle={changeStyle} />;
      default:
        return <Common changeStyle={changeStyle} />;
    }
  };
  return <div className="bg-light-200 text-dark-400 h-full">
    <Element name={props.current} changeStyle={props.changeStyle} />
    </div>
}

export default Setting;
