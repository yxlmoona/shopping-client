import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleChange, handleRemove} from '../actions/cartActions.js'


class Cart extends React.Component{

  render(){
    return(
      <>

        <h1>My Basket</h1>
        {
          100-this.props.total > 0
          ? <h3>You're only ${100-this.props.total} away from FREE SHIPPING.</h3>
          : <h3>You now qualify for free shipping </h3>
        }

        <div>
          <p>Get 2 free samples with every order</p>
          <p>Sign In to see your Membership points & redeem your rewards</p>
        </div>
        <div>
          <h3>Items in basket</h3>
          <div>
          {

            this.props.items.map((item, key) => {
              return(
                <div key={item.id}>
                  <div className='cart-container'>
                    <div className='cart-container-left'>
                      <img src={item.itemMain.image}/>
                      <div>
                      <h3>{item.itemMain.brand.name}</h3>
                      <p>{item.itemMain.title}</p>
                      </div>
                    </div>
                    <div className='cart-container-right'>
                      <form>
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
                      <h3>{item.itemMain.price * item.count}</h3>
                      <div>
                        <h6>MOVE TO LOVES |</h6>
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

        <div>
        <p>Merchandise subtotal: {this.props.total}</p>
        <p>Shipping & Handling: Free</p>
        <p>Tax: TBD</p>

        <h3>Estimated Total: {this.props.total}</h3>
        <form>
          <input type="submit" value="CHECKOUT"/>
        </form>
        </div>
      </>
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


export default connect(mapStateToProps,{handleChange, handleRemove})(Cart)
