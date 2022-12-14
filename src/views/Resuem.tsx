import { connect } from 'react-redux'
import Apply from '../components/section/Apply'
import Skill from '../components/section/Skill'
import Work from '../components/section/Work'
import Education from '../components/section/Education'
import Basic from '../components/section/Basic'
import Internship from '../components/section/Internship'
import School from '../components/section/School'
import Info from '../components/section/Info'
import type { Modules } from '../types/type'

const Element: any = function switchComponent({ name, info, style, global, onSelect, data }: any) {
  switch (name) {
    case 'Basic':
      return <Basic info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'Apply':
      return <Apply info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'Work':
      return <Work info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'Education':
      return <Education info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'Internship':
      return <Internship info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'School':
      return <School info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'Info':
      return <Info info={info} style={style} global={global} data={data} onSelect={onSelect} />
    case 'Skill':
      return <Skill info={info} style={style} global={global} data={data} onSelect={onSelect} />
  }
}
function Resuem(props: any) {
  return (
    <div className="relative ">
      <div className="w-148.5     text-dark-400  px-10 bg-light-100" id="pdf">
        {props.value.map((item: any, index: number) => {
          if (item.show) {
            return (
              <div
                // onClick={() => {
                //   props.onSelect(item.component,index);
                // }}
                key={index}
                // className="hover:border border-green-400 border-dashed"
                style={{ marginBottom: props.global.margin }}
              >
                <Element onSelect={props.onSelect} name={item.component} info={item.info} style={item.style} global={props.global} data={item} />
              </div>
            )
          }
          else {
            return null
          }
        })}
      </div>
      {new Array(props.page).fill(' ').map((item: any, index: number) => {
        return (
          <div key={index} style={{ top: (index + 1) * 841 }} className=" absolute w-full h-0.25  bg-gray-400 ">
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state: Modules) => {
  return {
    value: state.value,
    global: state.global,
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  updateArray: () => dispatch({ type: 'SHOW', payload: 3 }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Resuem)
