import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import App from "./containers/AppLogic";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
