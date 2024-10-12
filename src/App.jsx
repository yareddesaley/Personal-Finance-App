import React, { createContext, useState } from "react";
import Home from "./pages/Home";

export const myContext = createContext();
const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <myContext.Provider value={{ show, setShow }}>
        <Home />
      </myContext.Provider>
    </div>
  );
};

export default App;
