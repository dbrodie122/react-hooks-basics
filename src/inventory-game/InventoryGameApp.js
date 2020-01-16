import React, { useState } from 'react';
import Stats from './Stats';
import data from './data';
import Products from './Products';

export default function InventoryGameApp() {
  const [products, setProducts] = useState(data.products);

  const increment = productToIncrement => {
    const incremented = {
      ...productToIncrement,
      numberInStock: productToIncrement.numberInStock + 1
    };
    const updatedProducts = products.map(product => {
      if (product.id === incremented.id) {
        return incremented;
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  const decrement = productToDecrement => {};

  const updateStock = (productToUpdate, howToUpdate) => {
    const updated = {
      ...productToUpdate,
      numberInStock:
        howToUpdate === 'increment'
          ? productToUpdate.numberInStock + 1
          : productToUpdate.numberInStock - 1
    };
    const updatedProducts = products.map(product => {
      if (product.id === updated.id) {
        return updated;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>The Inventory Game</h1>
      <Stats />
      <Products products={products} updateStock={updateStock} />
    </div>
  );
}
