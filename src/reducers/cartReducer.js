import { ADD_TO_CART, HANDLE_CHANGE} from  '../actions/types'



const initialState = {
  items: [],
  item: {
    itemMain:{},
    count: 0
  },
  total: 0
}

const cartReducer = (state = initialState, action) => {
  let item = {...state.item}

  switch (action.type) {
    case ADD_TO_CART:
      item.itemMain = action.payload
      item.count = action.count

      return({
        ...state,
        items: [item, ...state.items],
        item: item,
        total: parseInt(state.total + action.count * action.payload.price)
    })

    case HANDLE_CHANGE:
    item.itemMain = action.editItem
    item.count = action.newCount

    let foundIndex = state.items.findIndex(item => item.itemMain.id == action.editItem.itemMain.id)

    let copyItems = [...state.items]
    copyItems[foundIndex].count = action.newCount
    let tempTotal = 0
    state.items.map((item) => {
      tempTotal = tempTotal + parseInt(item.count * item.itemMain.price)
      return(tempTotal)
    })
    return({
      ...state,
      item: item,
      items: copyItems,
      total: tempTotal

    })

    default:
    return state

  }
}
export default cartReducer
