import React from 'react';

export default function Stats({ nums }) {
  const getUnique = nums => {
    const dict = nums.reduce((acc, num) => {
      if (acc[num]) {
        return acc;
      } else {
        acc[num] = num;
        return acc;
      }
    }, {});
    return Object.values(dict).length;
  };
  return (
    <div>
      <h3>Stats</h3>
      <p>{getUnique(nums)} Unique Numbers</p>
    </div>
  );
}
