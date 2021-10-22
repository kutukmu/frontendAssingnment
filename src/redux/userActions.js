import axios from 'axios'
import {
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_ERROR,
    USER_LOGOUT,
  } from "./userConstant.js"

const userSignInAction = (formInput) => async(dispatch) =>{
    try{
        const {data} = await axios.post("https://fabbackend.herokuapp.com/api/user/login",formInput)
        
         if(data.user){
            dispatch({type:USER_SIGNIN_SUCCESS, payload:data.user})
            localStorage.setItem('user', JSON.stringify(data.user));
            setTimeout(() =>{

            }, 20000)
        }
    }catch (error) {
        const { data } = error.response;
        dispatch({ type: USER_SIGNIN_ERROR, payload: data.message });
      }
}

const logOutAction = () => (dispatch) =>{
    localStorage.removeItem("user")
    dispatch({type:USER_LOGOUT})
}

export {
    userSignInAction,
    logOutAction
}