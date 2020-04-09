import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import React from 'react';
import Main from './main.js'
import Show from './show.js'
import Cart from './cart.js'



class Routers extends React.Component{
  render(){
    return(
      <Router>
        <div className="app-container">
          <nav>
            {
            //   <Link to='/'>Home</Link>
            //
            // <Link to='/cart'>Cart</Link>
          }


          </nav>
          <Route path='/' exact component={Main}/>
          <Route path={`/${this.props.item.id}`} component={Show}/>

          <Route path='/cart'  component={Cart}/>



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
