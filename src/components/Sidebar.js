import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { showItem } from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'


class Sidebar extends React.Component{


  render(){
    return(
      <>


          <div className='makeup-sidebar'>
            <h5>See all ({this.props.brand.items.length})</h5>
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

                    <Link to={`/${brand.name}`}>
                    <p onClick={() => {

                      return(
                        this.props.showBrand(brand.name)
                      )
                    }}>{brand.name}</p>
                    </Link>

                    </div>
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
export default connect(mapStateToProps,{showItem, showBrand})(Sidebar);
