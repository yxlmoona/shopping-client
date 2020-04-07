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
        <div className='main-container'>
          <h3> Just Arrived </h3>
            <div className='main-section-container'>

          {
            this.props.newItems.map((item) => {
              return(
                <>
                  <div className='card'>
                    <img src={item.image}/>
                    <div className='card-body'>
                      <h5 id='new'>NEW</h5>
                      <h5>{item.brand.name}</h5>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>

        <div className='main-container'>
          <h3> Best Sellers </h3>
            <div className='main-section-container'>

            {
              this.props.popularItems.map((item) => {
                return(
                  <>
                    <div className='card'>

                      <img src={item.image}/>
                      <div className='card-body'>

                        <h5>{item.brand.name}</h5>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <div className='main-container'>

          <h3> Luxury For Her </h3>
            <div className='main-section-container'>
            {
              this.props.expensiveItems.map((item) => {
                return(
                  <>
                    <div className='card'>
                      <img src={item.image}/>
                      <div className='card-body'>
                        <h5>{item.brand.name}</h5>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>

      </>

    )
  }
}
const mapStateToProps = (state) => {
  return({
    items: state.items.items,
    newItems: state.items.newItems,
    popularItems: state.items.popularItems,
    expensiveItems: state.items.expensiveItems
  })
}
export default connect(mapStateToProps,{fetchItems})(Main);
