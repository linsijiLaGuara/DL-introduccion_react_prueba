/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./myApi.css";


const MyApi = ({ searchTerm }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error

  useEffect(() => {
    consultarApi();
  }, [searchTerm, sorted]);

  const sortPokemonByName = () => {
    const sortedPokemon = [...infoPokemon];
    sortedPokemon.sort((a, b) => a.name.localeCompare(b.name));

    setSorted((prevSorted) => !prevSorted);
    setInfoPokemon(sorted ? sortedPokemon : [...infoPokemon]);
  };

  const consultarApi = async () => {
    try {
      let url;
//busqueda 
      if (searchTerm) {
        url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
      } else {
        url = "https://pokeapi.co/api/v2/pokemon";
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("No se pudo obtener la información del servidor");
      }

      const dataPokemon = await response.json();

      if (searchTerm && dataPokemon.name) {
        setInfoPokemon([
          {
            id: dataPokemon.id,
            name: dataPokemon.name,
            img: dataPokemon.sprites.front_default,
          },
        ]);
        setErrorMessage(""); // Limpiar mensaje de error si se encontró el personaje
      } else {
        const resultPokemon = await Promise.all(
          dataPokemon.results.map(async (pokemon) => {
            const id = pokemon.url.split("/")[6];
            const pokemonResponse = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`
            );

            if (!pokemonResponse.ok) {
              throw new Error("No se pudo obtener la información del servidor");
            }

            const pokemonData = await pokemonResponse.json();

            return {
              id,
              name: pokemon.name,
              img: pokemonData.sprites.front_default,
            };
          })
        );

        if (sorted) {
          resultPokemon.sort((a, b) => a.name.localeCompare(b.name));
        }

        setInfoPokemon(resultPokemon);

        if (resultPokemon.length === 0) {
          setErrorMessage("Personaje no encontrado");
        } else {
          setErrorMessage(""); // Limpiar mensaje de error si se encontraron personajes
        }
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
      setErrorMessage("Error del servicio");
    }
  };

  return (
    <>
      <div>
        <Button className="buton-color" onClick={sortPokemonByName}>
          {sorted ? "Desactivar Orden" : "Activar Orden"}
        </Button>
      </div>
      <div className="Pokemon-container">
        {errorMessage ? (
          <h1>{errorMessage}</h1>
        ) : (
          infoPokemon.length ? (
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
          )
        )}
      </div>
    </>
  );
};

export default MyApi;