import { FETCH_BRANDS, SHOW_BRAND } from  '../actions/types'

const initialState = {
  brands: [],
  featuredBrands:[],

  brand: {}

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
  case SHOW_BRAND:
    let showBrand = {}
    for(let brand of state.brands){
      if(brand.name == action.payload){
        showBrand = brand
      }
    }
    return({
      ...state,
      brand: showBrand
    })

    default:
    return state
  }
}

export default brandReducer
