import React from 'react'
import Rater from 'react-rater'
import { connect } from 'react-redux'
import { handleSubmitReview} from '../actions/itemActions.js'
import 'react-rater/lib/react-rater.css'


class ReviewForm extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        rating: 0,
        body: '',
      }

    }

  onChange = (e, itemId) => {
    this.setState({
      body: e.target.value,
    })
  }

  render(){
    return(
      <>

     <h3>Rate this product</h3>
        <Rater total={5} rating={this.state.rating} onRating={(rating) => {
          this.setState({
            rating: rating.rating
          })
        }} />

       <h3>Review</h3>
       <form onSubmit={(e) => {
         this.props.handleSubmitReview(e, this.state, this.props.brandId, this.props.itemId )
         this.setState({
           rating: 0,
           body: '',
         })
       }}>

          <input onChange={(e) => {
            this.onChange(e)
          }} type="text" placeholder="Write your review" value={this.state.body}/>
          <input type="hidden" value={this.state.rating}/>

          <input type="submit" value="submit"/>

        </form>
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return({
    brandId: state.items.item.brand.id,
    itemId: state.items.item.id,


  })
}
export default connect(mapStateToProps,{ handleSubmitReview })(ReviewForm);
