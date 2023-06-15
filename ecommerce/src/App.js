import React from 'react'
import Routess from './Routes'
import { store } from "./component/Reducers/store"
import { Provider } from 'react-redux'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routess />


      </Provider>

    </>
  )
}


export default App