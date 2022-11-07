import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Fragment, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import type { Modules } from '../../types/type'
import ModelSetting from '@/hooks/ModelSetting'

function Apply(props: any) {
  const { style, name } = props.value.find((item: any) => {
    return item.component == 'Apply'
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [duty, setDuty] = useState(style.info.duty)
  const [salary, setSalary] = useState(style.info.salary)
  const [status, setStatus] = useState(style.info.status)
  function handleChange() {
    props.changeStyle('Apply', 'info', {
      duty,
      salary,
      status,
    })
  }

  return (
    <Fragment>
      <div className="w-full p-4">
        <ModelSetting
          handleOk={(newTitle: string) => {
            props.changeName('Apply', newTitle)
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
          <Button type="primary" shape="round" size="small" onClick={handleChange}>
            保存
          </Button>
        </div>
        <div className="w-full">
          <div>职位</div>
          <Input
            value={duty}
            onChange={(e) => {
              setDuty(e.target.value)
            }}
            name="duty"
          />
          <div>
            <div>薪资</div>
            <Input value={salary} onChange={e => setSalary(e.target.value)} name="salary" />
            <div>在职状态</div>
            <Input
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
              }}
              name="status"
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Apply)

