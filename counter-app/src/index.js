import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return state + 1;

    case "MINUS_ONE":
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "PLUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });
// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
