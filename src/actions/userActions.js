import { REGISTER, SIGN_IN, CHANGE_USER_VIEW } from './types.js'
import jwt_decode from 'jwt-decode'

export const register = (e,postData) => {
  e.preventDefault()

  return(
    (dispatch) => {
      (async() => {
        try{
          let response = await fetch('https://shopping-app-api.herokuapp.com/users',{
            body: JSON.stringify(postData),
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
              }
          })
          let data = await response.json()

          console.log(data);
          dispatch({
            type: REGISTER,
            payload: data
          })
        }catch(e){
          console.log(e);
        }
      })()
    }
  )
}



export const signIn = (e,postData) => {
  e.preventDefault()
  console.log(postData);
  return(
    (dispatch) => {
      (async() => {
        try{
          let response = await fetch('https://shopping-app-api.herokuapp.com/users/login',{
            body: JSON.stringify(postData),
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            
              }
          })
          // console.log(response);
          // localStorage.setItem('jwtToken', response)

          let data = await response.json()
          // const decoded = jwt_decode(data)

          console.log(data);
          // const token = data.token;

          dispatch({
            type: SIGN_IN,
            payload: data
          })
        }catch(e){
          console.log(e);
        }
      })()
    }
  )
}



export const changeUserView = (view) => {
  return(
    (dispatch) => {
      dispatch({
        type: CHANGE_USER_VIEW,
        payload: view,

      })

    }
  )
}
