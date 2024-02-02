/* eslint-disable react/prop-types */
import React from "react";

const Buscar = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.handlerInput(e.target.value)}
      />
    </>
  );
};

export default Buscar;
