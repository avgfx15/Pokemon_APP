import React from 'react';
import ThemeSwitcherComponent from './ThemeSwitcherComponent';
import PokemonCard from './PokemonCard';
import SearchComponent from './SearchComponent';

const PokemonComponent = ({
  pokemonData,
  filteredPokemonData,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-center items-center p-2 bg-secondary mb-3'>
        <h1 className='text-3xl text-extra font-bold'>Pokemon Component</h1>
        <ThemeSwitcherComponent />
      </div>
      <div>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {filteredPokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemonData={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonComponent;
