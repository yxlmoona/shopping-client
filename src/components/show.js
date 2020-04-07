import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class Show extends React.Component{
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
          <h5>SPEND $50 FOR FREE SHIPPING</h5>
          <form>
            <select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <input type="submit" value='ADD TO BASKET'/>
          </form>
        </div>

      </div>
      <p>{this.props.item.body}</p>
      <h3>Ratings & Reviews</h3>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    item: state.items.item,
  })
}


export default connect(mapStateToProps,{})(Show)
