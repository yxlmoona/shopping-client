import { FETCH_ITEMS, SHOW_ITEM, HANDLE_SUBMIT_REVIEW } from './types.js'

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

// export const handleChangeReview = (e) => {
//   return(
//     (dispatch) => {
//       dispatch({
//         type: HANDLE_CHANGE_REVIEW,
//         body: e.target.value,
//
//       })
//     }
//   )
// }
//
// export const handleRating = (rating) => {
//   return(
//     (dispatch) => {
//       dispatch({
//         type: HANDLE_RATING,
//         rating: rating,
//
//       })
//     }
//   )
// }


export const handleSubmitReview = (e, addData, brandId, itemId) => {
  e.preventDefault()
  return(
    (dispatch) => {
      (async () => {
        try{
          let res = await fetch(`http://localhost:3000/brands/${brandId}/items/${itemId}/reviews`,{
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
