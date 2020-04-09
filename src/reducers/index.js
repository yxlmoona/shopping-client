import { combineReducers } from 'redux';
import itemReducer from './itemReducer'
import cartReducer from './cartReducer'
import brandReducer from './brandReducer'

export default combineReducers({
  items: itemReducer,
  cartItems: cartReducer,
  brands: brandReducer
})
