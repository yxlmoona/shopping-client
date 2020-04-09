import { FETCH_BRANDS, SHOW_BRAND} from './types.js'


export const fetchBrands = () => {
  return(
    (dispatch) => {
      (async() => {
        try{

          let response = await fetch('https://shopping-app-api.herokuapp.com/brands')
          let data = await response.json()
          console.log(data);
          dispatch({
            type: FETCH_BRANDS,
            payload: data
          })
        }catch(e){
          console.log(e);
        }
      })()
    }
  )
}

export const showBrand = (brand) => {
  return(
    (dispatch) => {
      dispatch({
        type: SHOW_BRAND,
        payload: brand
      })

    }
  )
}
