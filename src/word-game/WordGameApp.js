import React, { useState } from 'react';
import faker from 'faker';
import Buttons from './Buttons';
import Words from './Words';
import Stats from './Stats';
const generateWord = type => {
  const method =
    type === 'noun' ? faker.company.bsNoun : faker.company.bsAdjective;
  return {
    type,
    text: method()
  };
};

export default function WordGameApp() {
  const [words, setWords] = useState([]);

  const handleButtonClick = type => {
    const newWord = generateWord(type);
    setWords([...words, newWord]);
  };
  return (
    <div className='container'>
      <h1>The Word Game</h1>
      <Stats words={words} />
      <Buttons handleButtonClick={handleButtonClick} />
      <Words words={words} />
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  );
}
