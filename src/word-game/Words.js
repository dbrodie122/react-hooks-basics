import React from 'react';

export default function Words({ words }) {
  const wordTiles = words.map((word, i) => {
    if (word.type === 'noun') {
      return (
        <div className='alert alert-primary col-2 m-2' key={word.text + i}>
          {word.text} (Noun)
        </div>
      );
    } else {
      return (
        <div className='alert alert-warning col-2 m-2' key={word.text + i}>
          {word.text} (Adjective)
        </div>
      );
    }
  });
  return (
    <div className='row'>
      {wordTiles.length === 0 ? (
        <p className='text-center'>Try adding a word!</p>
      ) : (
        wordTiles
      )}
    </div>
  );
}
