import React, { Component } from 'react'
import { Switch } from 'antd'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { connect } from 'react-redux'
import type { Modules } from '../types/type'
interface Props {
  value: any
  updateShow: any
}
interface Element {
  updateShow: any
  value: any
}
const SortableItem = SortableElement<Element>((props: Props) => {
  const onChange = (item: any) => {
    return (checked: any) => {
      props.updateShow(item, checked)
    }
  }
  return (
    <li className="list-none flex justify-between h-8 border-dark-50">
      <div className="cursor-move">{props.value.name}</div>
      <Switch defaultChecked onChange={onChange(props.value)} />
    </li>
  )
})

const SortableList = SortableContainer<any>(({ items, updateShow }: any) => {
  return (
    <ul>
      {items.map((value: any, index: number) => (
        <SortableItem key={`item-${index}`} index={index} value={value} updateShow={updateShow} />
      ))}
    </ul>
  )
})

class Module extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange = (item: any) => {
    return (checked: any) => {}
  }

  onSortEnd = ({ oldIndex, newIndex }: any) => {
    this.props.moveArray(oldIndex, newIndex)
  }

  render() {
    return (
      <>
        <div className="h-10 ">
          模块选择<span className="text-xs">(拖动模块控制模块位置)</span>
        </div>
        <SortableList items={this.props.value} onSortEnd={this.onSortEnd} updateShow={this.props.updateArray} />;
      </>
    )
  }
}
const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  updateArray: (module: any, checked: any) =>
    dispatch({
      type: 'SHOW',
      payload: {
        module,
        checked,
      },
    }),
  moveArray: (oldIndex: any, newIndex: any) =>
    dispatch({
      type: 'MOVE',
      payload: {
        oldIndex,
        newIndex,
      },
    }),
})
connect(mapDispatchToProps)(SortableItem)
export default connect(mapStateToProps, mapDispatchToProps)(Module)
