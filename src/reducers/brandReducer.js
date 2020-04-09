import { FETCH_BRANDS } from  '../actions/types'

const initialState = {
  brands: [],
  featuredBrands:[],

  brand: {
    name:{},
    desc: 0
  }

}

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_BRANDS:
    for(let brand of action.payload){
      if(brand.featured == true){
        state.featuredBrands.push(brand)
      }
    }
    return({
      ...state,
      brands: action.payload,
      featuredBrands: state.featuredBrands
    })

    default:
    return state
  }
}

export default brandReducer
