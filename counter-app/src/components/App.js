import React from "react";

const App = ({
  number,
  title,
  day,
  plus,
  minus,
  asyncPlus,
  asyncMinus,
  getJson
}) => (
  <div>
    <h2>
      App {number} : {title} : {day}
    </h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      +10
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      -10
    </button>
    <button
      onClick={() => {
        asyncPlus(10);
      }}
    >
      async +10
    </button>
    <button
      onClick={() => {
        asyncMinus(10);
      }}
    >
      async -10
    </button>
    <button
      onClick={() => {
        getJson();
      }}
    >
      get json
    </button>
  </div>
);

export default App;
