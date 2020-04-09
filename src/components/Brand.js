import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { showItem } from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'
import Sidebar from './Sidebar.js'
import Header from './Header.js'

class Brand extends React.Component{


  render(){
    return(
      <>
        <Header/>
        <div className='header-link'>
          <p><Link to={`/`}>home</Link> > brands > {this.props.brand.name}</p>
          <p> {this.props.brand.items.length} products</p>
        </div>
        <div className='makeup'>

          <Sidebar/>

          <div className='makeup-container'>

          {
            this.props.brand.items.map((makeup) => {
              return(
                <>
                <Link to={`/${makeup.id}`}>
                  <div onClick={() => {
                    return(
                    this.props.showItem(makeup)
                    )
                  }} className='makeup-card'>
                    <img src={makeup.image}/>
                    <div className='card-body'>

                      <h5>{makeup.brand.name}</h5>
                      <p>{makeup.title}</p>
                      <p>${makeup.price}.00</p>
                    </div>
                  </div>
                </Link>

                </>
              )
            })
          }
          </div>
        </div>


      </>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    allMakeup: state.items.allMakeup,
    brands: state.brands.brands,
    brand: state.brands.brand
  })
}
export default connect(mapStateToProps,{showItem, showBrand})(Brand);
