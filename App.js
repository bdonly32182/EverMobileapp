import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Navigate from './Navigate';
import reducers from './src/reducer';
const store = createStore(reducers,{},applyMiddleware(reduxThunk))
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigate />
      </Provider>

    )
  }
}

export default App


