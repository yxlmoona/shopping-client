import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchItems, showItem } from '../actions/itemActions.js'
import PropTypes from 'prop-types'
import Show from './show.js'
import Header from './Header.js'
import HeaderMain from './HeaderMain.js'
import { fetchBrands } from '../actions/brandActions.js'


class Main extends React.Component{
  componentDidMount(){

    this.props.fetchItems();
    this.props.fetchBrands();

  }
  render(){
    return(
      <>
      <Header/>
      <HeaderMain/>
      <div className='main-container'>
          <h3> Just Arrived </h3>

            <div className='main-section-container'>

          {
            this.props.newItems.map((item) => {
              return(
                <div className='main'>
                <Link to={`/${item.id}`}>
                  <div onClick={() => {
                    return(
                    this.props.showItem(item)
                    )
                  }} className='card'>
                    <img src={item.image}/>
                    <div className='card-body'>
                      <h5 id='new'>NEW</h5>
                      <h5>{item.brand.name}</h5>
                      <p>{item.title}</p>
                      <p>${item.price}.00</p>

                    </div>
                  </div>
                </Link>
                </div>
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
                  <Link to={`/${item.id}`}>
                    <div onClick={() => {
                      return(
                      this.props.showItem(item)
                      )
                    }} className='card'>

                      <img src={item.image}/>
                      <div className='card-body'>

                        <h5>{item.brand.name}</h5>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Link>
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
                  <Link to={`/${item.id}`}>
                    <div onClick={() => {
                      return(
                      this.props.showItem(item)
                      )
                    }}className='card'>
                      <img src={item.image}/>
                      <div className='card-body'>
                        <h5>{item.brand.name}</h5>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Link>
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
    expensiveItems: state.items.expensiveItems,

  })
}
export default connect(mapStateToProps,{fetchItems, fetchBrands,showItem})(Main);
