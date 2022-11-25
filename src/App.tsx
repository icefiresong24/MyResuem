import { Provider } from 'react-redux'
import Router from './router/index'
import store from './store/index'
import './app.scss'
function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  )
}

export default App
