import { ADD_TO_CART, HANDLE_CHANGE } from './types.js'
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

export const handleChange = (e, editItem) => {
  return(
    (dispatch) => {
      dispatch({
        type: HANDLE_CHANGE,
        newCount: e.target.value,
        editItem: editItem

      })
    }
  )
}
