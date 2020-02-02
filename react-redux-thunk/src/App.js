import React from "react";

import ImageList from "./containers/ImageList";
import Search from "./containers/search";

const App = () => {
  return (
    <div>
      <Search />
      <hr />
      <ImageList />
    </div>
  );
};

export default App;
