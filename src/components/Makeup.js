import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { showItem } from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'

import Brand from './Brand.js'


import Header from './Header.js'

class Makeup extends React.Component{


  render(){
    return(
      <>
        <Header/>
        <div className='header-link'>
          <p><Link to={`/`}>home</Link> > allMakeup</p>
          <p> {this.props.allMakeup.length} products</p>
        </div>
        <div className='makeup'>
          <div className='makeup-sidebar'>
            <h5>See all ({this.props.allMakeup.length})</h5>
            <h5>Search by type (3)</h5>
            <div className='makeup-type'>

              <p>Eye</p>
              <p>Face</p>
              <p>Lip</p>
            </div>
            <h5>Search by category (2)</h5>
            <div className='makeup-type'>

            <Link to='/skincare'><p>Skincare</p></Link>
            <Link to='/makeup'><p>Makeup</p></Link>

            </div>
            <h5>Search by brand ({this.props.brands.length})</h5>
            <div className='makeup-type'>

              {
                this.props.brands.map((brand) => {
                  return(
                    <div>

                    <Link to={`/${brand}`}>
                    <p onClick={() => {

                      return(
                        this.props.showBrand(brand)
                      )
                    }}>{brand}</p>
                    </Link>

                    </div>
                  )
                })
              }

            </div>
          </div>
          <div className='makeup-container'>

          {
            this.props.allMakeup.map((makeup) => {
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
    brands: state.items.makeupBrands,
  })
}
export default connect(mapStateToProps,{showItem, showBrand})(Makeup);
