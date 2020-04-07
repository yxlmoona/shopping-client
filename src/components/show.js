import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class Show extends React.Component{
  render(){
    return(
      <>
        <h1>{this.props.item.title}</h1>

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
