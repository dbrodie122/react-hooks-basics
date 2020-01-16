import React from 'react';

export default function Stats({ products }) {
  const numberOfLowInStock = products.filter(
    product => product.numberInStock <= 3
  ).length;
  return <p>There are {numberOfLowInStock} products with low inventory</p>;
}
