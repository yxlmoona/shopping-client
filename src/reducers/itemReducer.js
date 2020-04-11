import { FETCH_ITEMS, SHOW_ITEM, HANDLE_SUBMIT_REVIEW, ADD_LOVE} from  '../actions/types'

const initialState = {
  items: [],
  newItems:[],
  popularItems:[],
  expensiveItems:[],
  allMakeup:[],
  allSkincare:[],
  item: {},
  makeupBrands:[],
  skincareBrands:[],
  saleItems:[]
}

const itemReducer = (state = initialState, action) => {
  let copyItem = state.item
  switch (action.type) {
    case FETCH_ITEMS:
      let newItems = []
      for(let item of action.payload){
        if(item.year == 2020){
          newItems.push(item)
        }
      }
      let saleItems = []
      for(let item of action.payload){

        if(item.sprice != null){
          saleItems.push(item)
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
      let allMakeup = []
      let makeupBrands = []


      for(let item of action.payload){
        if(item.category1 == 'makeup'){
          allMakeup.push(item)

          if(makeupBrands.includes(item.brand.name) == false){
            makeupBrands.push(item.brand.name)
          }

        }

      }
      let allSkincare = []
      let skincareBrands = []
      for(let item of action.payload){
        if(item.category1 == 'skincare'){
          allSkincare.push(item)
          if(skincareBrands.includes(item.brand.name) == false){
            skincareBrands.push(item.brand.name)
          }
        }
      }
      return({
        ...state,
        items: action.payload,
        newItems: newItems,
        popularItems: popularItems,
        expensiveItems: expensiveItems,
        allMakeup: allMakeup,
        allSkincare: allSkincare,
        makeupBrands: makeupBrands,
        skincareBrands: skincareBrands,
        saleItems: saleItems
      })
    case SHOW_ITEM:
      console.log(action.payload);
      return({
        ...state,
        item: action.payload
      })



    case HANDLE_SUBMIT_REVIEW:

    copyItem.reviews = [action.payload, ...state.item.reviews]
    return({
      ...state,
      item: copyItem
    })

    case ADD_LOVE:

    copyItem.loves = action.payload
    return({
      ...state,
      item: copyItem
    })

    default:
    return state

  }
}
export default itemReducer
