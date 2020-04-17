import React from 'react'
import { connect } from 'react-redux'
import { register, signIn, changeUserView} from '../actions/userActions.js'


class UserForm extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        username:'',
        password:''
      }

    }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render(){
    return(
      <>
        <div className='modal'>
          <div className='modal-content'>
          <h1>{this.props.viewTitle}</h1>
          <form onSubmit={(e) => {
            if(this.props.view == 'signIn'){
              e.preventDefault()
              this.props.signIn(e,this.state)
            }else{
              this.props.register(e,this.state)
            }
          }}>
            <input onChange={this.onChange} type="text" placeholder="Username" value={this.state.username} id='username'/>
            <input onChange={this.onChange} type="password" placeholder="Password" value={this.state.password} id='password'/>
            <input type="submit"/>

          </form>
          <button onClick={() => {
            this.props.changeUserView('')
          }}>Cancel</button>

          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    items: state.items.items,
    view: state.users.userView,
    viewTitle: state.users.viewTitle

  })
}
export default connect(mapStateToProps,{ register, signIn,changeUserView })(UserForm);
