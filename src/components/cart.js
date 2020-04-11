import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleChange, handleRemove} from '../actions/cartActions.js'
import { showItem } from '../actions/itemActions.js'

import { Link } from "react-router-dom";
import Header from './Header.js'



class Cart extends React.Component{

  render(){
    return(
      <div className='cart'>
        <Header/>
        <h3>My Basket</h3>
        {
          100-this.props.total > 0
          ? <h3>You're only ${100-this.props.total} away from FREE SHIPPING.</h3>
          : <h3>You now qualify for free shipping </h3>
        }
        <div className='cart-container-'>
          <div className='cart-left'>
            <div className='cart-decoration'>
              <p>Get 2 free samples with every order</p>
              <p>Sign In to see your Membership points & redeem your rewards</p>
            </div>
            <div className='cart-main-outer'>
              <h3>Items in basket</h3>
              <div className='cart-main-inner'>
              {

                this.props.items.map((item, key) => {
                  return(
                    <div key={item.id}>
                      <div className='cart-container'>
                      <Link to={`/${item.itemMain.id}`}>
                        <div onClick = {() => {
                          this.props.showItem(item.itemMain)
                        }} className='cart-container-left'>
                          <img src={item.itemMain.image}/>
                          <div>
                          <h3>{item.itemMain.brand.name}</h3>
                          <p>{item.itemMain.title}</p>
                          </div>
                        </div>
                        </Link>
                        <div className='cart-container-right'>
                          <div className='cart-right-top'>
                            <div>
                              <form >
                                <select onChange={(e) => {
                                  this.props.handleChange(e, item)
                                }} value={item.count}>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </form>
                            </div>

                            {
                              item.itemMain.sprice
                              ?  (<div><h3 id='sprice'>{`$${item.itemMain.sprice}.00`}</h3>
                                  <h3 id = 'price'>{`$${item.itemMain.price}.00`}</h3></div>)
                              : <h3>{`$${item.itemMain.price}.00`}</h3>
                            }



                          </div>
                          <div>
                            <h6>MOVE TO LOVES </h6>
                            <h6 onClick={() => {
                              this.props.handleRemove(item)
                            }}> REMOVE</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>

          <div className='cart-checkout'>
            <div className='cart-checkout-top'>
              <p>Merchandise subtotal:  ${this.props.total}.00  </p>
              <p>Shipping & Handling:  Free</p>
              <p>Tax: TBD</p>
            </div>
            <h3>Estimated Total:      <br/>${this.props.total}.00</h3>
            <form className='checkout-form'>
              <input type="submit" value="CHECKOUT"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    items: state.cartItems.items,
    item: state.cartItems.item,
    total: state.cartItems.total
  })
}


export default connect(mapStateToProps,{handleChange, handleRemove, showItem})(Cart)
