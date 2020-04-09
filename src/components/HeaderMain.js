import React from 'react'
import { Link } from "react-router-dom";

class HeaderMain extends React.Component{
  render(){
    return(
      <>
        
        <div className='header-main'>
          <h6>SHOP YOUR PRODUCTS</h6>

          <div className='header-main-bottom'>
          <div className='header-main-makeup'>
            <div className='header-main-inner1'>
            <h1>MAKEUP</h1>
            </div>
          </div>
          <div className='header-main-skin'>
            <div className='header-main-inner2'>
            <h1>SKINCARE</h1>
            </div>
          </div>
          </div>
        </div>

      </>
    )
  }
}

export default HeaderMain
