import { FETCH_BRANDS } from './types.js'
export const fetchBrands = () => {
  return(
    (dispatch) => {
      (async() => {
        try{
        
          let response = await fetch('http://localhost:3000/brands')
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
