import { Button, DatePicker, Input } from 'antd'
import { connect } from 'react-redux'

import moment from 'moment'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import { Fragment } from 'react'
import type { Modules } from '../../types/type'
import MyEditor from '../myEditor'
import ModelSetting from '@/hooks/ModelSetting'
function Internship(props: any) {
  const monthFormat = 'YYYY年MM月'

  const { style, name } = props.value.find((item: any) => {
    return item.component == 'Internship'
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [company, setCompany] = useState(style.info[props.selectModulesIndex].company)
  const [info, setInfo] = useState(style.info[props.selectModulesIndex])
  const [projectDetail, setProjectDetail] = useState(style.info[props.selectModulesIndex].duty)
  useEffect(() => {
    handleChange(projectDetail, 'duty')
  }, [projectDetail])
  function handledate(dateStrings: string, property: string) {
    if (property == 'startTime') {
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
    props.changeStyle('Internship', 'info', res2)
  }
  return (
    <Fragment>
      <div className="w-full p-4">
        <ModelSetting
          handleOk={(newTitle: string) => {
            props.changeName('Internship', newTitle)
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
          <div>&nbsp;</div>
        </div>
        <div className="w-full">
          <div className="mt4">
            <div>项目名称</div>
            <Input
              value={company}
              onChange={(e) => {
                setCompany(e.target.value)
                handleChange(e.target.value, 'company')
              }}
              name="company"
            />
            <div>时间</div>
            <div className="flex justify-between">
              <DatePicker
                className="w-60"
                onChange={(date, dateString) => {
                  handledate(dateString, 'startTime')
                }}
                defaultValue={moment(info.startTime, monthFormat)}
                format={monthFormat}
                picker="month"
              />
              <DatePicker
                className="w-60"
                onChange={(date, dateString) => {
                  handledate(dateString, 'endTime')
                }}
                defaultValue={moment(info.endTime, monthFormat)}
                format={monthFormat}
                picker="month"
              />
            </div>

            <div>经历描述</div>
            <div className="w-full">
              <MyEditor
                content={projectDetail}
                onChange={(val: string) => {
                  setProjectDetail(val)
                }}
              ></MyEditor>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            type="primary"
            shape="round"
            onClick={() => {
              // setInfo((pre: unknown[]) => {
              //   let info = JSON.parse(JSON.stringify(pre));
              //   info.splice(index, 1);
              //   return info;
              // });
            }}
          >
            删除
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Internship)
