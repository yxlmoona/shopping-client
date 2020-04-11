import { ADD_TO_CART, HANDLE_CHANGE, HANDLE_REMOVE } from  '../actions/types'



const initialState = {
  items: [],
  item: {
    itemMain:{},
    count: 0
  },
  total: 0,

}

const cartReducer = (state = initialState, action) => {
  let item = {...state.item}
  let tempTotal = 0
  let copyItems = [...state.items]
  let foundIndex = 0
  switch (action.type) {
    case ADD_TO_CART:

      for(let item of state.items){
        if(item.itemMain.id == action.payload.id){
          item.itemMain = action.payload
          item.count = item.count + action.count
          return({
            ...state,
            items: [...state.items],
            item: item,
            total: parseInt(state.total + action.count * action.price)
          })
        }
      }

      item.itemMain = action.payload
      item.count = action.count

      return({
        ...state,
        items: [item, ...state.items],
        item: item,
        total: parseInt(state.total + action.count * action.price)
    })

    case HANDLE_CHANGE:
    item.itemMain = action.editItem
    item.count = action.newCount

    foundIndex = state.items.findIndex(item => item.itemMain.id == action.editItem.itemMain.id)

    // let copyItems = [...state.items]
    copyItems[foundIndex].count = action.newCount

    copyItems.map((item) => {
      if(item.itemMain.sprice == null) {
      tempTotal = tempTotal + parseInt(item.count * item.itemMain.price)
      return(tempTotal)
    }else{
      tempTotal = tempTotal + parseInt(item.count * item.itemMain.sprice)
      return(tempTotal)
    }
    })
    return({
      ...state,
      item: item,
      items: copyItems,
      total: tempTotal

    })

    case HANDLE_REMOVE:
    foundIndex = state.items.findIndex(item => item.itemMain.id == action.removeItem.itemMain.id)
    copyItems.splice(foundIndex, 1)
    copyItems.map((item) => {
      if(item.itemMain.sprice == null) {
      tempTotal = tempTotal + parseInt(item.count * item.itemMain.price)
      return(tempTotal)
    }else{
      tempTotal = tempTotal + parseInt(item.count * item.itemMain.sprice)
      return(tempTotal)
    }
    })

    return({
      ...state,
      items: copyItems,
      total: tempTotal
    })



    default:
    return state

  }
}
export default cartReducer
