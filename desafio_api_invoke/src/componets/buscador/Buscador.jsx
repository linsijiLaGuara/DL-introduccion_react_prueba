
const Buscar =()=>{
    const resultPokemon = await Promise.all(
        dataPokemon.results.map(async (pokemon) => {
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
}
export default Buscar