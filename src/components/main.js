import React from 'react';

import { connect } from 'react-redux'
import { fetchItems } from '../actions/itemActions.js'
import PropTypes from 'prop-types'



class Main extends React.Component{
  componentDidMount(){
    this.props.fetchItems();
  }
  render(){
    return(
      <>
      {
        this.props.items.map((item) => {
          return(
            <div>
              <h3>{item.title}</h3>
              <img src={item.image}/>
            </div>
          )
        })
      }

      </>

    )
  }
}
const mapStateToProps = (state) => {
  return({
    items: state.items.items
  })
}
export default connect(mapStateToProps,{fetchItems})(Main);
