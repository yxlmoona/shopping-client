import { REGISTER, SIGN_IN, CHANGE_USER_VIEW } from  '../actions/types'


const initialState = {
  username: '',
  userView: '',
  viewTitle:''
   // history:[]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_VIEW:
      let viewTitle = ''
      let userView = action.payload
      if(action.payload == 'register'){
        viewTitle = 'Register New User'
      }else if(action.payload == 'signIn'){
        viewTitle = 'Return User, Please Sign In'
      }else{
        viewTitle = 'Opps'

      }
      return({
        ...state,
        userView: userView,
        viewTitle: viewTitle
      })

    default:
    return state
  }
}
export default userReducer
