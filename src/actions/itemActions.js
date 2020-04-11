import { FETCH_ITEMS, SHOW_ITEM, HANDLE_SUBMIT_REVIEW, ADD_LOVE, HANDLE_VIEW } from './types.js'

export const fetchItems = () => {
  return(
    (dispatch) => {
      (async() => {
        try{
          let response = await fetch('https://shopping-app-api.herokuapp.com/items')
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



export const handleSubmitReview = (e, addData, brandId, itemId) => {
  e.preventDefault()
  return(
    (dispatch) => {
      (async () => {
        try{
          let res = await fetch(`https://shopping-app-api.herokuapp.com/brands/${brandId}/items/${itemId}/reviews`,{
            body: JSON.stringify(addData),
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
          })
          let data = await res.json()
          console.log(data);
          dispatch({
            type: HANDLE_SUBMIT_REVIEW,
            payload: data
          })
        }catch(e){
          console.log(e);
        }

      })()

    }
  )
}

export const addLove = (brandId, item) => {

  return(
    (dispatch) => {
      (async () => {
        try{
          let res = await fetch(`https://shopping-app-api.herokuapp.com/brands/${brandId}/items/${item.id}`,{
            body: JSON.stringify({loves: parseInt(item.loves) + 1}),
            method: 'PUT',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
          })
          let data = await res.json()
          console.log(data);
          dispatch({
            type: ADD_LOVE,
            payload: data.loves
          })
        }catch(e){
          console.log(e);
        }

      })()

    }
  )
}

export const handleView = (view) => {
  return(
    (dispatch) => {
      dispatch({
        type: HANDLE_VIEW,
        payload: view
      })

    }
  )
}
