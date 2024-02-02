/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Buscar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = () => {
    props.handlerInput(searchTerm);
  };

  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Buscar</button>
    </>
  );
};

export default Buscar;
