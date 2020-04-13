import { FETCH_ITEMS, SHOW_ITEM, HANDLE_SUBMIT_REVIEW, ADD_LOVE, HANDLE_VIEW, HANDLE_CHANGE_MODE} from  '../actions/types'

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
  itemView:[],
  viewTitle:''
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


    case HANDLE_VIEW:
    let itemView = []
    let viewTitle = ''
    if(action.payload == 'eye'){
      viewTitle = 'eye'
      for(let item of state.items){
        if(item.category2 == "eye"){
          itemView.push(item)
        }
      }

    }else if(action.payload == 'face'){
      viewTitle = 'face'
      for(let item of state.items){
        if(item.category2 == "face"){
          itemView.push(item)
        }
      }
    }else if(action.payload == 'sale'){
      viewTitle = 'sale'
      for(let item of state.items){
        if(item.sprice != null){
          itemView.push(item)
        }
      }
    }else if(action.payload == 'lip'){
      viewTitle = 'lip'
      for(let item of state.items){
        if(item.category2 == "lip"){
          itemView.push(item)
        }
      }
    }else{
      viewTitle = action.payload
      for(let item of state.items){
        if(item.title.toLowerCase().includes(viewTitle.toLowerCase()) || item.body.toLowerCase().includes(viewTitle.toLowerCase())){
          itemView.push(item)
        }
      }
    }

    return({
      ...state,
      itemView: itemView,
      viewTitle: viewTitle
    })

    case HANDLE_CHANGE_MODE:
    let allMakeupCopy = [...state.allMakeup]
    let allSkincareCopy = [...state.allSkincare]
    let allItemViewCopy = [...state.itemView]

    if(action.category == 'makeup'){

      if(action.view == 'Lowest'){
        allMakeupCopy.sort((a,b) => {
          return a.price - b.price
        })
      }else if(action.view == 'Highest'){
        allMakeupCopy.sort((a,b) => {
          return b.price - a.price
        })
      }else if(action.view == 'origin'){
        allMakeupCopy.sort((a,b) => {
          return a.id - b.id
        })
      }else{
        allMakeupCopy.sort((a,b) => {
          return b.sales - a.sales
        })
      }
    }else if(action.category == 'skincare'){
      if(action.view == 'Lowest'){
        allSkincareCopy.sort((a,b) => {
          return a.price - b.price
        })
      }else if(action.view == 'Highest'){
        allSkincareCopy.sort((a,b) => {
          return b.price - a.price
        })
      }else if(action.view == 'origin'){
        allSkincareCopy.sort((a,b) => {
          return a.id - b.id
        })
      }else{
        allSkincareCopy.sort((a,b) => {
          return b.sales - a.sales
        })
      }
    }else{
      if(action.view == 'Lowest'){
        allItemViewCopy.sort((a,b) => {
          return a.price - b.price
        })
      }else if(action.view == 'Highest'){
        allItemViewCopy.sort((a,b) => {
          return b.price - a.price
        })
      }else if(action.view == 'origin'){
        allItemViewCopy.sort((a,b) => {
          return a.id - b.id
        })
      }else{
        allItemViewCopy.sort((a,b) => {
          return b.sales - a.sales
        })
      }
    }
    return({
      ...state,
      allMakeup: allMakeupCopy,
      allSkincare: allSkincareCopy,
      itemView: allItemViewCopy
    })

    default:
    return state

  }
}
export default itemReducer
