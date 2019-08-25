import React from "react";

const App = ({ number, title, day, plus, minus }) => (
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
  </div>
);

export default App;
