import { DatePicker, Input } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import { Fragment } from 'react'
import type { Modules } from '../../types/type'
import MyEditor from '../myEditor'
import ModelSetting from '@/hooks/ModelSetting'
function Work(props: any) {
  const { style, name } = props.value.find((item: any) => {
    return item.component === 'Work'
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setProjectName] = useState(style.info[props.selectModulesIndex].projectName)
  const monthFormat = 'YYYY年MM月'
  const [info, setInfo] = useState(style.info[props.selectModulesIndex])

  function handledate(dateStrings: string, property: string) {
    if (property === 'startTime') {
      setInfo({ ...info, startTime: dateStrings })
      handleChange(dateStrings, 'startTime')
    }
    else {
      setInfo({ ...info, endTime: dateStrings })
      handleChange(dateStrings, 'endTime')
    }
  }
  // redux改变数据
  function handleChange(value: string, property: string) {
    const res = { ...info }

    res[property] = value
    const res2 = [...style.info]
    res2[props.selectModulesIndex] = res
    props.changeStyle('Work', 'info', res2)
  }
  return (
    <Fragment>
      <div className="w-full p-4">
        <ModelSetting
          handleOk={(newTitle: string) => {
            props.changeName('Work', newTitle)
            setIsModalOpen(false)
          }}
          title={name}
          visible={isModalOpen}
          handleCancel={() => {
            setIsModalOpen(false)
          }}
        ></ModelSetting>
        <div className="w-full h-5 mb-4  flex justify-between">
          <div
            onClick={() => {
              props.onSelect('')
            }}
          >
            <LeftOutlined />
            <span className="cursor-pointer">返回</span>
          </div>
          <div
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            <span>{name}</span>
            <EditOutlined />
          </div>
        </div>
        <div className="w-full">
          <div className="mt4">
            <div>项目名称</div>
            <Input
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value)
                handleChange(e.target.value, 'projectName')
                setInfo({ ...info, projectName: e.target.value })
              }}
              name="projectName"
            />
            <div>时间</div>
            <div className="flex justify-between">
              <DatePicker
                className="w-60"
                onChange={(date, dateString) => {
                  handledate(dateString, 'startTime')
                }}
                defaultValue={info.startTime ? moment(info.startTime, monthFormat) : undefined}
                format={monthFormat}
                picker="month"
              />
              <DatePicker
                className="w-60"
                onChange={(date, dateString) => {
                  handledate(dateString, 'endTime')
                }}
                defaultValue={info.endTime ? moment(info.endTime, monthFormat) : undefined}
                format={monthFormat}
                picker="month"
              />
            </div>

            <div>经历描述</div>
            <div className="w-full">
              {/* <textarea className='w-100 h-20' onChange={
                (e) => {
                  setInfo({ ...info, description: e.target.value })
                  handleChange(e.target.value, 'description')
                }
              } name="content" defaultValue={info.description}>
              </textarea> */}
              <MyEditor
                content={info.description}
                onChange={(val: string) => {
                  setInfo({ ...info, description: val })
                  handleChange(val, 'description')
                }}
              ></MyEditor>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
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
  changeName: (module: string, value: any) =>
    dispatch({
      type: 'NAME',
      payload: {
        module,
        value,
      },
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Work)
