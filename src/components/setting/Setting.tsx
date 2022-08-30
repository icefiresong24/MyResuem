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
  const Element: any = function switchComponent({ name, onSelect }: any) {
    switch (name) {
      case "Basic":
        return <Basic onSelect={onSelect} />;
      case "Apply":
        return <Apply  onSelect={onSelect} />;
      case "Work":
        return <Work onSelect={onSelect} />;
      case "Education":
        return <Education onSelect={onSelect} />;
      case "Internship":
        return <Internship onSelect={onSelect} />;
      case "School":
        return <School onSelect={onSelect} />;
      case "Info":
        return <Info onSelect={onSelect} />;
      case "Skill":
        return <Skill  onSelect={onSelect}/>;
      default:
        return <Common  />;
    }
  };
  return (
    <div className="bg-light-200 overflow-y-auto text-dark-400 h-full">
      <Element name={props.current} onSelect={props.onSelect} />
    </div>
  );
}

export default Setting;
