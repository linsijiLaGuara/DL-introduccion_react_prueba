import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./myApi.css";
const MyApi = () => {
  const [infoPokemon, setInfoPokemon] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon";
      const response = await fetch(url);
      const dataPokemon = await response.json();

      const resultPokemon = await Promise.all(
        dataPokemon.results.map(async (pokemon) => {
          // Obtener el id desde la URL
          const id = pokemon.url.split("/")[6];

          // Realizar una segunda llamada a la API para obtener información detallada del Pokémon
          const pokemonResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const pokemonData = await pokemonResponse.json();

          return {
            id,
            name: pokemon.name,
            img: pokemonData.sprites.front_default,
          };
        })
      );

      setInfoPokemon(resultPokemon);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  return (
    <>
      <div className="Pokemon-container">
        
        {infoPokemon.length ? (
          infoPokemon.map((pokemon, key) => (
            <div key={key}>
              <Card className="Pokemon-card">
                <Card.Img variant="top" src={pokemon.img} alt={pokemon.name} />
                <Card.Title className="titlecenter">{pokemon.name}</Card.Title>
              </Card>
            </div>
          ))
        ) : (
          <h1></h1>
        )}
      </div>
    </>
  );
};

export default MyApi;
