import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import "./style.css"
import 'semantic-ui-css/semantic.min.css'
import reducers from './redux/Reducers'
import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
const userInf = localStorage.getItem('user') || {};

const initialState = {
    signInUser:userInf
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(reduxThunk))
);

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>, document.querySelector("#root"))