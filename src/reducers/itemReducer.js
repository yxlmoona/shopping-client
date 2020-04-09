import { FETCH_ITEMS, SHOW_ITEM, HANDLE_SUBMIT_REVIEW} from  '../actions/types'

const initialState = {
  items: [],
  newItems:[],
  popularItems:[],
  expensiveItems:[],
  item: {},

}

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ITEMS:
      let newItems = []
      for(let item of action.payload){
        if(item.year == 2020){
          newItems.push(item)
        }
      }
      let popularItems = []
      for(let item of action.payload){
        if(item.sales > 460){
          popularItems.push(item)
        }
      }
      let expensiveItems = []
      for(let item of action.payload){
        if(item.price > 100){
          expensiveItems.push(item)
        }
      }
      return({
        ...state,
        items: action.payload,
        newItems: newItems,
        popularItems: popularItems,
        expensiveItems: expensiveItems
      })
    case SHOW_ITEM:
      return({
        ...state,
        item: action.payload
      })



    case HANDLE_SUBMIT_REVIEW:
    let copyItem = state.item
    copyItem.reviews = [action.payload, ...state.item.reviews]
    return({
      ...state,
      item: copyItem
    })

    default:
    return state

  }
}
export default itemReducer
