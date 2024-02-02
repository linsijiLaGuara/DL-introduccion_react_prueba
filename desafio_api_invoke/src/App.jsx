import MyApi from "./componets/myApi/MyApi";
import Buscar from "./componets/buscador/Buscador";
import Navbars from "./componets/navbars/navbars"
import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <header className="header-nav">
      <Navbars/>
        
        
      </header>
      <main>
        <Buscar
          placeholder="Busca tu Pokemon"
          handlerInput={handleInput}
          handlerButton={() => {}}
        />
      </main>
      <MyApi searchTerm={searchTerm} />
      <footer>
        <p>© 2024 Tu Compañía</p>
      </footer>
    </div>
  );
};

export default App;
