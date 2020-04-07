import { ADD_TO_CART } from  '../actions/types'



const initialState = {
  items: [],
  item: {
    itemMain:{},
    count: 0
  },
  total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      
      let item = {...state.item}
      item.itemMain = action.payload
      item.count = action.count
      return({
        ...state,
        items: [item, ...state.items],
        item: item,
        total: state.total + action.payload.price * action.count
    })

    default:
    return state

  }
}
export default cartReducer
