import React, { Component } from "react";
import { Switch } from "antd";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
const onChange = (checked:any) => {
  console.log(`switch to ${checked}`);
};
const SortableItem = SortableElement(({value}: any) => (
  <li className="list-none flex justify-between h-8 border-dark-50">
    <div>{value.name}</div>
    <Switch defaultChecked onChange={onChange} />
  </li>
));

const SortableList = SortableContainer(({items}:any) => {
  return (
    <ul>
      {items.map((value:any, index:number) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Module extends Component<any,any> {
  constructor(props:any) {
    super(props)
    console.log(this.props);
    
  }
  state = {
    items: [{ name: "基本资料" }, { name: "我的简历" },{name:'求职意向'},{name:'教育背景'},{ name: "技能特长" }, { name: "校园经历" },{name:'实习经验'},{name:'工作经验'}],
  };
  onSortEnd = ({ oldIndex, newIndex }:any) => {
    this.setState(({ items }:any) => ({
      items: arrayMoveImmutable(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default Module;


