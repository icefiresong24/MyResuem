import { produce } from 'immer'
import { arrayMoveImmutable } from 'array-move'
import { createStore } from 'redux'
import data from './data'
interface Action {
  type: 'MOVE' | 'SHOW' | 'STYLE' | 'GLOBAL' | 'NAME'
  payload: any
}
const reducer = produce(
  (state = data, action: Action) => {
    const index = state.value.findIndex((item: any) => {
      return item.component == action.payload.module.component
    })
    switch (action.type) {
      case 'MOVE':
        const result = arrayMoveImmutable(state.value, action.payload.oldIndex, action.payload.newIndex)

        state.value = result
        break
      case 'STYLE':
        const { property, value } = action.payload

        state.value[index].style[property] = value
        break
      case 'SHOW':

        state.value[index].show = action.payload.checked
        break
      case 'NAME':

        state.value[index].name = action.payload.value
        break
      case 'GLOBAL':
        const { theme, color } = action.payload

        state.global[theme] = color
        break
      default:
        return state
    }
  },
)

const store = createStore(reducer)
export default store
