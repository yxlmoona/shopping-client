import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { handleView} from '../actions/itemActions.js'
import { showBrand } from '../actions/brandActions.js'
import { register, changeUserView } from '../actions/userActions.js'
import UserForm from './userForm.js'
import { Redirect } from 'react-router-dom'
import Elf from './Elf.js'



class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: '',
      submit: false,
      text: 0,
      textArray: ['Free Shipping with $100 purchase', 'Welcome to MoMoKo', 'Pick 2 Free Sample With Any Purchase', 'MoMoko Credit Card. Apply Today >']
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.switchText()
    }, 2000);
  }

  switchText = () => {
    if(this.state.text < this.state.textArray.length - 1){
      this.setState({
        text: this.state.text + 1
      })
    }else{
      this.setState({
        text: 0
      })
    }
  }



  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render(){
    return(
      <>
      {
        this.state.submit ?
        <Redirect to='/search' />
        : ''
      }
        <div className='header-nav'>

          <div className='nav-top'>
            <p>{this.state.textArray[this.state.text]}</p>
            <div className='nav-top-right'>

              <img src="https://img.icons8.com/ios-glyphs/30/000000/truck.png"/>
              <p>Track Order</p>

              <img src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png"/>
              <p>Find a Store</p>

              <img src="https://img.icons8.com/wired/64/000000/bookmark-ribbon.png"/>
              <p>Book a Reservation</p>
            </div>
          </div>

          <div className='nav-main'>
            <div className='nav-main-top'>
              <form onSubmit={(e) => {
                e.preventDefault()
                this.props.handleView(this.state.search)
                this.setState({
                  submit: true,
                  search:''
                })
              }}>
                <input onChange={this.handleChange} type="text" placeholder="Search.." value={this.state.search}/>
              </form>
              <h1>M O M O K O</h1>
              {
                this.props.view == ''
                ?''
                :<UserForm/>
              }

              <h4>Hi,Welcome!  </h4>
              <h5>
              <span onClick={() => {
                this.props.changeUserView('signIn')
              }}>Sign in</span> or
              <span onClick={() => {
                this.props.changeUserView('register')
              }}> Register</span></h5>
              <Link to='/cart'>
              <img src="https://img.icons8.com/plasticine/100/000000/favorite-cart.png"/>
              </Link>
            </div>
            <div className='nav-link'>
              <Link to='/'>HOME</Link>


              <div className='dropdown'>
                <Link to='/'><span>SHOP</span></Link>
                <div className='dropdown-content'>
                  <div>
                    <h3>shop by category</h3>
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
                  <div>
                    <h3>shop by brands</h3>

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
                  <div>
                    <Link to='/makeup'>
                      <img src='https://www.sephora.com/contentimages/meganav/large/2019-01-30-global-nav-lg-pillowtalk-us-ca-d-slice.jpg?imwidth=221'/>
                    </Link>
                  </div>
                  <div>
                    <Link to='/skincare'>
                      <img src='https://www.sephora.com/contentimages/meganav/large/2020-02-03-global-nav-mbc-lg-us-d-slice.jpg?imwidth=221'/>
                    </Link>

                  </div>

                </div>

              </div>


              <Link to='/'>GIFT</Link>
              <Link to='/sale' onClick={() => {
                this.props.handleView('sale')
              }}>SALE</Link>
              <Link to='/cart'>Busket ({this.props.cart.length})</Link>
            </div>
          </div>
        </div>


      </>
    )
  }
}
const mapStateToProps = (state) => {
  return({
    view: state.users.userView,
    // viewTitle: state.users.viewTitle,
    brands: state.brands.brands,
    cart: state.cartItems.items
  })
}
export default connect(mapStateToProps,{handleView,showBrand,register,changeUserView})(Header);
