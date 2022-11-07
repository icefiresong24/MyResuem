import { arrayMoveImmutable } from 'array-move'
import { createStore } from 'redux'
import data from './data'
interface Action {
  type: 'MOVE' | 'SHOW' | 'STYLE' | 'GLOBAL' | 'NAME'
  payload: any
}
const reducer = (state = data, action: Action) => {
  switch (action.type) {
    case 'MOVE':
      const result = arrayMoveImmutable(
        state.value,
        action.payload.oldIndex,
        action.payload.newIndex,
      )

      return { value: result, global: state.global }
    case 'STYLE':
      const { module, property, value } = action.payload
      const index2 = state.value.findIndex((item: any) => {
        return item.component == module
      })
      const result2 = JSON.parse(JSON.stringify(state))
      result2.value[index2].style[property] = value

      return result2
    case 'SHOW':
      const index = state.value.findIndex((item: any) => {
        return item.component == action.payload.module.component
      })

      if (index > -1) {
        const result = JSON.parse(JSON.stringify(state))
        result.value[index].show = action.payload.checked

        return result
      }
      break
    case 'NAME':
      console.log(22)

      const index3 = state.value.findIndex((item: any) => {
        return item.component == action.payload.module
      })

      if (index3 > -1) {
        const result = JSON.parse(JSON.stringify(state))
        result.value[index3].name = action.payload.value
        console.log(result.value[index3])

        return result
      }
      break
    case 'GLOBAL':
      const { theme, color } = action.payload

      const result3 = JSON.parse(JSON.stringify(state))
      result3.global[theme] = color

      return result3

    default:
      return state
  }
}
const store = createStore(reducer)
export default store
