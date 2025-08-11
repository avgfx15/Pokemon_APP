import React from 'react';

const PokemonComponent = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <div>
      <h1>Pokemon Component</h1>
      {/* {pokemonData.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon.name}</p>
        </div>
      ))} */}
    </div>
  );
};

export default PokemonComponent;
