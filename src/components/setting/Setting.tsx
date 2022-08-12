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
  const Element: any = function switchComponent({ name }: any) {
    switch (name) {
      case "Basic":
        return <Basic  />;
      case "Apply":
        return <Apply   />;
      case "Work":
        return <Work  />;
      case "Education":
        return <Education  />;
      case "Internship":
        return <Internship  />;
      case "School":
        return <School  />;
      case "Info":
        return <Info  />;
      case "Skill":
        return <Skill  />;
      default:
        return <Common  />;
    }
  };
  return <div className="bg-light-200 overflow-y-auto text-dark-400 h-full">
    <Element name={props.current}  />
    </div>
}

export default Setting;
