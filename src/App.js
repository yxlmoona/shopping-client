import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store.js'
import Routers from './components/Router.js'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>

      <Routers/>
      </Provider>

    )
  }
}


export default App;
