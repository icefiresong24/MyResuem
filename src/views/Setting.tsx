import Common from "../components/setting/Common";
import Apply from "../components/setting/Apply";
import Skill from "../components/setting/Skill";
import Work from "../components/setting/Work";
import Education from "../components/setting/Education";
import Basic from "../components/setting/Basic";
import Internship from "../components/setting/Internship";
import School from "../components/setting/School";
import Info from "../components/setting/Info";
import { useEffect } from "react";
function Setting(props: any) {
  
  useEffect(() => {});
  const Element: any = function switchComponent({ name, onSelect, selectModulesIndex }: any) {
    switch (name) {
      case "Basic":
        return <Basic  onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "Apply":
        return <Apply onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "Work":
        return <Work onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "Education":
        return <Education onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "Internship":
        return <Internship onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "School":
        return <School onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "Info":
        return <Info onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      case "Skill":
        return <Skill onSelect={onSelect} selectModulesIndex={selectModulesIndex}/>;
      default:
        return <Common />;
    }
  };
  return (
    <div className="bg-light-200 overflow-y-auto text-dark-400 h-full">
      <Element name={props.current} onSelect={props.onSelect} selectModulesIndex={props.selectModulesIndex} />
    </div>
  );
}

export default Setting;
