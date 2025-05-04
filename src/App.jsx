import { Provider } from 'react-redux'
import store from './Store/Store'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

axios.defaults({
 credentials : true
})


function App() {
  
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  )
}

export default App
