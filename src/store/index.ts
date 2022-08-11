import { arrayMoveImmutable } from "array-move";
import { createStore } from "redux";
import data from "./data";
import { Modules } from "../components/type";
import { json } from "node:stream/consumers";
type Action = {
  type: "MOVE" | "SHOW" | "STYLE";
  payload: any;
};
const reducer = (state = data, action: Action) => {
  switch (action.type) {
    case "MOVE":
      let result = arrayMoveImmutable(
        state.value,
        action.payload.oldIndex,
        action.payload.newIndex
      );

      return { value: result };
    case "STYLE":
      let { module, property, value } = action.payload;
      let index2 = state.value.findIndex((item: any) => {
        return item.component == module;
      });
      let result2 = JSON.parse(JSON.stringify(state));
      result2.value[index2].style[property] = value;

      return result2;
    case "SHOW":
      let index = state.value.findIndex((item: any) => {
        return item.component == action.payload.module.component;
      });

      if (index > -1) {
        let result = JSON.parse(JSON.stringify(state));
        result.value[index].show = action.payload.checked;
        return result;
      }
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;