import { ADD_TO_CART } from './types.js'
export const addToCart = (e, addItem, count) => {
  
  e.preventDefault()
  return(
    (dispatch) => {

      dispatch({
        type: ADD_TO_CART,
        payload: addItem,
        count: count
      })
    }
  )
}
