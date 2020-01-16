import React, { useState } from 'react';
import Stats from './Stats';
import data from './data';
import Products from './Products';

export default function InventoryGameApp() {
  const [products, setProducts] = useState(data.products);

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
      <Stats products={products} />
      <Products products={products} updateStock={updateStock} />
    </div>
  );
}
