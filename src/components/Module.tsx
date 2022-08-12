import React, { Component } from "react";
import { Switch } from "antd";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Modules } from "./type";
interface Props {
  value: any;
  updateShow:any
}
interface Element{
  updateShow: any,
  value:any
}
const SortableItem = SortableElement<Element>((props: Props) => {
  const onChange = (item: any) => {
    return (checked: any) => {
      props.updateShow(item, checked);
    };
  };
  return (
    <li className="list-none flex justify-between h-8 border-dark-50">
      <div>{props.value.name}</div>
      <Switch defaultChecked onChange={onChange(props.value)} />
    </li>
  );
});

const SortableList = SortableContainer<any>(({ items, updateShow }: any) => {
  return (
    <ul>
      {items.map((value: any, index: number) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
          updateShow={updateShow}
        />
      ))}
    </ul>
  );
});

class Module extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange = (item: any) => {
    return (checked: any) => {};
  };
  componentDidUpdate(prevProps: any) {
    // 典型用法（不要忘记比较 props）：
  }
  // state = {
  //   items: [{ name: "基本资料" }, { name: "我的简历" },{name:'求职意向'},{name:'教育背景'},{ name: "技能特长" }, { name: "校园经历" },{name:'实习经验'},{name:'工作经验'}],
  // };
  onSortEnd = ({ oldIndex, newIndex }: any) => {
    this.props.moveArray(oldIndex, newIndex);
  };
  render() {
    return (
      <SortableList
        items={this.props.value}
        onSortEnd={this.onSortEnd}
        updateShow={this.props.updateArray}
      />
    );
  }
}
const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  updateArray: (module: any, checked: any) =>
    dispatch({
      type: "SHOW",
      payload: {
        module,
        checked,
      },
    }),
  moveArray: (oldIndex: any, newIndex: any) =>
    dispatch({
      type: "MOVE",
      payload: {
        oldIndex,
        newIndex,
      },
    }),
});
connect(mapDispatchToProps)(SortableItem);
export default connect(mapStateToProps, mapDispatchToProps)(Module);
