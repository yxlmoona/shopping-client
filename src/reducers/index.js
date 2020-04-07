import { combineReducers } from 'redux';
import itemReducer from './itemReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  items: itemReducer,
  cartItems: cartReducer
})
