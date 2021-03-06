import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import React from 'react';
import Main from './main.js'
import Show from './show.js'
import Cart from './cart.js'
import Makeup from './Makeup.js'
import Skincare from './Skincare.js'
import Brand from './Brand.js'
import Elf from './Elf.js'



class Routers extends React.Component{
  render(){
    return(
      <Router>
        <div className="app-container">
          <nav>

          </nav>
          <Route path='/' exact component={Main}/>
          <Route path={`/${this.props.item.id}`} component={Show}/>

          <Route path='/cart'  component={Cart}/>


          <Route path='/makeup'  component={Makeup}/>
          <Route path='/skincare'  component={Skincare}/>

          <Route path={`/${this.props.brand.name}`}  component={Brand}/>
          <Route path='/sale'  component={Elf}/>
          <Route path='/eye'  component={Elf}/>
          <Route path='/face'  component={Elf}/>
          <Route path='/lip'  component={Elf}/>

          <Route path='/search'  component={Elf}/>





        </div>

      </Router>

    )
  }
}

const mapStateToProps = (state) => {
  return({
    item: state.items.item,
    brand: state.brands.brand,
    
  })
}
export default connect(mapStateToProps,{})(Routers)
