import './work.scss'
import { Icon } from '@iconify/react'
import { connect } from 'react-redux'
import React from 'react'
import type { Modules } from '@/types/type'
function Work({ style, global, onSelect, data, changeStyle }: any) {
  // redux改变数据

  function deleteWorkExperience(index: number) {
    const res2 = [...style.info]
    res2.splice(index, 1)
    changeStyle('Work', 'info', res2)
    onSelect('')
  }
  function addWorkExperience(e: React.MouseEvent) {
    e.stopPropagation()
    const res2 = [...style.info];
    (res2 as any).push({
      startTime: null,
      endTime: null,
      projectName: '',
      role: '',
      description: '',
    })
    changeStyle('Work', 'info', res2)
    onSelect('Work', res2.length - 1)
  }
  function arrowMove(index: number, type: string) {
    const res = [...style.info]
    if (type === 'up' && index !== 0) {
      const data = res[index - 1]
      res[index - 1] = res[index]
      res[index] = data
    }
    else if (index !== res.length - 1) {
      const data = res[index + 1]
      res[index + 1] = res[index]
      res[index] = data
    }
    changeStyle('Work', 'info', res)
  }
  return (
    <div className="w-full  work-add " >
      <div className="font-bold relative" style={{ fontSize: global.title }}>
        <i className="iconfont icon-_xiangmujingyan" style={{ color: global.theme }}></i>
        {data.name}
        <Icon icon="fluent:add-circle-16-filled" className="absolute right-0 addicon" fontSize={24} onClick={addWorkExperience} />
      </div>
      <div className="w-full h-1 bg-gray-400 relative">
        <div className="w-1/4 h-full bg-blue-400 absolute"></div>
      </div>
      {style.info.map((item: any, index: number) => (
        <div
          key={index}
          className="work relative hover:bg-[#efeff0] "
          style={{ fontSize: global.text }}
          onClick={() => {
            onSelect('Work', index)
          }}
        >
          <div className="flex justify-between">
            <span className="font-bold">
              {item.startTime}-{item.endTime}
            </span>
            <span className="font-bold">{item.projectName}</span>
          </div>

          <div className=" work-content" dangerouslySetInnerHTML={{ __html: item.description }}>
            {/* {item.description} */}
          </div>
          <div className="control flex flex-col absolute right-0 top-6  hidden ">
            <Icon
              className="cursor-pointer"
              fontSize={24}
              color="#56cf2d"
              icon="bi:arrow-up-square-fill"
              onClick={(e) => {
                e.stopPropagation()
                arrowMove(index, 'up')
              }}
            />
            <Icon
              className="cursor-pointer mt-2"
              fontSize={24}
              color="#56cf2d"
              icon="bi:arrow-down-square-fill"
              onClick={(e) => {
                e.stopPropagation()
                arrowMove(index, 'down')
              }}
            />
            <Icon
              className="cursor-pointer mt-2"
              fontSize={24}
              color="#56cf2d"
              icon="ep:delete-filled"
              onClick={(e) => {
                e.stopPropagation()
                deleteWorkExperience(index)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  changeStyle: (module: string, property: string, value: any) =>
    dispatch({
      type: 'STYLE',
      payload: {
        module,
        property,
        value,
      },
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Work)
