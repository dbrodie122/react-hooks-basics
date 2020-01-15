import React from 'react';

export default function Buttons({ handleButtonClick }) {
  return (
    <div>
      <button
        onClick={() => handleButtonClick('noun')}
        type='button'
        className='btn btn-primary m-4'
      >
        Add Noun
      </button>
      <button
        onClick={() => handleButtonClick('adjective')}
        type='button'
        className='btn btn-warning m-4'
      >
        Add Adjective
      </button>
    </div>
  );
}
