import { FETCH_ITEMS, SHOW_ITEM } from './types.js'

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

export const showItem = (item) => {
  return(
    (dispatch) => {
      dispatch({
        type: SHOW_ITEM,
        payload: item
      })

    }
  )
}
