import React from "react";

import ImageList from "./containers/imageList";
import Search from "./containers/search";

const App = () => {
  return (
    <div>
      <Search />
      <ImageList />
    </div>
  );
};

export default App;
