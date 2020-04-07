import { FETCH_ITEMS } from  '../actions/types'

const initialState = {
  items: [],
  item: {}
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return({
        ...state,
        items: action.payload
      })


    default:
    return state

  }
}
 export default itemReducer
