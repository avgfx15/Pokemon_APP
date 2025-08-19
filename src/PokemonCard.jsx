import React from 'react';

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className='flex flex-col items-center p-2 gap-4 flex-wrap w-72 h-100 bg-secondary mb-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>
      <div className='bg-extra rounded-[50%] w-full h-40 '>
        <img
          src={pokemonData.sprites.front_default}
          alt='pokemon'
          className='h-full mx-auto'
        />
      </div>
      <h1 className='text-2xl font-bold text-center capitalize'>
        {pokemonData.name}
      </h1>
      <div className='text-sm bg-white text-black p-2 rounded-lg capitalize'>
        <p>
          {pokemonData.types.map((typeData) => typeData.type.name).join(', ')}
        </p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-2'>
        <div className='flex justify-center items-center gap-2 e rounded-2xl'>
          <p className='text-sm font-bold'>Height</p>
          <span className='font-bold'>{pokemonData.height}</span>
        </div>
        <div className='flex justify-center items-center gap-2  rounded-2xl'>
          <p className='font-bold text-sm'>Weight</p>
          <span className='font-bold'>{pokemonData.weight}</span>
        </div>
        <div className='flex justify-center items-center gap-2  rounded-2xl'>
          <p className='font-bold text-sm'>Attack</p>
          <span className='font-bold'>{pokemonData.stats[1].base_stat}</span>
        </div>
      </div>
      <div className='flex gap-2 justify-between text-black p-2 rounded-lg w-full'>
        <p className='text-sm font-bold text-center'>
          <span className='font-normal'>ID</span> {pokemonData.id}
        </p>
        <p className='text-sm font-bold text-center'>
          <span className='font-normal'>Experience </span>
          {pokemonData.base_experience}
        </p>
        <p className='text-sm font-bold text-center'>
          <span className='font-normal'>Order</span> {pokemonData.order}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
