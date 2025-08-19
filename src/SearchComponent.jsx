import React, { useState } from 'react';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  // Placeholder for search functionality
  const handleSearch = (event) => {
    // Logic to handle search input
    setSearchTerm(event.target.value);
  };
  return (
    <div className='flex justify-center items-center p-4 mb-3 rounded-lg gap-2'>
      <input
        type='text'
        placeholder='Search Pokemon'
        className='px-2 py-1 rounded-lg border border-primary bg-secondary text-black'
        name='search'
        value={searchTerm} // Placeholder for controlled input
        onChange={handleSearch} // Placeholder for controlled input change handler
      />
      <button className='text-xl font-bold text-white bg-secondary px-2 py-1 rounded-lg'>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
