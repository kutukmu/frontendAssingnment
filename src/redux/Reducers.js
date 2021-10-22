
import { combineReducers } from "redux";
import UserReducer from './userSignInReducer'
export default combineReducers({
    signInUser:UserReducer
  });