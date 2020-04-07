import { FETCH_ITEMS } from './types.js'

export const fetchItems = () => {
  return(
    (dispatch) => {
      (async() => {
        try{
          let response = await fetch('http://localhost:3000/items')
          let data = await response.json()
          console.log(data);
          dispatch({
            type: FETCH_ITEMS,
            payload: data
          })
        }catch(e){
          console.log(e);
        }
      })()
    }
  )
}
