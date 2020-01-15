import React, { useState } from 'react';
import Numbers from './Numbers';
import Stats from './Stats';

export default function NumberGameApp() {
  const [numbers, setNumbers] = useState([]);
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 11);
  };
  const handleClick = () => {
    const nums = [...numbers, generateRandomNumber()];
    setNumbers(nums);
  };
  return (
    <div className='container'>
      <div className='row m-4'>
        <div className='col-4'>
          <button type='button' className='btn btn-info' onClick={handleClick}>
            Add Number
          </button>
        </div>
        <div className='col-8'>
          <Stats nums={numbers} />
        </div>
      </div>
      <Numbers nums={numbers} />
    </div>
  );
}
