import React from 'react';
import { Provider } from 'react-redux'
import store from './store.js'
import Main from './components/main.js'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <h1>hi</h1>
      <Main/>
      </Provider>
    )
  }
}
export default App;
