import Apply from "./Apply";
import Skill from "./Skill";
import Work from "./Work";
import Education from "./Education";
import Basic from "./Basic";
import Internship from "./Internship";
import School from "./School";
import Info from "./Info";
import { Modules } from "../type";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Element: any = function switchComponent({ name, info, style }: any) {
  switch (name) {
    case "Basic":
      return <Basic info={info} style={style} />;
    case "Apply":
      return <Apply info={info} style={style} />;
    case "Work":
      return <Work info={info} style={style} />;
    case "Education":
      return <Education info={info} style={style} />;
    case "Internship":
      return <Internship info={info} style={style} />;
    case "School":
      return <School info={info} style={style} />;
    case "Info":
      return <Info info={info} style={style} />;
    case "Skill":
      return <Skill info={info} style={style} />;
  }
};
function Resuem(props: any) {
  useEffect(() => {});
  return (
    <>
      <div className="w-full h-full overflow-y-auto text-dark-400  px-10 bg-light-100" id="pdf">
        {props.value.map((item: any, index: number) => {
          if (item.show) {
            return (
              <div
                onClick={() => {
                  props.onSelect(item.component)
                }}
                key={index}
                className={
                  (props.current == item.component
                    ? " border border-green-400 border-dashed"
                    : "")
                }
              >
                <Element
                  name={item.component}
                  info={item.info}
                  style={item.style}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  updateArray: () => dispatch({ type: "SHOW", payload: 3 }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resuem);
