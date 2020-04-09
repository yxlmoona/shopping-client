import React from 'react'
import { Link } from "react-router-dom";
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
              <img src="https://img.icons8.com/plasticine/100/000000/favorite-cart.png"/>
            </div>
            <div className='nav-link'>
              <Link to='/'>HOME</Link>
              <Link to='/'>BRANDS</Link>
              <Link to='/'>GIFT</Link>
              <Link to='/'>SALE</Link>
              <Link to='/cart'>Cart</Link>
            </div>
          </div>
        </div>


      </>
    )
  }
}

export default Header
