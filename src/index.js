import React from 'react';
import ReactRouterDom from 'react-dom';
import { Provider } from "react-redux";
/////////////Bellow library is used for react-redux implmenation//////////////////
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"; //it's a middleware
import App from './App';
import './index.css';
import rootReducer from "./redux/reducers";
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


////////////////////End of Redux///////////////////////////////////

/*
Applying our middleware to the store
*/

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactRouterDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
