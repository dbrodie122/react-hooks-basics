import React from 'react';

export default function Numbers({ nums }) {
  const even = nums.filter(num => num % 2 === 0);
  const odd = nums.filter(num => num % 2 !== 0);

  const renderListItems = arr => {
    return arr.map((item, i) => <li key={`${item} ${i}`}>{item}</li>);
  };
  return (
    <div className='row'>
      <div className='col-sm'>
        <h3>All ({nums.length})</h3>
        <ul>{renderListItems(nums)}</ul>
      </div>
      <div className='col-sm'>
        <h3>Even ({even.length})</h3>
        <ul>{renderListItems(even)}</ul>
      </div>
      <div className='col-sm'>
        <h3>Odd ({odd.length})</h3>
        <ul>{renderListItems(odd)}</ul>
      </div>
    </div>
  );
}
