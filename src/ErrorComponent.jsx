import React from 'react';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className='flex justify-center items-center h-16 w-full bg-extra text-white font-heading'>
      <h1 className='text-secondary'>{errorMessage}</h1>
    </div>
  );
};

export default ErrorComponent;
