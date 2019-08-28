import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import "./styles.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import getUrls from "./actions/getUrls";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

store.dispatch(getUrls("dog"));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
