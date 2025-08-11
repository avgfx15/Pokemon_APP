import React, { useEffect, useState } from 'react';
import PokemonComponent from './PokemonComponent';

// @ API Variable
const API = 'https://pokeapi.co/api/v2/pokemon';

// # Main Component
const App = () => {
  // @ Pokemon Data
  const [pokemonData, setPokemonData] = useState([]);

  // $ Fetch Pokemon Data from API
  const fetchPokemonAPI = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      // % Fetch each url for Pokemon Data
      const detailedData = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });
      const detailedPokemonData = await Promise.all(detailedData);

      setPokemonData(detailedPokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  // % Render API Data With useEffect
  useEffect(() => {
    fetchPokemonAPI();
  }, []);

  // # Main Render
  return (
    <div>
      <PokemonComponent pokemonData={pokemonData} />
    </div>
  );
};

export default App;
