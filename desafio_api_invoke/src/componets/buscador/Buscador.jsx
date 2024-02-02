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
      <button type="button"  onClick={() => props.handlerButton()}>
        Buscar
      </button>
    </>
  );
};

export default Buscar;
