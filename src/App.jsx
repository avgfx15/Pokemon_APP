import React, { useEffect, useState } from 'react';

import './App.css';

import PokemonComponent from './PokemonComponent';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';

// @ API Variable
const API = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

// # Main Component
const App = () => {
  // @ Pokemon Data
  const [pokemonData, setPokemonData] = useState([]);

  // @ Loading State
  const [loading, setLoading] = useState(true);

  // @ Error State
  const [error, setError] = useState(null);

  // @ Search Term State
  const [searchTerm, setSearchTerm] = useState('');

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
      setLoading(false);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  // % Render API Data With useEffect
  useEffect(() => {
    fetchPokemonAPI();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }
  if (error) {
    return <ErrorComponent errorMessage={error.message} />;
  }

  // # Filter Pokemon Data Based on Search Term
  const filteredPokemonData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // # Main Render
  return (
    <div className='flex justify-center bg-primary'>
      <PokemonComponent
        pokemonData={pokemonData}
        filteredPokemonData={filteredPokemonData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
};

export default App;
