import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { showItem, handleView } from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'
import Header from './Header.js'

class Elf extends React.Component{


  render(){
    return(
      <>
        <Header/>
        <div className='header-link'>
          <p><Link to={`/`}>home</Link> > eye </p>
          <p> {this.props.items.length} products</p>
        </div>
        <div className='makeup'>

        <div className='makeup-sidebar'>
          <h5>See all ({this.props.items.length})</h5>
          <h5>Search by type (3)</h5>
          <div className='makeup-type'>
            <Link to={`/eye`}>
              <p onClick={() => {
                this.props.handleView('eye')
              }}>Eye</p>
            </Link>
            <Link to={`/face`}>
              <p onClick={() => {
                this.props.handleView('face')
              }}>Face</p>
            </Link>
            <Link to={`/lip`}>
              <p onClick={() => {
                this.props.handleView('lip')
              }}>Lip</p>
            </Link>
          </div>
          <h5>Search by category (2)</h5>

          <div className='makeup-type'>

            <Link to='/skincare'><p>Skincare</p></Link>
            <Link to='/makeup'><p>Makeup</p></Link>

          </div>
          <h5>Search by brand ({this.props.brands.length})</h5>
          <div className='makeup-type'>

            {
              this.props.brands.map((brand) => {
                return(
                  <div>

                  <Link to={`/${brand.name}`}>
                  <p onClick={() => {

                    return(
                      this.props.showBrand(brand.name)
                    )
                  }}>{brand.name}</p>
                  </Link>

                  </div>
                )
              })
            }

          </div>
        </div>

          <div className='makeup-container'>

          {
            this.props.items.map((makeup) => {
              return(
                <>
                <Link to={`/${makeup.id}`}>
                  <div onClick={() => {
                    return(
                    this.props.showItem(makeup)
                    )
                  }} className='makeup-card'>
                    <img src={makeup.image}/>
                    <div className='card-body'>

                      <h5>{makeup.brand.name}</h5>
                      <p>{makeup.title}</p>
                      <p>${makeup.price}.00</p>
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
    brands: state.brands.brands,
    items: state.items.itemView
  })
}
export default connect(mapStateToProps,{showItem, showBrand,handleView})(Elf);
