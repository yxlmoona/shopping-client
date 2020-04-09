import React from 'react'
import { Link } from "react-router-dom";
import Header from './Header.js'
import { connect } from 'react-redux'
import { showItem } from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'

class Skincare extends React.Component{
  render(){
    return(
      <>
        <Header/>
        <div className='header-link'>
          <p><Link to={`/`}>home</Link> > allSkincare</p>
          <p> {this.props.allSkincare.length} products</p>
        </div>
        <div className='makeup'>
          <div className='makeup-sidebar'>
            <h5>See all ({this.props.allSkincare.length})</h5>
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
            this.props.allSkincare.map((skincare) => {
              return(
                <>
                <Link to={`/${skincare.id}`}>
                  <div onClick={() => {
                    return(
                    this.props.showItem(skincare)
                    )
                  }} className='makeup-card'>
                    <img src={skincare.image}/>
                    <div className='card-body'>

                      <h5>{skincare.brand.name}</h5>
                      <p>{skincare.title}</p>
                      <p>${skincare.price}.00</p>
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
    allSkincare: state.items.allSkincare,
    brands: state.items.skincareBrands,
    allBrands: state.brands.brands
  })
}
export default connect(mapStateToProps,{showItem, showBrand})(Skincare);
