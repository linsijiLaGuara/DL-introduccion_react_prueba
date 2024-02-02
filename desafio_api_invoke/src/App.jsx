import MyApi from "./componets/myApi/MyApi";
import Navbars from "./componets/navbars/navbars";
import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <header>
        <Navbars handleInput={handleInput} />
      </header>
      <hr />
      <main>
        <MyApi searchTerm={searchTerm} />
      </main>
      <footer>
        <p>© 2024 Tu Compañía</p>
      </footer>
    </>
  );
};

export default App;
