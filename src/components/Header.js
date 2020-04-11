import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { handleView} from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'

class Header extends React.Component{
  render(){
    return(
      <>
        <div className='header-nav'>

          <div className='nav-top'>
            <p>Free Shipping with $100 purchase</p>
            <div className='nav-top-right'>

              <img src="https://img.icons8.com/ios-glyphs/30/000000/truck.png"/>
              <p>Track Order</p>

              <img src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png"/>
              <p>Find a Store</p>

              <img src="https://img.icons8.com/wired/64/000000/bookmark-ribbon.png"/>
              <p>Book a Reservation</p>
            </div>
          </div>

          <div className='nav-main'>
            <div className='nav-main-top'>
              <input type="text" placeholder="Search.."/>
              <h1>S E P H O R A</h1>
              <h4>Hi,Welcome</h4>
              <Link to='/cart'>
              <img src="https://img.icons8.com/plasticine/100/000000/favorite-cart.png"/>
              </Link>
            </div>
            <div className='nav-link'>
              <Link to='/'>HOME</Link>


              <div className='dropdown'>
                <Link to='/'><span>SHOP</span></Link>
                <div className='dropdown-content'>
                  <div>
                    <h3>shop by category</h3>
                    <Link to={`/eye`}>
                      <p onClick={() => {
                        this.props.handleView('eye')
                      }}>Eye</p>
                    </Link>
                    <Link to={`/face`}>
                      <p onClick={() => {
                        this.props.handleView('face')
                      }}>Face</p>
                    </Link>
                    <Link to={`/lip`}>
                      <p onClick={() => {
                        this.props.handleView('lip')
                      }}>Lip</p>
                    </Link>
                  </div>
                  <div>
                    <h3>shop by brands</h3>

                    {
                    this.props.brands.map((brand) => {
                      return(
                        <p>

                        <Link to={`/${brand.name}`}>
                        <p onClick={() => {

                          return(
                            this.props.showBrand(brand.name)
                          )
                        }}>{brand.name}</p>
                        </Link>

                        </p>
                      )
                    })
                    }


                  </div>
                  <div>
                    <Link to='/makeup'>
                      <img src='https://www.sephora.com/contentimages/meganav/large/2019-01-30-global-nav-lg-pillowtalk-us-ca-d-slice.jpg?imwidth=221'/>
                    </Link>
                  </div>
                  <div>
                    <Link to='/skincare'>
                      <img src='https://www.sephora.com/contentimages/meganav/large/2020-02-03-global-nav-mbc-lg-us-d-slice.jpg?imwidth=221'/>
                    </Link>

                  </div>

                </div>

              </div>


              <Link to='/'>GIFT</Link>
              <Link to='/sale' onClick={() => {
                this.props.handleView('sale')
              }}>SALE</Link>
              <Link to='/cart'>Cart</Link>
            </div>
          </div>
        </div>


      </>
    )
  }
}
const mapStateToProps = (state) => {
  return({

    brands: state.brands.brands,
  })
}
export default connect(mapStateToProps,{handleView,showBrand})(Header);
