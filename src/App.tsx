import Router from "./router/index";
import store from "./store/index";
import  './app.scss'
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
}

export default App;
