import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToCart } from '../actions/cartActions.js'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import ReviewForm from './reviewForm.js'
import Header from './Header.js'
class Show extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: 1,
      showForm: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  render(){
    return(
      <>
      <Header/>
      <p>{this.props.item.category1} > {this.props.item.category2} > {this.props.item.title} </p>
      <div className='show-container'>
        <img src={this.props.item.image}/>
        <div>
          <h3>{this.props.item.brand.name}</h3>
          <h4>{this.props.item.title}</h4>
          <h5>{this.props.item.reviews.length}  reviews | ❤️ xx loves</h5>

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
      <button onClick={() => {
        this.toggleForm()
      }}>ADD A REVIEW</button>
      {
        this.state.showForm
        ? <ReviewForm/>
        :''

      }

      <div>
        {this.props.reviews.map((review) => {
          return(
            <div>
              <h6>{review.body}  </h6>
              <Rater total={5} rating={review.rating} interactive={false}/>
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
    reviews: state.items.item.reviews
  })
}


export default connect(mapStateToProps,{addToCart})(Show)
