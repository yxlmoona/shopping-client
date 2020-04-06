import React from 'react';
import { Provider } from 'react-redux'
import store from './store.js'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <h1>hi</h1>
      </Provider>
    )
  }
}
export default App;
