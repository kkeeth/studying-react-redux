import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./styles.css";
import App from "./App";
import rootReducer from "./reducers";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
