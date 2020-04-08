import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToCart } from '../actions/cartActions.js'

class Show extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  render(){
    return(
      <>
      <p>{this.props.item.category1} > {this.props.item.category2} > {this.props.item.title} </p>
      <div className='show-container'>
        <img src={this.props.item.image}/>
        <div>
          <h3>{this.props.item.brand.name}</h3>
          <h4>{this.props.item.title}</h4>
          <h5>XXreviews | ❤️ xx loves</h5>

        </div>
        <div>
          <h5>{`$${this.props.item.price}`}</h5>
          <h5>SPEND $100 FOR FREE SHIPPING</h5>
          <form onSubmit={(e) => {
            this.props.addToCart(e, this.props.item, parseInt(this.state.value))
          }}>
            <select count={this.state.value} onChange={this.handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <input type="submit" value='ADD TO BASKET'/>
          </form>
          <button>♡  ADD TO LOVES</button>
        </div>

      </div>
      <p>{this.props.item.body}</p>
      <h3>Ratings & Reviews</h3>
      <div>
        {this.props.item.reviews.map((review) => {
          return(
            <div>
              <h6>{review.body}  {review.rating}</h6>

            </div>

          )
        })}

      </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    item: state.items.item,
  })
}


export default connect(mapStateToProps,{addToCart})(Show)
