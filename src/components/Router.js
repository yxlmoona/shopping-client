import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import React from 'react';
import Main from './main.js'
import Show from './show.js'


class Routers extends React.Component{
  render(){
    return(
      <Router>
        <div className="app-container">
          <nav>
            <Link to='/'>Home</Link>

          </nav>
          <Route path='/' exact component={Main}/>
          <Route path={`/${this.props.item.id}`} exact component={Show}/>

        </div>

      </Router>

    )
  }
}

const mapStateToProps = (state) => {
  return({
    item: state.items.item,
  })
}
export default connect(mapStateToProps,{})(Routers)
