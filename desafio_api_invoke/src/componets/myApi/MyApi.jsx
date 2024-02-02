/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./myApi.css";

const MyApi = ({ searchTerm }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);

  const sortPokemonByName = () => {
    const sortedPokemon = [...infoPokemon];
    sortedPokemon.sort((a, b) => a.name.localeCompare(b.name));
    setInfoPokemon(sortedPokemon);
  };

  useEffect(() => {
    sortPokemonByName();
    consultarApi();
  }, [infoPokemon, searchTerm]);

  
  const consultarApi = async () => {
    try {
      let url;

      if (searchTerm) {
        url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
      } else {
        url = "https://pokeapi.co/api/v2/pokemon";
      }

      const response = await fetch(url);
      const dataPokemon = await response.json();

      if (searchTerm && dataPokemon.name) {
        // Si se ingresó un término de búsqueda y se encontró un Pokémon, mostramos solo ese Pokémon
        setInfoPokemon([{
          id: dataPokemon.id,
          name: dataPokemon.name,
          img: dataPokemon.sprites.front_default,
        }]);
      } else {
        // Si no hay término de búsqueda o no se encontró un Pokémon, mostramos todos los Pokémon
        const resultPokemon = await Promise.all(
          dataPokemon.results.map(async (pokemon) => {
            const id = pokemon.url.split("/")[6];
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
      }
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
                <Card.Title className="title-center">{pokemon.name}</Card.Title>
              </Card>
            </div>
          ))
        ) : (
          <h1>No se encontraron resultados</h1>
        )}
      </div>
    </>
  );
};

export default MyApi;
