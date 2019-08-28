import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import giphyAPI from "./APIs/giphyAPI";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

giphyAPI("dog").then(res => {
  console.log(res.data.data);
});
